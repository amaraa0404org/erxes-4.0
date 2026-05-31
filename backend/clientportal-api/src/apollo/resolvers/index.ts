import { clientPortalQueries } from '../../modules/clientportal/graphql/resolvers/queries/clientPortal';
import { cpUserQueries } from '../../modules/clientportal/graphql/resolvers/queries/cpUser';
import { commentQueries } from '../../modules/clientportal/graphql/resolvers/queries/comment';
import { cpNotificationQueries } from '../../modules/clientportal/graphql/resolvers/queries/cpNotification';
import { translationQueries } from '../../modules/clientportal/graphql/resolvers/queries/translations';

import { clientPortalMutations } from '../../modules/clientportal/graphql/resolvers/mutations/clientPortal';
import { cpUserMutations } from '../../modules/clientportal/graphql/resolvers/mutations/cpUser';
import { commentMutations } from '../../modules/clientportal/graphql/resolvers/mutations/comment';
import { cpNotificationMutations } from '../../modules/clientportal/graphql/resolvers/mutations/cpNotification';

import customResolvers from '../../modules/clientportal/graphql/resolvers/customResolvers';

const queries = {
  comment: commentQueries.clientPortalComment,
  comments: commentQueries.clientPortalComments,
  unreadNotificationCount: cpNotificationQueries.clientPortalUnreadNotificationCount,

  ...clientPortalQueries,
  ...cpUserQueries,
  ...commentQueries,
  ...cpNotificationQueries,
  ...translationQueries,
};

const mutations = {
  userRegister: cpUserMutations.clientPortalUserRegister,
  userEdit: cpUserMutations.clientPortalUserEdit,
  customerEdit: cpUserMutations.clientPortalCustomerEdit,
  companyEdit: cpUserMutations.clientPortalCompanyEdit,
  userVerify: cpUserMutations.clientPortalUserVerify,
  userLoginWithCredentials: cpUserMutations.clientPortalUserLoginWithCredentials,
  logout: cpUserMutations.clientPortalLogout,
  userForgotPassword: cpUserMutations.clientPortalUserForgotPassword,
  userResetPassword: cpUserMutations.clientPortalUserResetPassword,
  userRequestOTP: cpUserMutations.clientPortalUserRequestOTP,
  userLoginWithOTP: cpUserMutations.clientPortalUserLoginWithOTP,
  userRegisterWithSocial: cpUserMutations.clientPortalUserRegisterWithSocial,
  userLoginWithSocial: cpUserMutations.clientPortalUserLoginWithSocial,
  userLinkSocialAccount: cpUserMutations.clientPortalUserLinkSocialAccount,
  userUnlinkSocialAccount: cpUserMutations.clientPortalUserUnlinkSocialAccount,
  userRefreshToken: cpUserMutations.clientPortalUserRefreshToken,
  userAddFcmToken: cpUserMutations.clientPortalUserAddFcmToken,
  userRemoveFcmToken: cpUserMutations.clientPortalUserRemoveFcmToken,
  userRequestChangeEmail: cpUserMutations.clientPortalUserRequestChangeEmail,
  userConfirmChangeEmail: cpUserMutations.clientPortalUserConfirmChangeEmail,
  userRequestChangePhone: cpUserMutations.clientPortalUserRequestChangePhone,
  userConfirmChangePhone: cpUserMutations.clientPortalUserConfirmChangePhone,
  userDelete: cpUserMutations.clientPortalUserDelete,
  userChangePassword: cpUserMutations.clientPortalUserChangePassword,

  commentAdd: commentMutations.clientPortalCommentAdd,
  commentUpdate: commentMutations.clientPortalCommentUpdate,
  commentDelete: commentMutations.clientPortalCommentDelete,

  markNotificationAsRead: cpNotificationMutations.clientPortalMarkNotificationAsRead,
  markAllNotificationsAsRead: cpNotificationMutations.clientPortalMarkAllNotificationsAsRead,

  ...clientPortalMutations,
  ...cpUserMutations,
  ...commentMutations,
  ...cpNotificationMutations,
};

const resolvers: any = {
  Query: queries,
  Mutation: mutations,
  ...customResolvers,
};

export default resolvers;
