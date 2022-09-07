const express = require('express');
const Router =  express.Router();

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Middlewares

//Start Block Calling and Initializing Controlers
const { AddingTwoNumbers, SubtractingTwoNumbers } = require('../controllers/AdminManagementController');
//Start Block Calling and Initializing Controlers

//Routes
Router.post('/AddingTwoNumbers',AddingTwoNumbers);
Router.post('/SubtractingTwoNumbers',SubtractingTwoNumbers)
//Routes

module.exports = Router;