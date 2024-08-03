import User from "../../models/user";
import Project from "../../models/project";

const resolvers = {
  Query: {
    users: async (_: any, { id, name, email }: { id?: number; name?: string, email?: string }) => {
      const where: any = {};
      if (id) where.id = id;
      if (name) where.name = name;
      if (email) where.email = email;

      return User.findAll({ where });
    },
    projects: async (_: any, { id, name }: { id?: number; name?: string }) => {
      const where: any = {};
      if (id) where.id = id;
      if (name) where.name = name;

      return Project.findAll({
        where,
        include: [{ model: User }],
      });
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { input }: { input: { name: string; email: string } }
    ) => {
      return User.create(input);
    },
    createProject: async (
      _: any,
      { input }: { input: { name: string; price: number; userId: number } }
    ) => {
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
