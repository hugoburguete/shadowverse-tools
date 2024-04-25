import { gql } from '../generated';

export const MUTATION_REGISTER_USER = gql(`
mutation RegisterUser($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    accessToken
    refreshToken
  }
}
`);
