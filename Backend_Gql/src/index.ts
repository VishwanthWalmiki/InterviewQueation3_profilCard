import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { schema } from './graphql/schema';

dotenv.config();

const startServer = async () => {

  const app = express();
  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({app:app as any,path:'/graphql'});

  await connectDB();

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
};

startServer();
