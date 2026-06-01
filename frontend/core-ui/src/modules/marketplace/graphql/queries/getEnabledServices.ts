import { gql } from '@apollo/client';

const GET_ENABLED_SERVICES = gql`
  query EnabledServices {
    enabledServices {
      name
      description
      icon
      category
      isInstalled
      isEnabled
    }
  }
`;

export { GET_ENABLED_SERVICES };
