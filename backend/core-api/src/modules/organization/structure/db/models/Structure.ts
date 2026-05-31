import {
  EventDispatcherReturn,
  STRUCTURE_STATUSES,
} from 'erxes-api-shared/core-modules';
import { Model } from 'mongoose';
import {
  IDepartmentDocument,
  IUnitDocument,
  IBranchDocument,
  IStructureDocument,
  IPositionDocument,
} from '../../@types/structure';
import { IUserDocument } from 'erxes-api-shared/core-types';
import { IModels } from '~/connectionResolvers';
import {
  escapeRegExp,
  checkCollectionCodeDuplication,
} from 'erxes-api-shared/utils';
import {
  departmentSchema,
  structureSchema,
  branchSchema,
  positionSchema,
  unitSchema,
} from '@/organization/structure/db/definitions/structure';
export interface IStructureModel extends Model<IStructureDocument> {
  getStructure(doc: any): Promise<IStructureDocument>;
  createStructure(doc: any, user: IUserDocument): Promise<IStructureDocument>;
  updateStructure(
    _id: string,
    doc: any,
    user: IUserDocument,
  ): Promise<IStructureDocument>;
  removeStructure(_id: string): Promise<IStructureDocument>;
}

export const loadStructureClass = (models: IModels) => {
  class Structure {
    /*
     * Get a structure
     */
    public static async getStructure(doc: any) {
      const structure = await models.Structures.findOne(doc);

      if (!structure) {
        throw new Error('Structure not found');
      }

      return structure;
    }

    /*
     * Create an structure
     */
    public static async createStructure(doc: any, user: IUserDocument) {
      const structure = await models.Structures.create({
        ...doc,
        createdAt: new Date(),
        createdBy: user._id,
      });

      return structure;
    }

    /*
     * Update an structure
     */
    public static async updateStructure(
      _id: string,
      doc: any,
      user: IUserDocument,
    ) {
      await models.Structures.updateOne(
        { _id },
        {
          ...doc,
          updatedAt: new Date(),
          updatedBy: user._id,
        },
      );

      return models.Structures.findOne({ _id });
    }

    /*
     * Remove a structure
     */
    public static async removeStructure(_id: string) {
      const structure = await models.Structures.getStructure({ _id });
      await structure.deleteOne();
      return structure;
    }
  }

  structureSchema.loadClass(Structure);

  return structureSchema;
};

// loadStructureClass();

// // tslint:disable-next-line
// const models.Structures = model<IStructureDocument, IStructureModel>(
//   'structures',
//   structureSchema
// );

export interface IDepartmentModel extends Model<IDepartmentDocument> {
  getDepartment(doc: any): Promise<IDepartmentDocument>;
  createDepartment(doc: any, user: IUserDocument): Promise<IDepartmentDocument>;
  updateDepartment(
    _id: string,
    doc: any,
    user: IUserDocument,
  ): Promise<IDepartmentDocument>;
  removeDepartments(ids?: string[]): Promise<IDepartmentDocument>;
}

export const loadDepartmentClass = (
  models: IModels,
  { getContext }: EventDispatcherReturn,
) => {
  class Department {
    /*
     * Get a department
     */
    public static async getDepartment(doc: any) {
      const department = await models.Departments.findOne(doc);

      if (!department) {
        throw new Error('Department not found');
      }

      return department;
    }

    /*
     * Create an department
     */
    public static async createDepartment(doc: any, user: IUserDocument) {
      await checkCollectionCodeDuplication(models.Departments, doc.code);

      const parent = await models.Departments.findOne({
        _id: doc.parentId,
      }).lean();

      doc.order = parent ? `${parent.order}${doc.code}/` : `${doc.code}/`;

      const department = await models.Departments.create({
        ...doc,
        createdAt: new Date(),
        createdBy: user._id,
      });
      const { processId } = getContext();
      await models.UserMovements.manageStructureUsersMovement({
        userIds: doc.userIds || department.userIds || [],
        contentType: 'department',
        contentTypeId: department._id,
        createdBy: user._id,
        processId,
      });

      return department;
    }

    /*
     * Update a department
     */

    public static async updateDepartment(
      _id: string,
      doc: any,
      user: IUserDocument,
    ) {
      const department = await models.Departments.getDepartment({ _id });
      if (department?.code !== doc.code) {
        await checkCollectionCodeDuplication(models.Departments, doc.code);
      }

      const parent = await models.Departments.findOne({
        _id: doc.parentId,
      });

      if (parent && parent?.parentId === _id) {
        throw new Error('Cannot change a department');
      }

      doc.order = parent ? `${parent.order}${doc.code}/` : `${doc.code}/`;
      const children = await models.Departments.find({
        order: { $regex: new RegExp(`^${escapeRegExp(department.order)}`) },
      });

      for (const child of children) {
        let order = child.order;

        order = order.replace(department.order, doc.order);

        await models.Departments.updateOne(
          {
            _id: child._id,
          },
          {
            $set: { order },
          },
        );
      }
      const { processId } = getContext();
      await models.UserMovements.manageStructureUsersMovement({
        userIds: doc.userIds || [],
        contentType: 'department',
        contentTypeId: _id,
        createdBy: user._id,
        processId,
      });
      await models.Departments.updateOne(
        { _id },
        {
          ...doc,
          updatedAt: new Date(),
          updatedBy: user._id,
        },
      );

      return models.Departments.findOne({ _id });
    }

    /*
     * Remove a department
     */

    public static async removeDepartments(ids: string[]) {
      const departments = await models.Departments.find({ _id: { $in: ids } });

      const departmentIds = departments.map((department) => department._id);
      const userMovements = await models.UserMovements.find({
        contentType: 'department',
        contentTypeId: { $in: departmentIds },
      });

      if (userMovements.length) {
        return await models.Departments.updateMany(
          {
            $or: [
              { _id: { $in: departmentIds } },
              { parentId: { $in: departmentIds } },
            ],
          },
          { $set: { status: STRUCTURE_STATUSES.DELETED } },
        );
      }

      return await models.Departments.deleteMany({
        $or: [
          { _id: { $in: departmentIds } },
          { parentId: { $in: departmentIds } },
        ],
      });
    }
  }

  departmentSchema.loadClass(Department);

  return departmentSchema;
};

export interface IUnitModel extends Model<IUnitDocument> {
  getUnit(doc: any): Promise<IUnitDocument>;
  createUnit(doc: any, user: IUserDocument): Promise<IUnitDocument>;
  updateUnit(
    _id: string,
    doc: any,
    user: IUserDocument,
  ): Promise<IUnitDocument>;
  removeUnits(ids?: string[]): Promise<IUnitDocument>;
}

export const loadUnitClass = (models: IModels) => {
  class Unit {
    /*
     * Get an unit
     */
    public static async getUnit(doc: any) {
      const unit = await models.Units.findOne(doc);

      if (!unit) {
        throw new Error('Unit not found');
      }

      return unit;
    }

    /*
     * Create an unit
     */
    public static async createUnit(doc: any, user: IUserDocument) {
      const unit = await models.Units.create({
        ...doc,
        createdAt: new Date(),
        createdBy: user._id,
      });

      return unit;
    }

    /*
     * Update an unit
     */
    public static async updateUnit(_id: string, doc: any, user: IUserDocument) {
      await models.Units.updateOne(
        { _id },
        {
          ...doc,
          updatedAt: new Date(),
          updatedBy: user._id,
        },
      );

      return models.Units.findOne({ _id });
    }

    /*
     * Remove an unit
     */
    public static async removeUnits(ids: string) {
      const units = await models.Units.find({ _id: { $in: ids } });

      const unitIds = units.map((unit) => unit._id);

      return await models.Units.deleteMany({ _id: { $in: unitIds } });
    }
  }

  unitSchema.loadClass(Unit);

  return unitSchema;
};

export interface IBranchModel extends Model<IBranchDocument> {
  getBranch(doc: any): Promise<IBranchDocument>;
  createBranch(doc: any, user: IUserDocument): Promise<IBranchDocument>;
  updateBranch(
    _id: string,
    doc: any,
    user: IUserDocument,
  ): Promise<IBranchDocument>;
  removeBranches(ids?: string[]): Promise<IBranchDocument>;
}

export const loadBranchClass = (
  models: IModels,
  { getContext }: EventDispatcherReturn,
) => {
  class Branch {
    /*
     * Get a branch
     */
    public static async getBranch(doc: any) {
      const branch = await models.Branches.findOne(doc);

      if (!branch) {
        throw new Error('Branch not found');
      }

      return branch;
    }

    /*
     * Create a branch
     */
    public static async createBranch(doc: any, user: IUserDocument) {
      await checkCollectionCodeDuplication(models.Branches, doc.code);

      const parent = await models.Branches.findOne({
        _id: doc.parentId,
      }).lean();

      doc.order = parent ? `${parent.order}${doc.code}/` : `${doc.code}/`;

      const branch = await models.Branches.create({
        ...doc,
        createdAt: new Date(),
        createdBy: user._id,
      });
      const { processId } = getContext();
      await models.UserMovements.manageStructureUsersMovement({
        userIds: doc.userIds || branch.userIds || [],
        contentType: 'branch',
        contentTypeId: branch._id,
        createdBy: user._id,
        processId,
      });

      return branch;
    }

    /*
     * Update a branch
     */
    public static async updateBranch(
      _id: string,
      doc: any,
      user: IUserDocument,
    ) {
      const branch = await models.Branches.getBranch({ _id });

      if (branch?.code !== doc.code) {
        await checkCollectionCodeDuplication(models.Branches, doc.code);
      }

      const parent = await models.Branches.findOne({ _id: doc.parentId });

      if (parent && parent?.parentId === _id) {
        throw new Error('Cannot change a branch');
      }

      doc.order = parent ? `${parent.order}${doc.code}/` : `${doc.code}/`;

      const children = await models.Branches.find({
        order: { $regex: new RegExp(`^${escapeRegExp(branch.order)}`) },
      });

      for (const child of children) {
        let order = child.order;

        order = order.replace(branch.order, doc.order);

        await models.Branches.updateOne(
          {
            _id: child._id,
          },
          {
            $set: { order },
          },
        );
      }
      const { processId } = getContext();
      await models.UserMovements.manageStructureUsersMovement({
        userIds: doc.userIds || [],
        contentType: 'branch',
        contentTypeId: _id,
        createdBy: user._id,
        processId,
      });

      await models.Branches.updateOne(
        { _id },
        {
          ...doc,
          updatedAt: new Date(),
          updatedBy: user._id,
        },
      );

      return models.Branches.findOne({ _id });
    }

    /*
     * Remove a branch
     */

    public static async removeBranches(ids: string[]) {
      const branches = await models.Branches.find({ _id: { $in: ids } });

      const branchIds = branches.map((branch) => branch._id);
      const userMovements = await models.UserMovements.find({
        contentType: 'branch',
        contentTypeId: { $in: branchIds },
      });

      if (userMovements.length) {
        return await models.Branches.updateMany(
          {
            $or: [
              { _id: { $in: branchIds } },
              { parentId: { $in: branchIds } },
            ],
          },
          { $set: { status: STRUCTURE_STATUSES.DELETED } },
        );
      }

      return await models.Branches.deleteMany({
        $or: [{ _id: { $in: branchIds } }, { parentId: { $in: branchIds } }],
      });
    }
  }

  branchSchema.loadClass(Branch);

  return branchSchema;
};
export interface IPositionModel extends Model<IPositionDocument> {
  getPosition(doc: any): Promise<IPositionDocument>;
  createPosition(doc: any, user: IUserDocument): Promise<IPositionDocument>;
  updatePosition(
    _id: string,
    doc: any,
    user: IUserDocument,
  ): Promise<IPositionDocument>;
  removePositions(ids?: string[]): Promise<IPositionDocument>;
}

export const loadPositionClass = (
  models: IModels,
  { getContext }: EventDispatcherReturn,
) => {
  class Position {
    /*
     * Get a position
     */
    public static async getPosition(doc: any) {
      const position = await models.Positions.findOne(doc);

      if (!position) {
        throw new Error('Position not found');
      }

      return position;
    }

    /*
     * Create a position
     */
    public static async createPosition(doc: any, user: IUserDocument) {
      await checkCollectionCodeDuplication(models.Positions, doc.code);

      const parent = await models.Positions.findOne({
        _id: doc.parentId,
      }).lean();

      doc.order = parent ? `${parent.order}${doc.code}/` : `${doc.code}/`;

      const position = await models.Positions.create({
        ...doc,
        createdAt: new Date(),
        createdBy: user._id,
      });

      const { processId } = getContext();
      await models.UserMovements.manageStructureUsersMovement({
        userIds: doc.userIds || position.userIds || [],
        contentType: 'position',
        contentTypeId: position._id,
        createdBy: user._id,
        processId,
      });

      return position;
    }

    /*
     * Update a position
     */
    public static async updatePosition(
      _id: string,
      doc: any,
      user: IUserDocument,
    ) {
      const position = await models.Positions.getPosition({ _id });

      if (position?.code !== doc.code) {
        await checkCollectionCodeDuplication(models.Positions, doc.code);
      }

      const parent = await models.Positions.findOne({ _id: doc.parentId });

      if (parent && parent?.parentId === _id) {
        throw new Error('Cannot change a position');
      }

      doc.order = parent ? `${parent.order}${doc.code}/` : `${doc.code}/`;

      const children = await models.Positions.find({
        order: { $regex: new RegExp(`^${escapeRegExp(position.order)}`) },
      });

      for (const child of children) {
        let order = child.order;

        order = order.replace(position.order, doc.order);

        await models.Positions.updateOne(
          {
            _id: child._id,
          },
          {
            $set: { order },
          },
        );
      }
      const { processId } = getContext();
      await models.UserMovements.manageStructureUsersMovement({
        userIds: doc.userIds || [],
        contentType: 'position',
        contentTypeId: _id,
        createdBy: user._id,
        processId,
      });

      await models.Positions.updateOne(
        { _id },
        {
          ...doc,
          updatedAt: new Date(),
          updatedBy: user._id,
        },
      );

      return models.Positions.findOne({ _id });
    }

    /*
     * Remove a branch
     */

    public static async removePositions(ids: string[]) {
      const positions = await models.Positions.find({ _id: { $in: ids } });

      const positionIds = positions.map((branch) => branch._id);
      const userMovements = await models.UserMovements.find({
        contentType: 'position',
        contentTypeId: { $in: positionIds },
      });

      if (userMovements.length) {
        return await models.Positions.updateMany(
          {
            $or: [
              { _id: { $in: positionIds } },
              { parentId: { $in: positionIds } },
            ],
          },
          { $set: { status: STRUCTURE_STATUSES.DELETED } },
        );
      }

      return await models.Positions.deleteMany({
        $or: [
          { _id: { $in: positionIds } },
          { parentId: { $in: positionIds } },
        ],
      });
    }
  }

  positionSchema.loadClass(Position);

  return positionSchema;
};

// ================= PRISMA POSTGRESQL ADAPTER =================
import { prisma } from 'erxes-api-shared/utils';
import { createPrismaAdapter } from '~/utils/prismaAdapter';

// Structure mappers
function mapPrismaStructureToMongoose(s: any): any {
  if (!s) return null;
  return {
    ...s,
    _id: s.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaStructure(update);
      return prisma.structure.update({ where: { id: s.id }, data });
    },
    async deleteOne() {
      return prisma.structure.delete({ where: { id: s.id } });
    }
  };
}
function mapMongooseToPrismaStructure(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaStructure(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaStructure(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaStructure(update));
  }
  return data;
}

// Department mappers
function mapPrismaDepartmentToMongoose(d: any): any {
  if (!d) return null;
  return {
    ...d,
    _id: d.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaDepartment(update);
      return prisma.department.update({ where: { id: d.id }, data });
    },
    async deleteOne() {
      return prisma.department.delete({ where: { id: d.id } });
    }
  };
}
function mapMongooseToPrismaDepartment(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaDepartment(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaDepartment(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaDepartment(update));
  }
  return data;
}

// Unit mappers
function mapPrismaUnitToMongoose(u: any): any {
  if (!u) return null;
  return {
    ...u,
    _id: u.id,
    userIds: u.userIds || [],
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaUnit(update);
      return prisma.unit.update({ where: { id: u.id }, data });
    },
    async deleteOne() {
      return prisma.unit.delete({ where: { id: u.id } });
    }
  };
}
function mapMongooseToPrismaUnit(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaUnit(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaUnit(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaUnit(update));
  }
  return data;
}

// Branch mappers
function mapPrismaBranchToMongoose(b: any): any {
  if (!b) return null;
  return {
    ...b,
    _id: b.id,
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaBranch(update);
      return prisma.branch.update({ where: { id: b.id }, data });
    },
    async deleteOne() {
      return prisma.branch.delete({ where: { id: b.id } });
    }
  };
}
function mapMongooseToPrismaBranch(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaBranch(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaBranch(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaBranch(update));
  }
  return data;
}

// Position mappers
function mapPrismaPositionToMongoose(p: any): any {
  if (!p) return null;
  return {
    ...p,
    _id: p.id,
    userIds: p.userIds || [],
    toObject() { return this; },
    toJSON() { return this; },
    async updateOne(update: any) {
      const data = mapMongooseUpdateToPrismaPosition(update);
      return prisma.position.update({ where: { id: p.id }, data });
    },
    async deleteOne() {
      return prisma.position.delete({ where: { id: p.id } });
    }
  };
}
function mapMongooseToPrismaPosition(doc: any): any {
  if (!doc) return {};
  const mapped = { ...doc };
  if (doc._id) {
    mapped.id = doc._id;
    delete mapped._id;
  }
  return mapped;
}
function mapMongooseUpdateToPrismaPosition(update: any): any {
  if (!update) return {};
  const data: any = {};
  if (update.$set) {
    Object.assign(data, mapMongooseToPrismaPosition(update.$set));
  }
  if (!update.$set) {
    Object.assign(data, mapMongooseToPrismaPosition(update));
  }
  return data;
}

export const loadPrismaStructures = (models: IModels) => {
  const origSchema = loadStructureClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.structure,
    mapPrismaStructureToMongoose,
    mapMongooseToPrismaStructure,
    mapMongooseUpdateToPrismaStructure
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

export const loadPrismaDepartments = (
  models: IModels,
  coreEventHandlers: (
    moduleName: string,
    collectionName: string,
  ) => EventDispatcherReturn,
) => {
  const origSchema = loadDepartmentClass(models, coreEventHandlers('organization', 'departments'));
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.department,
    mapPrismaDepartmentToMongoose,
    mapMongooseToPrismaDepartment,
    mapMongooseUpdateToPrismaDepartment
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

export const loadPrismaUnits = (models: IModels) => {
  const origSchema = loadUnitClass(models);
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.unit,
    mapPrismaUnitToMongoose,
    mapMongooseToPrismaUnit,
    mapMongooseUpdateToPrismaUnit,
    new Set(['userIds'])
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

export const loadPrismaBranches = (
  models: IModels,
  coreEventHandlers: (
    moduleName: string,
    collectionName: string,
  ) => EventDispatcherReturn,
) => {
  const origSchema = loadBranchClass(models, coreEventHandlers('organization', 'branches'));
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.branch,
    mapPrismaBranchToMongoose,
    mapMongooseToPrismaBranch,
    mapMongooseUpdateToPrismaBranch
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

export const loadPrismaPositions = (
  models: IModels,
  coreEventHandlers: (
    moduleName: string,
    collectionName: string,
  ) => EventDispatcherReturn,
) => {
  const origSchema = loadPositionClass(models, coreEventHandlers('organization', 'positions'));
  const origStatics = (origSchema as any).statics || {};

  const modelAdapter = createPrismaAdapter(
    prisma.position,
    mapPrismaPositionToMongoose,
    mapMongooseToPrismaPosition,
    mapMongooseUpdateToPrismaPosition,
    new Set(['userIds'])
  );

  Object.assign(modelAdapter, origStatics);

  return modelAdapter as any;
};

