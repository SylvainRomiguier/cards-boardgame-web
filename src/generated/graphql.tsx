import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  cards: Array<Card>;
  card?: Maybe<Card>;
  me?: Maybe<User>;
  users: Array<User>;
  user: User;
};


export type QueryCardArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Card = {
  __typename?: 'Card';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  text: Scalars['String'];
  value: Scalars['Float'];
  picture: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  kind: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  lastLogin: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCard: Card;
  updateCard?: Maybe<Card>;
  removeCard: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createPlayer: UserResponse;
  activatePlayer: Scalars['Boolean'];
  updateStaff: UserResponse;
  createStaff: UserResponse;
};


export type MutationCreateCardArgs = {
  picture: Scalars['String'];
  value: Scalars['Float'];
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateCardArgs = {
  picture: Scalars['String'];
  value: Scalars['Float'];
  description: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationRemoveCardArgs = {
  id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  userFields: NamePasswordInput;
};


export type MutationCreatePlayerArgs = {
  userFields: UserInput;
};


export type MutationActivatePlayerArgs = {
  token: Scalars['String'];
};


export type MutationUpdateStaffArgs = {
  admin: Scalars['Boolean'];
  userFields: UserInput;
  id: Scalars['Int'];
};


export type MutationCreateStaffArgs = {
  userFields: UserInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
  player?: Maybe<Player>;
  staff?: Maybe<Staff>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  kind: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  lastLogin: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  active: Scalars['Boolean'];
};

export type Staff = {
  __typename?: 'Staff';
  id: Scalars['Int'];
  kind: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  lastLogin: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  admin: Scalars['Boolean'];
};

export type NamePasswordInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
};

export type RegularCardFragment = (
  { __typename?: 'Card' }
  & Pick<Card, 'id' | 'title' | 'text' | 'picture' | 'value'>
);

export type RegularPlayerFragment = (
  { __typename?: 'Player' }
  & Pick<Player, 'id' | 'name' | 'email' | 'lastLogin' | 'active' | 'rank' | 'avatar'>
);

export type RegularStaffFragment = (
  { __typename?: 'Staff' }
  & Pick<Staff, 'id' | 'name' | 'email' | 'lastLogin' | 'avatar' | 'admin'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'lastLogin'>
);

export type ActivatePlayerMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ActivatePlayerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'activatePlayer'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type CreatePlayerMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreatePlayerMutation = (
  { __typename?: 'Mutation' }
  & { createPlayer: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, player?: Maybe<(
      { __typename?: 'Player' }
      & RegularPlayerFragment
    )> }
  ) }
);

export type CreateStaffMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateStaffMutation = (
  { __typename?: 'Mutation' }
  & { createStaff: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, staff?: Maybe<(
      { __typename?: 'Staff' }
      & RegularStaffFragment
    )> }
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type CardsQueryVariables = Exact<{ [key: string]: never; }>;


export type CardsQuery = (
  { __typename?: 'Query' }
  & { cards: Array<(
    { __typename?: 'Card' }
    & RegularCardFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularCardFragmentDoc = gql`
    fragment RegularCard on Card {
  id
  title
  text
  picture
  value
}
    `;
export const RegularPlayerFragmentDoc = gql`
    fragment RegularPlayer on Player {
  id
  name
  email
  lastLogin
  active
  rank
  avatar
}
    `;
export const RegularStaffFragmentDoc = gql`
    fragment RegularStaff on Staff {
  id
  name
  email
  lastLogin
  avatar
  admin
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
  lastLogin
}
    `;
export const ActivatePlayerDocument = gql`
    mutation ActivatePlayer($token: String!) {
  activatePlayer(token: $token)
}
    `;

export function useActivatePlayerMutation() {
  return Urql.useMutation<ActivatePlayerMutation, ActivatePlayerMutationVariables>(ActivatePlayerDocument);
};
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePlayerDocument = gql`
    mutation CreatePlayer($name: String!, $password: String!, $email: String!) {
  createPlayer(userFields: {name: $name, password: $password, email: $email}) {
    errors {
      field
      message
    }
    player {
      ...RegularPlayer
    }
  }
}
    ${RegularPlayerFragmentDoc}`;

export function useCreatePlayerMutation() {
  return Urql.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument);
};
export const CreateStaffDocument = gql`
    mutation CreateStaff($name: String!, $password: String!, $email: String!) {
  createStaff(userFields: {name: $name, password: $password, email: $email}) {
    errors {
      field
      message
    }
    staff {
      ...RegularStaff
    }
  }
}
    ${RegularStaffFragmentDoc}`;

export function useCreateStaffMutation() {
  return Urql.useMutation<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($name: String!, $password: String!) {
  login(userFields: {name: $name, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const CardsDocument = gql`
    query Cards {
  cards {
    ...RegularCard
  }
}
    ${RegularCardFragmentDoc}`;

export function useCardsQuery(options: Omit<Urql.UseQueryArgs<CardsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CardsQuery>({ query: CardsDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};