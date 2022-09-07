const mongoose= require('mongoose');

const registerSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        uinque: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});

const Register= new mongoose.model('Register',registerSchema);

module.exports=Register;