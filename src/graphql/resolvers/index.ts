import User from '../../models/user';
import Project from '../../models/project';

const resolvers = {
  Query: {
    users: async () => {
      return User.findAll();
    },
    projects: async () => {
      return Project.findAll({ include: User });
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: { input: { name: string; email: string } }) => {
      return User.create(input);
    },
    createProject: async (_: any, { input }: { input: { name: string; price: number; userId: number } }) => {
      return Project.create(input);
    },
  },
  Project: {
    user: async (project: any) => {
      return User.findByPk(project.userId);
    },
  },
};

export default resolvers;
