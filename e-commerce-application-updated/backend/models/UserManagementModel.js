//Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUND);
//Dependencies

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();
// Date

//Start Block Schema Creating
const userRegisterSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    saltString: { type: String },
    status: { type: Number, default: 1 },
    userPrivilege : { type:String, default:'User'},
    createdDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
}, { timestamps: true }
)

userRegisterSchema.pre('save', async function(next){
    try {
        const genSalt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(this.password,genSalt);
        this.password = hashedPassword;
        this.saltRounds = genSalt;
        next();
    } catch (error) {
       return ({
        Message:error.message,
        Data:false,
        Result:null
       })
    }
})

module.exports = mongoose.model('UserRegisterCollection',userRegisterSchema)



