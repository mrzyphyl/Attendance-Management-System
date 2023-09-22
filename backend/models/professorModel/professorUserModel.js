const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add your First Name']
    },
    middlename: {
        type: String,
        required: [true, 'Please add your Middle Name']
    },
    lastname: {
        type: String,
        required: [true, 'Please add your Last Name']
    },
    age: {
        type: String,
        required: [true, 'Please add your Age']
    },
    birthday: {
        type: String,
        required: [true, 'Please add your Birthday']
    },
    gender: {
        type: String,
        required: [true, 'Please add your Gender']
    },
    address: {
        type: String,
        required: [true, 'Please add your Complete Address']
    },
    user_status: {
        type: String,
        required: [true, 'Please add your Marital Status']
    },
    employee_number: {
        type: String,
        required: [true, 'Please add your Employee Number']
    },
    department: {
        type: String,
        required: [true, 'Please add your Department']
    },
    email: {
        type: String,
        required: [true, 'Please add your Email']
    },
    password: {
        type: String,
        required: [true, 'Please add your Password']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ProfessorUser', userSchema)