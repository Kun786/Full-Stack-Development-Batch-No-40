//Accquiring Models
const userManagementModel = require('../models/UserManagementModel');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken')

//Accquiring Models

const userRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const checkIfAdminAlreadyExists = await userManagementModel.findOne({
            email: email
        })

        if (checkIfAdminAlreadyExists?.userPrivilege === 'Admin') {
            return res.json({
                Message: 'Something went wrong Please ask Admin!',
                Status: null,
                Data: false
            })
        }

        let checkAdminIdentity = email.split('@')[0];
        checkAdminIdentity = checkAdminIdentity.toLowerCase();
        if (checkAdminIdentity === 'admin') {
            const adminToCreate = new userManagementModel({
                firstName, lastName, email, password, userPrivilege: 'Admin'
            });
            const adminToSave = await adminToCreate.save();
            return res.json({
                Message: 'Register Successfully',
                Data: true
            })
        }

        const userToCreate = new userManagementModel({
            firstName, lastName, email, password
        })
        const userToSave = await userToCreate.save();
        res.json({
            Message: 'Register Successfully',
            Data: true
        })
    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}

const userLogin = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const  checkUserExistence = await userManagementModel.findOne({email:email});
        if(Object.keys(checkUserExistence).length === 0){
            return res.json({
                Message:'Authentication Failed Either Incorrect Password or Email',
                Data: false,
            })
        }

        const checkUserPassword = await bcrypt.compare(password,checkUserExistence.password);
        if(checkUserPassword === false){
            return res.json({
                Message:'Authentication Failed Either Incorrect Password or Email',
                Data: false,
            })
        }

        const token = jsonwebtoken.sign(
            {
                name: 'hi'
            },
            'superSecret',
            { expiresIn: '15m' }
        )
        
        res.json({
            Message:'Authenticate Successfuly',
            Data:true,
            Result:token
        })
    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}
module.exports = {
    userRegister,
    userLogin
}