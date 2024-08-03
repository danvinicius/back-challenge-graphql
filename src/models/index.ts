import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME || 'back_challenge_graphql', process.env.DB_USER || 'foo', process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

export default sequelize;
