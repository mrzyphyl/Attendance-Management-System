const mongoose = require('mongoose')

// Define the nested schema for subjects
const subjectSchema = mongoose.Schema({
    subject_code: {
        type: String,
        required: [true, 'Please add the Subject Code']
    },
    subject_name: {
        type: String,
        required: [true, 'Please add the Subject Name']
    },
    subject_time: {
        type: String,
        required: [true, 'Please add the Subject Time']
    },
    subject_instructor: {
        type: String,
        required: [true, 'Please add the Subject Instructor']
    },
    department: {
        type: String,
        required: [true, 'Please add the Subject Instructor']
    },
    attendanceTimeIn: {
        type: Date,
        default: Date.now
    },
});

// Define the main schema for student attendance
const studentAttendanceSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please add your Full Name']
    },
    attendance: [subjectSchema], // Include the nested subject schema here
}, {
    timestamps: true
});

const StudentAttendance = mongoose.model('StudentAttendance', studentAttendanceSchema);

module.exports = StudentAttendance;