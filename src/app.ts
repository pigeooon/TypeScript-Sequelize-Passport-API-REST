// https://github.com/ljlm0402/typescript-express-starter/tree/master/lib/sequelize/src
// https://www.coreycleary.me/what-is-the-difference-between-controllers-and-services-in-node-rest-apis/

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import sequelize from './database';
import router from './routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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
        console.log(`[Vigili-APP] Servidor encendido en el puerto ${app.get('port')} 👍!`);
    });
})();

export default app; 