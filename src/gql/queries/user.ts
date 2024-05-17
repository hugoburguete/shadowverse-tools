import { gql } from '../generated';

export const MUTATION_REGISTER_USER = gql(`
mutation RegisterUser($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    accessToken
    refreshToken
  }
}
`);

export const MUTATION_LOGIN_USER = gql(`
mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    accessToken
    refreshToken
  }
}
`);

export const MUTATION_REFRESH_USER_TOKEN = gql(`
mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    accessToken
    refreshToken
  }
}
`);
