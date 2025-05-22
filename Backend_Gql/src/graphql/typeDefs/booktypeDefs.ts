import { gql } from "apollo-server-express";


export const bookTypeDefs = gql`
  type Book {
    id: ID!
    name: String!
    description: String!
    author: String!
    price: Int!
  }

  type Query{
  books: [Book!]!
  },

  type Mutation{
    addBook(name: String!, description: String!, author: String!, price: Int!): Book
  }
`;
export default bookTypeDefs;