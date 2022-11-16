//Accquiring Dependencies
const express = require('express');
const Router = express.Router();

//Calling My Controllers

const { 
   userRegister,
   userLogin
 } = require('../controller/UserManagementController');


 //Calling My Controllers

 //Calling My Middlewares
//  const {  } = require('');
 //Calling My Middlewares

Router.post('/userRegister',userRegister);
Router.post('/userLogin',userLogin);

module.exports = Router;