# Plugin Marketplace Implementation Plan

## Document Purpose
This plan outlines the step-by-step implementation of a full Plugin Marketplace system for erxes. Created to ensure continuity across development sessions.

**Status**: Planning phase complete, awaiting execution  
**Last Updated**: 2025-01-XX  
**Target**: Replace hardcoded plugin list with database-driven registry, enable developer submissions, and build secure installation pipeline

---

## Current State (As of Last Session)

### ✅ Already Implemented
1. **Basic Marketplace UI** - Card grid at `/settings/marketplace` with install/uninstall toggle
2. **GraphQL Query** - `enabledServices` returns 21 hardcoded plugins with status
3. **GraphQL Mutation** - `configsManagePluginInstall(type, name)` toggles installation
4. **Dynamic Discovery** - `getPlugins()` checks Redis `erxes-active-plugins` before env vars
5. **Settings Navigation** - Marketplace route under Developer group

### ❌ Not Yet Implemented
- Database registry (plugins stored in TypeScript array)
- Plugin submission workflow
- Version management
- Dependency resolution
- Security scanning
- Organization-scoped installs
- Hot reload after installation

---

## Phase 1: Plugin Registry Service (Week 1-2)

**Goal**: Replace hardcoded `AVAILABLE_PLUGINS` array with database-driven registry

### Backend Tasks

#### 1.1 Prisma Schema Migration

Add to `backend/erxes-api-shared/prisma/schema.prisma`:

```prisma
model Plugin {
  id              String   @id @default(uuid())
  name            String   @unique
  namespace       String   @default("erxes")
  displayName     String
  description     String?
  author          String?
  license         String?  @default("MIT")
  category        String
  icon            String?
  readme          String?
  minCoreVersion  String?
  maxCoreVersion  String?
  status          String   @default("pending") // pending, approved, published, deprecated, archived
  isPaid          Boolean  @default(false)
  priceCents      Int?
  downloadCount   Int      @default(0)
  ratingAvg       Float    @default(0)
  ratingCount     Int      @default(0)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  versions        PluginVersion[]
  dependencies    PluginDependency[]
  dependents      PluginDependency[] @relation("PluginDependents")
  installations   PluginInstallation[]
  reviews         PluginReview[]
  
  @@map("plugins")
}

model PluginVersion {
  id          String   @id @default(uuid())
  pluginId    String
  plugin      Plugin   @relation(fields: [pluginId], references: [id], onDelete: Cascade)
  version     String
  changelog   String?
  downloadUrl String?
  backendUrl  String?
  frontendUrl String?
  checksum    String?
  fileSize    Int?
  status      String   @default("draft") // draft, active, deprecated
  isLatest    Boolean  @default(false)
  createdAt   DateTime @default(now())
  
  installations PluginInstallation[]
  
  @@unique([pluginId, version])
  @@map("plugin_versions")
}

model PluginDependency {
  id                  String  @id @default(uuid())
  pluginId            String
  plugin              Plugin  @relation(fields: [pluginId], references: [id], onDelete: Cascade)
  dependsOnPluginId   String
  dependsOnPlugin     Plugin  @relation("PluginDependents", fields: [dependsOnPluginId], references: [id], onDelete: Cascade)
  versionConstraint   String  @default("*")
  isRequired          Boolean @default(true)
  
  @@map("plugin_dependencies")
}

model PluginInstallation {
  id              String   @id @default(uuid())
  organizationId  String
  pluginId        String
  plugin          Plugin   @relation(fields: [pluginId], references: [id], onDelete: Cascade)
  versionId       String?
  version         PluginVersion? @relation(fields: [versionId], references: [id])
  status          String   @default("installed") // installed, active, paused, error, updating
  config          Json     @default("{}")
  installedAt     DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  @@unique([organizationId, pluginId])
  @@map("plugin_installations")
}

model PluginReview {
  id          String   @id @default(uuid())
  pluginId    String
  plugin      Plugin   @relation(fields: [pluginId], references: [id], onDelete: Cascade)
  userId      String
  rating      Int
  review      String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@map("plugin_reviews")
}
```

#### 1.2 GraphQL Schema Extensions

Add to `backend/core-api/src/modules/organization/settings/graphql/configs/schemas.ts`:

```graphql
type Plugin {
  id: String!
  name: String!
  namespace: String!
  displayName: String!
  description: String
  author: String
  license: String
  category: String!
  icon: String
  status: String!
  isPaid: Boolean
  priceCents: Int
  downloadCount: Int
  ratingAvg: Float
  ratingCount: Int
  createdAt: String
  updatedAt: String
  latestVersion: PluginVersion
  installedVersion: PluginVersion
  isInstalled: Boolean
}

type PluginVersion {
  id: String!
  version: String!
  changelog: String
  downloadUrl: String
  backendUrl: String
  frontendUrl: String
  status: String!
  isLatest: Boolean
  createdAt: String
}

type PluginDependency {
  pluginName: String!
  versionConstraint: String!
  isRequired: Boolean!
  isInstalled: Boolean
}

input PluginInput {
  name: String!
  displayName: String!
  description: String
  author: String
  license: String
  category: String!
  icon: String
  readme: String
  minCoreVersion: String
  maxCoreVersion: String
}

input PluginVersionInput {
  pluginId: String!
  version: String!
  changelog: String
  downloadUrl: String
  backendUrl: String
  frontendUrl: String
  checksum: String
}

extend type Query {
  plugins(search: String, category: String, status: String, page: Int, perPage: Int): [Plugin]
  pluginsTotalCount(search: String, category: String, status: String): Int
  plugin(id: String, name: String): Plugin
  pluginVersions(pluginId: String!): [PluginVersion]
  pluginDependencies(pluginId: String!): [PluginDependency]
}

extend type Mutation {
  pluginSubmit(input: PluginInput!): Plugin
  pluginUpdate(id: String!, input: PluginInput!): Plugin
  pluginDelete(id: String!): JSON
  pluginPublish(id: String!): Plugin
  pluginDeprecate(id: String!): Plugin
  pluginSubmitVersion(input: PluginVersionInput!): PluginVersion
  pluginInstall(pluginId: String!, versionId: String): JSON
  pluginUninstall(pluginId: String!): JSON
  pluginUpdateVersion(pluginId: String!, versionId: String!): JSON
}
```

#### 1.3 Resolver Implementation

Create `backend/core-api/src/modules/organization/settings/graphql/plugins/`:
- `queries.ts` - `plugins`, `plugin`, `pluginVersions`, `pluginDependencies`
- `mutations.ts` - CRUD operations + install/uninstall

#### 1.4 Seed Script

Create `scripts/seed-plugins.ts`:
- Migrate existing 21 hardcoded plugins into database
- Set status to "published"
- Create initial version records

### Frontend Tasks

#### 1.5 Enhanced Marketplace UI

Update `frontend/core-ui/src/modules/marketplace/components/MarketplaceSettings.tsx`:
- Add search bar with debounce
- Add category filter tabs (all, communication, sales, operations, etc.)
- Add sort dropdown (name, popularity, newest)
- Plugin detail modal with versions, changelog, dependencies

#### 1.6 GraphQL Queries

Create new queries:
- `GET_PLUGINS` - Paginated, filterable plugin list
- `GET_PLUGIN_DETAIL` - Single plugin with versions
- `GET_PLUGIN_DEPENDENCIES` - Dependency tree

### Phase 1 Deliverable
Database-backed plugin catalog with search/filter capabilities

---

## Phase 2: Plugin Submission Pipeline (Week 3-4)

**Goal**: Allow developers to submit plugins for admin review

### Backend Tasks

#### 2.1 Plugin Manifest Schema

Define JSON Schema for `erxes.plugin.json`:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["name", "version", "description", "author", "license", "category"],
  "properties": {
    "name": { "type": "string", "pattern": "^[a-z][a-z0-9-]*$" },
    "version": { "type": "string", "pattern": "^\\d+\\.\\d+\\.\\d+" },
    "description": { "type": "string", "maxLength": 500 },
    "author": { "type": "string" },
    "license": { "type": "string" },
    "category": { 
      "type": "string", 
      "enum": ["communication", "sales", "operations", "marketing", "support", "analytics", "integration"] 
    },
    "icon": { "type": "string" },
    "screenshots": { "type": "array", "items": { "type": "string" } },
    "minCoreVersion": { "type": "string" },
    "maxCoreVersion": { "type": "string" },
    "entryPoints": {
      "type": "object",
      "properties": {
        "backend": { "type": "string" },
        "frontend": { "type": "string" }
      }
    },
    "permissions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "module": { "type": "string" },
          "actions": { "type": "array", "items": { "type": "string" } }
        }
      }
    },
    "dependencies": {
      "type": "object",
      "additionalProperties": { "type": "string" }
    },
    "configSchema": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["string", "number", "boolean", "select", "multiselect"] },
          "required": { "type": "boolean" },
          "default": {},
          "label": { "type": "string" },
          "options": { "type": "array", "items": { "type": "string" } }
        }
      }
    }
  }
}
```

#### 2.2 REST API Endpoints

Add to `backend/core-api/src/modules/organization/routes.ts` or new file:

```typescript
// Plugin submission endpoints
POST   /api/v1/plugins/submit          // Submit new plugin (multipart: manifest + files)
GET    /api/v1/plugins/:id/status      // Check review status
POST   /api/v1/plugins/:id/versions    // Submit new version
DELETE /api/v1/plugins/:id             // Withdraw submission

// Admin endpoints
GET    /api/v1/admin/plugins/pending   // List pending plugins
POST   /api/v1/admin/plugins/:id/approve  // Apve plugin
POST   /api/v1/admin/plugins/:id/reject   // Reject with reason
GET    /api/v1/admin/plugins/reports   // Security reports
```

#### 2.3 File Upload Handler

Implement with Multer:
- Accept `multipart/form-data`
- Fields: `manifest` (JSON), `backendBundle` (zip), `frontendBundle` (zip)
- Validate file types and sizes
- Store in object storage (S3/MinIO)
- Generate SHA-256 checksums

#### 2.4 Submission State Machine

```
draft → submitted → scanning → under_review → approved → published
                ↓                ↓
             rejected       rejected (with reason)
                              ↓
                         resubmitted → under_review
```

### Frontend Tasks

#### 2.5 Developer Portal

Create new page at `/settings/developer-portal`:
- Submit plugin form (drag-drop zone for manifest + bundles)
- List my submitted plugins with status badges
- Version management (upload new versions)
- Rejection reason viewer

#### 2.6 Admin Review Dashboard

Create new page at `/settings/admin/plugin-review`:
- Queue of pending plugins with filters
- Plugin manifest viewer
- Approve/reject buttons with comment modal
- Security scan results viewer

### Phase 2 Deliverable
End-to-end plugin submission and review workflow

---

## Phase 3: Version Management & Dependencies (Week 5-6)

**Goal**: Semantic versioning, compatibility checking, dependency resolution

### Backend Tasks

#### 3.1 SemVer Utilities

Create `backend/erxes-api-shared/src/utils/semver.ts`:

```typescript
export function compareVersions(v1: string, v2: string): number;
export function satisfies(version: string, constraint: string): boolean;
export function isCompatible(pluginVersion: string, coreVersion: string): boolean;
export function getLatestVersion(versions: string[]): string;
export function isValidVersion(version: string): boolean;
```

#### 3.2 Dependency Resolution

Create `backend/erxes-api-shared/src/utils/plugin-dependencies.ts`:

```typescript
interface DependencyNode {
  pluginId: string;
  pluginName: string;
  version: string;
  requiredBy: string[];
  children: DependencyNode[];
}

export async function resolveDependencies(
  pluginId: string, 
  version: string
): Promise<DependencyNode>;

export function detectCircularDependencies(tree: DependencyNode): string[][];

export function checkVersionConflicts(
  dependencies: DependencyNode[]
): Array<{ pluginName: string; conflicts: string[] }>;
```

#### 3.3 Compatibility Matrix

Add to `PluginVersion` model:
- `minCoreVersion` and `maxCoreVersion` fields
- Compatibility check before installation
- Warning system for outdated plugins

#### 3.4 Version Lifecycle

Implement version states:
- `draft` - Being prepared
- `published` - Available for install
- `deprecated` - No longer recommended
- `archived` - Removed from marketplace

Only one `isLatest = true` per plugin.

### Frontend Tasks

#### 3.5 Version Selector

Update plugin detail modal:
- Dropdown to select version
- Show changelog between versions
- Compatibility warning if core version mismatch
- "Install this version" button

#### 3.6 Dependency Visualization

Add to plugin detail:
- Tree view of dependencies
- Auto-check dependent plugins during install
- Warning: "Plugin X depends on this" before uninstall

### Phase 3 Deliverable
Robust version management with dependency awareness

---

## Phase 4: Enhanced Installation Engine (Week 7-8)

**Goal**: Organization-scoped installs, dependency auto-install, conflict detection

### Backend Tasks

#### 4.1 Organization-Scoped State

Replace global `enabled_plugins` config with `PluginInstallation` table:

```typescript
// Schema already defined in Phase 1
// Key: unique constraint on [organizationId, pluginId]

// Migration:
// 1. Read existing `enabled_plugins` config
// 2. Create PluginInstallation rows for each org (or just one if single-tenant)
// 3. Delete `enabled_plugins` config
```

Update `getPlugins()` to read from `PluginInstallation` table instead of Config.

#### 4.2 Installation Orchestrator

Create `backend/core-api/src/modules/plugins/services/installation.ts`:

```typescript
class PluginInstallationService {
  async install(pluginId: string, versionId: string, organizationId: string) {
    // 1. Validate
    await this.validate(pluginId, versionId, organizationId);
    
    // 2. Resolve dependencies
    const deps = await this.resolveDependencies(pluginId, versionId);
    
    // 3. Download artifacts
    const artifacts = await this.downloadArtifacts(pluginId, versionId);
    
    // 4. Verify checksums
    await this.verifyChecksums(artifacts);
    
    // 5. Install
    await this.installArtifacts(artifacts, organizationId);
    
    // 6. Run migrations (if any)
    await this.runMigrations(pluginId, organizationId);
    
    // 7. Update state
    await this.markInstalled(pluginId, versionId, organizationId);
    
    // 8. Reload gateway
    await this.reloadGateway();
  }
  
  async uninstall(pluginId: string, organizationId: string) {
    // 1. Check if other plugins depend on this
    const dependents = await this.getDependents(pluginId, organizationId);
    if (dependents.length > 0) {
      throw new Error(`Cannot uninstall: required by ${dependents.map(d => d.name).join(', ')}`);
    }
    
    // 2. Uninstall
    await this.uninstallArtifacts(pluginId, organizationId);
    
    // 3. Update state
    await this.markUninstalled(pluginId, organizationId);
    
    // 4. Reload gateway
    await this.reloadGateway();
  }
}
```

#### 4.3 Conflict Detection

Check for:
- Incompatible plugin pairs
- Port collisions
- Route overlaps in Express
- Permission conflicts

#### 4.4 Hot Reload (Optional)

Trigger gateway reload without restart:
- Use existing `sendWorkerQueue('gateway', 'update-apollo-router')`
- Frontend: dynamic Module Federation remote addition
- May require page refresh for full effect

### Frontend Tasks

#### 4.5 Installation Progress UI

Create `frontend/core-ui/src/modules/marketplace/components/InstallationProgress.tsx`:
- Step-by-step progress bar
- Steps: Validating → Resolving dependencies → Downloading → Verifying → Installing → Activating
- Real-time updates via polling or WebSocket
- Cancel button (where safe)

#### 4.6 Plugin Settings

Create settings form based on `configSchema`:
- Dynamic form generation from JSON schema
- Save to `PluginInstallation.config`
- Validation before save

### Phase 4 Deliverable
Reliable installation with org isolation and dependency resolution

---

## Phase 5: Security & Quality Gates (Week 9-10)

**Goal**: Automated security scanning and approval workflow

### Backend Tasks

#### 5.1 Security Scanning Pipeline

Create async worker using BullMQ:

```typescript
// Worker: backend/core-api/src/modules/plugins/workers/security-scan.ts
interface SecurityScanJob {
  pluginId: string;
  versionId: string;
  backendUrl: string;
  frontendUrl: string;
}

async function runSecurityScan(job: SecurityScanJob): Promise<ScanResult> {
  const results: ScanResult = {
    passed: true,
    checks: []
  };
  
  // 1. Dependency vulnerability scan
  const depVulns = await scanDependencies(job);
  results.checks.push(depVulns);
  
  // 2. Secret detection
  const secrets = await detectSecrets(job);
  results.checks.push(secrets);
  
  // 3. Basic SAST
  const sast = await runSAST(job);
  results.checks.push(sast);
  
  // 4. Malware scan
  const malware = await scanMalware(job);
  results.checks.push(malware);
  
  results.passed = results.checks.every(c => c.passed);
  return results;
}
```

Tools to integrate:
- `npm audit` for dependency vulnerabilities
- `truffleHog` or `git-secrets` for secret detection
- Basic regex-based SAST (or SonarCloud API)
- ClamAV or cloud malware scanning service

#### 5.2 Checksum & Signing

- SHA-256 checksums for all artifacts
- Optional GPG signing for verified publishers
- Verify checksums on download before install

#### 5.3 Security Database

Track vulnerabilities:
- CVE database per plugin version
- Automated vulnerability notifications
- Force update mechanism for critical patches

### Frontend Tasks

#### 5.4 Security Badges

Add to plugin cards:
- "Verified" badge (signed by erxes)
- "Scanned" badge (passed security checks)
- Warning indicator for vulnerabilities
- Security report viewer in detail modal

#### 5.5 Admin Security Dashboard

Create `/settings/admin/plugin-security`:
- List plugins with vulnerabilities
- Force update/remove actions
- Audit log of security events
- CVE database browser

### Phase 5 Deliverable
Secure plugin ecosystem with automated scanning

---

## Phase 6: Discovery & Engagement (Week 11-12)

**Goal**: Search, ratings, recommendations

### Backend Tasks

#### 6.1 Search Index

Add full-text search:
- Index plugin name, description, tags, author
- Category and tag filtering
- Sort by relevance, downloads, rating, newest
- Pagination with cursor or offset

#### 6.2 Ratings & Reviews

Implement review system:
- `submitReview(pluginId, rating, review)` mutation
- Average rating calculation
- Review moderation (flag inappropriate)
- Helpful/not helpful voting

#### 6.3 Analytics

Track metrics:
- Installation counts per plugin
- Usage metrics (opt-in)
- Popular plugins (trending)
- Conversion rates (view → install)

#### 6.4 Featured/Curated Lists

- Featured plugins (admin curated)
- Trending (most installs this week)
- Staff picks
- New arrivals

### Frontend Tasks

#### 6.5 Enhanced Marketplace UI

Redesign marketplace page:
- Hero banner with featured plugin
- Category carousels
- Search with autocomplete
- Filter sidebar (category, rating, price, status)
- Plugin detail page with screenshots

#### 6.6 Rating Component

Create reusable rating components:
- Star rating input (1-5)
- Review form with validation
- Review list with pagination
- Helpful/not helpful buttons

### Phase 6 Deliverable
Engaging marketplace with social proof

---

## Phase 7: Distribution & CDN (Week 13-14)

**Goal**: Reliable artifact delivery with delta updates

### Backend Tasks

#### 7.1 Artifact Storage

Set up object storage:
```
Bucket: erxes-plugins
Structure:
  plugins/
    {plugin-name}/
      {version}/
        backend.zip
        frontend/
          remoteEntry.js
          assets/
```

#### 7.2 Delta Updates

Implement diff algorithm:
- Compare frontend chunks between versions
- Generate delta patch
- Client downloads only changed files
- Fallback to full download if delta fails

#### 7.3 CDN Integration

- CloudFront/Cloudflare for global distribution
- Signed URLs for private/paid plugins
- Cache invalidation on new version publish

### Frontend Tasks

#### 7.4 Update Checker

Background polling:
- Check for updates every 15 minutes
- Badge on marketplace icon when updates available
- "Update all" button
- Changelog preview before update

### Phase 7 Deliverable
Fast, reliable plugin delivery

---

## Phase 8: Monetization (Optional - Future)

**Goal**: Paid plugins and revenue sharing

### Backend Tasks

#### 8.1 Pricing Tiers

Support models:
- Free
- Standard (one-time purchase)
- Premium (subscription)
- Per-seat vs per-organization
- Trial periods (7-day, 14-day, 30-day)

#### 8.2 Billing Integration

- Stripe/PayPal integration
- Subscription management
- Invoice generation
- Tax calculation (VAT, sales tax)

#### 8.3 License Management

- License key generation (UUID-based)
- Validation API
- Expiration checking
- License transfer between orgs

#### 8.4 Revenue Sharing

- Automated payout system (70/30 or 80/20 split)
- Monthly sales reports
- Developer dashboard with earnings
- Payout via Stripe Connect or bank transfer

### Frontend Tasks

#### 8.5 Pricing Display

- Price cards on plugin detail
- Trial CTA button
- Subscription management in settings
- Billing history

### Phase 8 Deliverable
Commercial plugin ecosystem

---

## Technical Decisions Log

### Decision 1: Organization Scope
**Status**: ❓ PENDING
**Question**: Should plugin installs be per-organization or global?
- Option A: Global (current behavior, affects all orgs)
- Option B: Per-organization (each org manages its own plugins)
- **Recommendation**: Option B for SaaS, Option A for single-tenant
- **Impact**: Database schema, `getPlugins()` implementation, UI complexity

### Decision 2: Artifact Hosting
**Status**: ❓ PENDING
**Question**: Where do plugin artifacts live?
- Option A: External CDN (`plugins.erxes.io`) - current
- Option B: Self-hosted object storage (MinIO/S3)
- Option C: Database BLOB storage (simple, not scalable)
- **Recommendation**: Option B for self-hosted, Option A for cloud
- **Impact**: Upload process, download URLs, cost

### Decision 3: Real-time Installation
**Status**: ❓ PENDING
**Question**: Is hot-reload required?
- Option A: Yes - plugins appear immediately without refresh
- Option B: No - page refresh required after install
- **Recommendation**: Option B for MVP, Option A later
- **Impact**: Gateway recomposition complexity, Module Federation dynamic remotes

### Decision 4: Multi-tenancy Model
**Status**: ❓ PENDING
**Question**: How to handle plugins in multi-tenant SaaS?
- Option A: Shared plugins (all orgs see same plugins)
- Option B: Org-specific plugins (each org has its own marketplace)
- Option C: Hybrid (shared pool + org-private plugins)
- **Recommendation**: Option A for MVP, Option C for scale
- **Impact**: Database schema, access control, billing

### Decision 5: Plugin Isolation
**Status**: ❓ PENDING
**Question**: How much isolation between plugins?
- Option A: Process isolation (each plugin in separate container)
- Option B: Code isolation (same process, namespace separation)
- Option C: Current model (plugins are just modules)
- **Recommendation**: Option C for MVP, Option B for security hardening
- **Impact**: Infrastructure complexity, resource usage

---

## Implementation Order (Recommended)

### Sprint 1-2: Phase 1 (Registry)
- [ ] Prisma schema migration
- [ ] GraphQL schema extensions
- [ ] Resolver implementation
- [ ] Seed script for existing plugins
- [ ] Enhanced marketplace UI with search/filter

### Sprint 3-4: Phase 2 (Submission)
- [ ] Plugin manifest schema
- [ ] REST API endpoints
- [ ] File upload handler
- [ ] Developer portal UI
- [ ] Admin review dashboard

### Sprint 5-6: Phase 4 (Installation Engine)
- [ ] Organization-scoped state
- [ ] Installation orchestrator
- [ ] Conflict detection
- [ ] Installation progress UI
- [ ] Plugin settings forms

### Sprint 7-8: Phase 3 (Versions + Dependencies)
- [ ] SemVer utilities
- [ ] Dependency resolution
- [ ] Version selector UI
- [ ] Dependency visualization
- [ ] Compatibility matrix

### Sprint 9-10: Phase 5 (Security)
- [ ] Security scanning pipeline
- [ ] Checksum verification
- [ ] Security badges UI
- [ ] Admin security dashboard
- [ ] Vulnerability tracking

### Sprint 11-12: Phase 6 (Discovery)
- [ ] Full-text search
- [ ] Ratings and reviews
- [ ] Analytics tracking
- [ ] Featured/curated lists
- [ ] Enhanced marketplace UI redesign

### Future: Phase 7-8 (Distribution + Monetization)
- [ ] Object storage setup
- [ ] Delta updates
- [ ] CDN integration
- [ ] Update checker
- [ ] Pricing tiers
- [ ] Billing integration
- [ ] License management
- [ ] Revenue sharing

---

## Files to Create/Modify

### Backend (New Files)
```
backend/core-api/src/modules/plugins/
  ├── graphql/
  │   ├── schemas.ts
  │   ├── queries.ts
  │   └── mutations.ts
  ├── services/
  │   ├── registry.ts
  │   ├── installation.ts
  │   ├── security-scan.ts
  │   └── version-manager.ts
  ├── workers/
  │   └── security-scan.ts
  └── routes.ts

backend/erxes-api-shared/src/utils/
  ├── semver.ts
  └── plugin-dependencies.ts
```

### Backend (Modified Files)
```
backend/erxes-api-shared/prisma/schema.prisma
backend/core-api/src/modules/organization/settings/graphql/configs/schemas.ts
backend/core-api/src/modules/organization/settings/graphql/configs/queries.ts
backend/core-api/src/modules/organization/settings/graphql/configs/mutations.ts
backend/core-api/src/modules/organization/routes.ts
backend/core-api/src/connectionResolvers.ts
backend/gateway/src/main.ts
```

### Frontend (New Files)
```
frontend/core-ui/src/modules/marketplace/
  ├── components/
  │   ├── PluginDetailModal.tsx
  │   ├── InstallationProgress.tsx
  │   ├── PluginSearchBar.tsx
  │   └── PluginFilterSidebar.tsx
  ├── graphql/
  │   ├── queries/
  │   │   ├── getPlugins.ts
  │   │   ├── getPluginDetail.ts
  │   │   └── getPluginDependencies.ts
  │   └── mutations/
  │       ├── pluginSubmit.ts
  │       ├── pluginInstall.ts
  │       └── pluginUninstall.ts
  └── hooks/
      ├── usePlugins.ts
      ├── usePluginInstall.ts
      └── usePluginSearch.ts

frontend/core-ui/src/modules/developer-portal/
  └── (submission forms, version management)

frontend/core-ui/src/modules/admin/
  └── (review dashboard, security dashboard)
```

### Frontend (Modified Files)
```
frontend/core-ui/src/modules/marketplace/components/MarketplaceSettings.tsx
frontend/core-ui/src/modules/app/components/SettingsRoutes.tsx
frontend/core-ui/src/modules/settings/constants/data.ts
```

### Scripts
```
scripts/seed-plugins.ts
scripts/validate-plugin-manifest.ts
```

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Plugin submission time | < 10 minutes | Time from start to published |
| Installation success rate | > 95% | Successful installs / total attempts |
| Security scan pass rate | > 90% | Plugins passing scan / total submitted |
| Average review time | < 48 hours | Time from submission to approval |
| Marketplace adoption | > 50% orgs | Orgs with 1+ marketplace plugin |
| Update success rate | > 98% | Successful updates / total attempts |
| Plugin developer NPS | > 50 | Survey after submission |

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Breaking changes in plugin API | Medium | High | Version compatibility checks, deprecation warnings |
| Security vulnerabilities in plugins | Medium | Critical | Automated scanning, sandboxed execution |
| Plugin conflicts | Medium | High | Dependency resolution, conflict detection |
| Performance degradation | Low | High | Resource quotas, performance monitoring |
| Developer adoption low | Medium | Medium | Documentation, partner program, revenue sharing |
| Database migration issues | Low | High | Backup before migration, rollback plan |

---

## Notes for Future Sessions

1. **Start with Phase 1** - Database schema is foundational for everything else
2. **Answer Decision Questions** - The 5 technical decisions must be made before coding
3. **Seed Script Priority** - Migrate existing 21 plugins immediately after schema creation
4. **Test Multi-tenancy** - Ensure plugin state is isolated between organizations
5. **Security First** - Even in MVP, basic checksum verification is non-negotiable
6. **Documentation** - Update README.md with new plugin submission process
7. **CLI Tool** - Update `create-plugin.js` to generate `erxes.plugin.json` manifest

---

## Related Documents

- `PLUGIN_MARKETPLACE_REPORT.md` - Industry analysis and best practices
- `CLAUDE.md` - Original erxes plugin system documentation
- `README.md` - Project setup and development guide

---

*This plan was generated based on analysis of the erxes-4.0 codebase and industry-leading marketplace systems (WordPress, Atlassian, Shopify, npm).*  
*Next step: Answer the 5 Technical Decisions and begin Phase 1 implementation.*
