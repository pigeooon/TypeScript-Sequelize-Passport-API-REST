import sequelize from '../../database';
import Permission from '../permission.model';
import Resource from '../resource.model';
import Role from '../role.model';
import User from '../user.model';

export const basicSeeder = async () => {
    const permissionRepository = sequelize.getRepository(Permission);
    permissionRepository.create({ id: 1, permission: 'create' });
    permissionRepository.create({ id: 2, permission: 'read' });
    permissionRepository.create({ id: 3, permission: 'update' });
    permissionRepository.create({ id: 4, permission: 'delete' });

    const resourceRepository = sequelize.getRepository(Resource);
    resourceRepository.create({ id: 1, module: 'bomberos' });
    resourceRepository.create({ id: 2, module: 'material_menor' });
    resourceRepository.create({ id: 3, module: 'material_mayor' });

    const roleRepository = sequelize.getRepository(Role);
    roleRepository.create({ id: 1, name: 'Comandante', description: 'Comandante', priority: 930, super_admin: 1 });
    roleRepository.create({ id: 2, name: '2° Comandante', description: '2° Comandante', priority: 920 });
    roleRepository.create({ id: 3, name: '3° Comandante', description: '3° Comandante', priority: 910 });
    roleRepository.create({ id: 4, name: '4° Comandante', description: '4° Comandante', priority: 900 });
    roleRepository.create({ id: 5, name: 'Capitán', description: 'Capitán', priority: 800 });
    roleRepository.create({ id: 6, name: 'Teniente 1°', description: 'Teniente 1°', priority: 720 });
    roleRepository.create({ id: 7, name: 'Teniente 2°', description: 'Teniente 2°', priority: 710 });
    roleRepository.create({ id: 8, name: 'Teniente 3°', description: 'Teniente 3°', priority: 700 });
    roleRepository.create({ id: 9, name: 'Ayudante', description: 'Ayudante', priority: 600 });
    roleRepository.create({ id: 10, name: 'Inspector de Informática', description: 'Inspector de Informática', priority: 0, super_admin: 1 });

    const userRepository = sequelize.getRepository(User);
    userRepository.create({ first_name: 'Monique', last_name: 'Jackson', rut: '100.100.1', email: 'monique.jackson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michael', last_name: 'Bell', rut: '100.100.2', email: 'michael.bell@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Amanda', last_name: 'Taylor', rut: '100.100.3', email: 'amanda.taylor@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Ryan', last_name: 'King', rut: '100.100.4', email: 'ryan.king@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Thomas', last_name: 'Brown', rut: '100.100.5', email: 'thomas.brown@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Thomas', last_name: 'Kennedy', rut: '100.100.6', email: 'thomas.kennedy@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Lisa', last_name: 'Welch', rut: '100.100.7', email: 'lisa.welch@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Austin', last_name: 'Long', rut: '100.100.8', email: 'austin.long@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Holly', last_name: 'Page', rut: '100.100.9', email: 'holly.page@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michael', last_name: 'Alvarez', rut: '100.100.10', email: 'michael.alvarez@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Caroline', last_name: 'Smith', rut: '100.100.11', email: 'caroline.smith@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kevin', last_name: 'Flores', rut: '100.100.12', email: 'kevin.flores@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Wendy', last_name: 'Kennedy', rut: '100.100.13', email: 'wendy.kennedy@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Scott', last_name: 'Stewart', rut: '100.100.14', email: 'scott.stewart@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Lisa', last_name: 'Willis', rut: '100.100.15', email: 'lisa.willis@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Sean', last_name: 'Henderson', rut: '100.100.16', email: 'sean.henderson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'David', last_name: 'Anderson', rut: '100.100.17', email: 'david.anderson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jacob', last_name: 'Johnson', rut: '100.100.18', email: 'jacob.johnson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Laura', last_name: 'Reed', rut: '100.100.19', email: 'laura.reed@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michael', last_name: 'Smith', rut: '100.100.20', email: 'michael.smith@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Connie', last_name: 'Jennings', rut: '100.100.21', email: 'connie.jennings@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Christine', last_name: 'Smith', rut: '100.100.22', email: 'christine.smith@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Sarah', last_name: 'Diaz', rut: '100.100.23', email: 'sarah.diaz@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'James', last_name: 'Rodriguez', rut: '100.100.24', email: 'james.rodriguez@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'John', last_name: 'Smith', rut: '100.100.25', email: 'john.smith@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Robin', last_name: 'Callahan', rut: '100.100.26', email: 'robin.callahan@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jessica', last_name: 'Ellison', rut: '100.100.27', email: 'jessica.ellison@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Dana', last_name: 'Harris', rut: '100.100.28', email: 'dana.harris@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Walter', last_name: 'Barnes', rut: '100.100.29', email: 'walter.barnes@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Sonya', last_name: 'Day', rut: '100.100.30', email: 'sonya.day@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Elizabeth', last_name: 'Simon', rut: '100.100.31', email: 'elizabeth.simon@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Frank', last_name: 'Briggs', rut: '100.100.32', email: 'frank.briggs@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michelle', last_name: 'Reynolds', rut: '100.100.33', email: 'michelle.reynolds@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jackson', last_name: 'Arias', rut: '100.100.34', email: 'jackson.arias@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Alicia', last_name: 'Herring', rut: '100.100.35', email: 'alicia.herring@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'John', last_name: 'Long', rut: '100.100.36', email: 'john.long@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kara', last_name: 'Grant', rut: '100.100.37', email: 'kara.grant@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kathryn', last_name: 'Young', rut: '100.100.38', email: 'kathryn.young@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Karen', last_name: 'Hanson', rut: '100.100.39', email: 'karen.hanson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Melissa', last_name: 'Weber', rut: '100.100.40', email: 'melissa.weber@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michelle', last_name: 'Perry', rut: '100.100.41', email: 'michelle.perry@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Barbara', last_name: 'Campos', rut: '100.100.42', email: 'barbara.campos@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Bobby', last_name: 'Rojas', rut: '100.100.43', email: 'bobby.rojas@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jeffrey', last_name: 'Osborne', rut: '100.100.44', email: 'jeffrey.osborne@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Pam', last_name: 'Stevens', rut: '100.100.45', email: 'pam.stevens@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kevin', last_name: 'Chavez', rut: '100.100.46', email: 'kevin.chavez@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Matthew', last_name: 'Smith', rut: '100.100.48', email: 'matthew.smith@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Matthew', last_name: 'Coleman', rut: '100.100.49', email: 'matthew.coleman@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michael', last_name: 'Johnson', rut: '100.100.50', email: 'michael.johnson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Anais', last_name: 'Apablaza', rut: '100.100.51', email: 'anais.apablaza@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Veronica', last_name: 'Martin', rut: '100.100.52', email: 'veronica.martin@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Mark', last_name: 'Garcia', rut: '100.100.53', email: 'mark.garcia@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Rebecca', last_name: 'David', rut: '100.100.54', email: 'rebecca.david@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Richard', last_name: 'Dillon', rut: '100.100.55', email: 'richard.dillon@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Adam', last_name: 'Valencia', rut: '100.100.56', email: 'adam.valencia@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Cheryl', last_name: 'Munoz', rut: '100.100.57', email: 'cheryl.munoz@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jennifer', last_name: 'Smith', rut: '100.100.58', email: 'jennifer.smith@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jeffrey', last_name: 'Khan', rut: '100.100.59', email: 'jeffrey.khan@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'James', last_name: 'Gibson', rut: '100.100.60', email: 'james.gibson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Jonathan', last_name: 'Rivera', rut: '100.100.61', email: 'jonathan.rivera@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Lisa', last_name: 'Harvey', rut: '100.100.62', email: 'lisa.harvey@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'John', last_name: 'Franklin', rut: '100.100.63', email: 'john.franklin@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Ricky', last_name: 'Crawford', rut: '100.100.64', email: 'ricky.crawford@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Mark', last_name: 'Thomas', rut: '100.100.65', email: 'mark.thomas@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kevin', last_name: 'Lee', rut: '100.100.66', email: 'kevin.lee@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Denise', last_name: 'Erickson', rut: '100.100.67', email: 'denise.erickson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Antonio', last_name: 'Gonzalez', rut: '100.100.68', email: 'antonio.gonzalez@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Brian', last_name: 'Johnson', rut: '100.100.69', email: 'brian.johnson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Tracy', last_name: 'Cannon', rut: '100.100.70', email: 'tracy.cannon@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Christine', last_name: 'Greene', rut: '100.100.71', email: 'christine.greene@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Sharon', last_name: 'Fox', rut: '100.100.72', email: 'sharon.fox@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Susan', last_name: 'Turner', rut: '100.100.73', email: 'susan.turner@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Victor', last_name: 'Williams', rut: '100.100.74', email: 'victor.williams@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'William', last_name: 'Lang', rut: '100.100.75', email: 'william.lang@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'James', last_name: 'Riley', rut: '100.100.76', email: 'james.riley@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Katelyn', last_name: 'Hoffman', rut: '100.100.77', email: 'katelyn.hoffman@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Brittany', last_name: 'Mcpherson', rut: '100.100.78', email: 'brittany.mcpherson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Victoria', last_name: 'Johnson', rut: '100.100.79', email: 'victoria.johnson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Billy', last_name: 'Phillips', rut: '100.100.80', email: 'billy.phillips@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Brian', last_name: 'Mckee', rut: '100.100.81', email: 'brian.mckee@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kimberly', last_name: 'Sullivan', rut: '100.100.82', email: 'kimberly.sullivan@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Michael', last_name: 'Walker', rut: '100.100.83', email: 'michael.walker@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Danielle', last_name: 'Gutierrez', rut: '100.100.84', email: 'danielle.gutierrez@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Mitchell', last_name: 'Gomez', rut: '100.100.85', email: 'mitchell.gomez@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kyle', last_name: 'Brown', rut: '100.100.86', email: 'kyle.brown@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Natalie', last_name: 'Herman', rut: '100.100.87', email: 'natalie.herman@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kyle', last_name: 'Floyd', rut: '100.100.88', email: 'kyle.floyd@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Stephen', last_name: 'Holmes', rut: '100.100.89', email: 'stephen.holmes@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Juan', last_name: 'Stone', rut: '100.100.90', email: 'juan.stone@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Kellie', last_name: 'Sandoval', rut: '100.100.91', email: 'kellie.sandoval@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Raymond', last_name: 'Raymond', rut: '100.100.92', email: 'raymond.raymond@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'William', last_name: 'Cain', rut: '100.100.93', email: 'william.cain@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Gina', last_name: 'Ortiz', rut: '100.100.94', email: 'gina.ortiz@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Mark', last_name: 'Farmer', rut: '100.100.95', email: 'mark.farmer@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Christopher', last_name: 'Mata', rut: '100.100.96', email: 'christopher.mata@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Debra', last_name: 'Joseph', rut: '100.100.97', email: 'debra.joseph@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Megan', last_name: 'Anderson', rut: '100.100.98', email: 'megan.anderson@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Emily', last_name: 'Davis', rut: '100.100.99', email: 'emily.davis@cbv.cl', password: '@123'});
    userRepository.create({ first_name: 'Donna', last_name: 'Lamb', rut: '100.100.100', email: 'donna.lamb@cbv.cl', password: '@123'});

    const user = await sequelize.getRepository(User).findOne({ where: { rut: '20.688.415-0' } });
    
    console.log("Bienvenido, " + user?.first_name);
}

