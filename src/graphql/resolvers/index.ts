import User from "../../models/user";
import Project from "../../models/project";

const resolvers = {
  Query: {
    users: async (_: any, { id, name, email, limit, offset }: { id?: number; name?: string, email?: string, limit?: number, offset?: number }) => {
      const where: any = {};
      if (id) where.id = id;
      if (name) where.name = name;
      if (email) where.email = email;

      return User.findAll({ where, limit, offset });
    },
    projects: async (_: any, { id, name, limit, offset  }: { id?: number; name?: string, limit?: number, offset?: number }) => {
      const where: any = {};
      if (id) where.id = id;
      if (name) where.name = name;

      return Project.findAll({
        where,
        limit,
        offset,
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
