const dotenv = require('dotenv');

let MyEnviorment = {};

if(process.env.NODE_ENV === 'testing'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../application-testing-enviorment.env`});
}

if(process.env.NODE_ENV === 'development'){
     MyEnviorment = dotenv.config({path:`${__dirname}/../application-development-enviorment.env`});
}

if(process.env.NODE_ENV === 'production'){
     MyEnviorment = dotenv.config({path:`${__dirname}/../application-production-enviorment.env`});
}
