const express = require('express');
const Router = require('Router');

const { sendEmailAgent  } = require('../controller/emailServiceManagementController');

Router.post('/sendEmailAgent',sendEmailAgent);
modeule.exports =  Router