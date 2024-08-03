import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import sequelize from './models';

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  try {
    // Sincroniza os modelos com o banco de dados
    await sequelize.sync({ force: true });
    
    // Inicia o servidor Apollo
    const { url } = await server.listen({ port: 4000 });
    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
