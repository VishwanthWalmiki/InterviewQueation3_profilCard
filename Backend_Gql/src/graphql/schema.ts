import { bookTypeDefs } from '../graphql/typeDefs/booktypeDefs';
import { bookResolvers } from '../graphql/resolvers/bookresolver';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const schema = makeExecutableSchema({
  typeDefs: [bookTypeDefs],
  resolvers: [bookResolvers],
});
