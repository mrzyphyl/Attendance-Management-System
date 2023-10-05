const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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
    department: {
        type: String,
        required: [true, 'Please add your Subject Instructor']
    },
    student_enrolled: {
        type: String,
        required: [true, 'Please add your Enrolled Student']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('StudentSubject', userSchema)