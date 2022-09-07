const express = require('express');
const app = express();
const LoadMyEnviormentVariables = require('./configuration/LoadMyEnviormentVariables');
const DatabaseConfiguration = require('./configuration/DatabaseConfiguration');
const PORT = process.env.PORT;


app.listen(PORT,()=>{
    console.log(`Your application has lanuched ${PORT}`);
})
