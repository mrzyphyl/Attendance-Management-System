const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please add your Full Name']
    },
    subject_code: {
        type: String,
        required: [true, 'Please add your Subject Code']
    },
    subject_name: {
        type: String,
        required: [true, 'Please add your Subject Name']
    },
    subject_time: {
        type: String,
        required: [true, 'Please add your Subject Time']
    },
    subject_instructor: {
        type: String,
        required: [true, 'Please add your Subject Instructor']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('ProfessorAttendance', userSchema)