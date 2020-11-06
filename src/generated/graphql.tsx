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
  me?: Maybe<Player>;
  Players: Array<Player>;
  Player?: Maybe<Player>;
};


export type QueryCardArgs = {
  id: Scalars['Int'];
};


export type QueryPlayerArgs = {
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

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCard: Card;
  updateCard?: Maybe<Card>;
  removeCard: Scalars['Boolean'];
  createPlayer: UserResponse;
  updatePlayer?: Maybe<Player>;
  removePlayer: Scalars['Boolean'];
  login: UserResponse;
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


export type MutationCreatePlayerArgs = {
  playerFields: UserInput;
};


export type MutationUpdatePlayerArgs = {
  playerFields: UserUpdate;
  id: Scalars['Int'];
};


export type MutationRemovePlayerArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  playerFields: NamePasswordInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  player?: Maybe<Player>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
};

export type UserUpdate = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type NamePasswordInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  playername: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, player?: Maybe<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name' | 'email'>
    )> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($playername: String!, $password: String!) {
  login(playerFields: {name: $playername, password: $password}) {
    errors {
      field
      message
    }
    player {
      id
      name
      email
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};