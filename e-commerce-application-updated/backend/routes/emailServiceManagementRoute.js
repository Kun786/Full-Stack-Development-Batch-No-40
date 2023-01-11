const express = require('express');
const Router = express.Router();

const { sendEmailAgent  } = require('../controller/emailServiceManagementController');

Router.post('/sendEmailAgent',sendEmailAgent);
module.exports =  Router