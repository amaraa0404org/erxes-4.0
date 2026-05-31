import {
  types as clientPortalTypes,
  queries as clientPortalQueries,
  mutations as clientPortalMutations,
} from '../../modules/clientportal/graphql/schemas/clientPortal';
import {
  types as cpUserTypes,
  queries as cpUserQueries,
  mutations as cpUserMutations,
} from '../../modules/clientportal/graphql/schemas/cpUser';
import {
  types as commentTypes,
  queries as commentQueries,
  mutations as commentMutations,
} from '../../modules/clientportal/graphql/schemas/comment';
import {
  types as cpNotificationTypes,
  queries as cpNotificationQueries,
  mutations as cpNotificationMutations,
} from '../../modules/clientportal/graphql/schemas/cpNotification';

export const types = `
  ${clientPortalTypes}
  ${cpUserTypes}
  ${commentTypes}
  ${cpNotificationTypes}
`;

export const queries = `
  currentUser: CPUser
  comment(_id: String!): CPComment
  comments(filter: CPCommentFilter): CPCommentListResponse
  notifications(
    limit: Int
    skip: Int
    status: CPNotificationStatus
    priority: CPNotificationPriority
    type: CPNotificationType
    kind: CPNotificationKind
    fromDate: String
    endDate: String
    clientPortalId: String
  ): CPNotificationListResponse
  notificationDetail(_id: String!): CPNotification
  unreadNotificationCount(clientPortalId: String): Int

  ${clientPortalQueries || ''}
  ${cpUserQueries || ''}
  ${commentQueries || ''}
  ${cpNotificationQueries || ''}
`;

export const mutations = `
  userRegister(
    phone: String,
    email: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    userType: CPUserType,
    code: String,
    propertiesData: JSON
  ): CPUser

  userEdit(
    email: String,
    phone: String,
    firstName: String,
    lastName: String,
    avatar: String,
    username: String,
    companyName: String,
    companyRegistrationNumber: String
  ): CPUser

  customerEdit(
    firstName: String,
    lastName: String,
    primaryEmail: String,
    emails: [String],
    primaryPhone: String,
    phones: [String],
    primaryAddress: JSON,
    addresses: [JSON],
    propertiesData: JSON
  ): Customer

  companyEdit(
    primaryName: String,
    names: [String],
    primaryEmail: String,
    emails: [String],
    primaryPhone: String,
    phones: [String],
    primaryAddress: JSON,
    addresses: [JSON],
    size: Int,
    website: String,
    industry: [String],
    ownerId: String,
    businessType: String,
    description: String,
    isSubscribed: String,
    links: JSON,
    tagIds: [String],
    propertiesData: JSON,
    code: String,
    location: String
  ): Company

  userVerify(userId: String, code: String!, email: String, phone: String): CPUser
  userLoginWithCredentials(email: String, phone: String, password: String): JSON
  logout: String
  userForgotPassword(identifier: String!): String
  userResetPassword(token: String, identifier: String, code: String, newPassword: String!): String
  userRequestOTP(identifier: String!): String
  userLoginWithOTP(identifier: String!, otp: String!): JSON
  userRegisterWithSocial(provider: SocialAuthProvider!, token: String!): CPUser
  userLoginWithSocial(provider: SocialAuthProvider!, token: String!): String
  userLinkSocialAccount(provider: SocialAuthProvider!, token: String!): CPUser
  userUnlinkSocialAccount(provider: SocialAuthProvider!): CPUser
  userRefreshToken(refreshToken: String!): String
  userAddFcmToken(deviceId: String!, token: String!, platform: FcmPlatform!): CPUser
  userRemoveFcmToken(deviceId: String!): CPUser
  userRequestChangeEmail(newEmail: String!): String
  userConfirmChangeEmail(code: String!): CPUser
  userRequestChangePhone(newPhone: String!): String
  userConfirmChangePhone(code: String!): CPUser
  userDelete: CPUserRemoveResponse
  userChangePassword(currentPassword: String!, newPassword: String!): CPUser

  commentAdd(comment: CPCommentInput!): CPComment
  commentUpdate(_id: String!, comment: CPCommentUpdateInput!): CPComment
  commentDelete(_id: String!): JSON

  markNotificationAsRead(_id: String!): JSON
  markAllNotificationsAsRead(clientPortalId: String): JSON

  ${clientPortalMutations || ''}
  ${cpUserMutations || ''}
  ${commentMutations || ''}
  ${cpNotificationMutations || ''}
`;
