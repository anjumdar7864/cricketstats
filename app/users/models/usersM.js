const Joi = require('joi');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('users', schema);



function validate(user) {
    const schema = {
        name: Joi.string().optional(),

        email: Joi.string().email().required(),
        password: Joi.string().required(),

        gender: Joi.string().required(),
    };
    return Joi.validate(user, schema);
}



module.exports.validate = validate;
module.exports.User = User;
