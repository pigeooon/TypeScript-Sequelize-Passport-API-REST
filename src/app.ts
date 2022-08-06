// https://github.com/ljlm0402/typescript-express-starter/tree/master/lib/sequelize/src
// https://www.coreycleary.me/what-is-the-difference-between-controllers-and-services-in-node-rest-apis/
// https://github.com/microsoft/TypeScript-Node-Starter/tree/master/src

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';
import sequelize from './database';
import router from './routes';
import 'dotenv/config';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: String(process.env.API_SESSION_KEY),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
import "./middlewares/passport";

//hello world
app.get('/', (request:any, response:any) => {
    return response.status(200).json({
        message:'Vigili API',
        author:'Giancarlo-Ferretto'}
    );
});

app.use('/', router);

(async () => {
    await sequelize.sync({force: false});
  
    app.listen(app.get('port'), () => {
        console.log(`[APP] Servidor encendido en el puerto ${app.get('port')} 👍!`);
    });
})();

export default app; 