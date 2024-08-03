import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Project {
    id: ID!
    name: String!
    price: Float!
    user: User
  }

  type Query {
    users(id: ID, name: String, email: String, limit: Int, offset: Int): [User!]!
    projects(id: ID, name: String, limit: Int, offset: Int): [Project!]!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreateProjectInput {
    name: String!
    price: Float!
    userId: ID!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createProject(input: CreateProjectInput!): Project!
  }
`;

export default typeDefs;
