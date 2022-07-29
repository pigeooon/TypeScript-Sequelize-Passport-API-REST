import { Sequelize } from 'sequelize-typescript'
import 'dotenv/config';

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
  models: [__dirname + '/models'],
  repositoryMode: false
});

export default sequelize;