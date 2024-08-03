import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import sequelize from './models';

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  try {
    // Sync models to db
    await sequelize.sync();
    
    // Start apollo server
    const { url } = await server.listen({ port: 4000 });
    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
