import { gql } from '@apollo/client';

const MANAGE_PLUGIN_INSTALL = gql`
  mutation ConfigsManagePluginInstall($type: String!, $name: String!) {
    configsManagePluginInstall(type: $type, name: $name) {
      status
      message
      plugins
    }
  }
`;

export { MANAGE_PLUGIN_INSTALL };
