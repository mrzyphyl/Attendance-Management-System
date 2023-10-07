const asyncHandler = require('express-async-handler')
const studentAttendance = require('../../models/studentModel/studentAttendanceModel')


//Get One Attendance for Student User
//@route GET /api/records/attendance/:id
//@access Public
const getOneAttendance = asyncHandler (async (req, res) => {
    //Find the Student User record by ID
    const record = await studentAttendance.findOne({
        'attendance._id': req.params.id
    })

    if (!record) {
        res.status(404)
        throw new Error('Record not found')
    }

    //Find the specific Attendance record within the array
    const attendanceItem = record.attendance.find(
        (item) => item._id.toString() === req.params.id
    )

    if (!attendanceItem) {
        res.status(404)
        throw new Error('Item not found')
    }

    res.status(200).json(attendanceItem)
})

//Add Attendance for Student User
//@route PUT /api/student-user/:id/attendance
//@access Public
const addAttendance = asyncHandler (async (req, res) => {
    const { subject_code, subject_name, subject_time, subject_instructor, department } = req.body;

    try {
        // Find the patient record by ID
        const record = await studentAttendance.findById(req.params.id)

        if (!record) {
            res.status(404)
            throw new Error('Record not found')
        }

        const currentDate = new Date()
        const today = new Date(currentDate.toISOString().split('T')[0])
        const tomorrow = new Date(currentDate)
        tomorrow.setDate(currentDate.getDate() + 1)

        // Check if there is an attendance record for today
        const existingAttendanceToday = record.attendance.some((attendance) => {
            const attendanceDate = new Date(attendance.attendanceTimeIn)
            const attendanceDateOnly = new Date(attendanceDate.toISOString().split('T')[0])
            return (
                attendance.subject_code === subject_code &&
                attendanceDateOnly.getTime() === today.getTime()
            )
        })

        if (existingAttendanceToday) {
            res.status(400)
            throw new Error('Attendance already checked today')
        }

        // Create a new attendance item
        const newAttendance = {
            subject_code,
            subject_name,
            subject_time,
            subject_instructor,
            department
        }

        // Add the new attendance item to the record
        record.attendance.push(newAttendance)

        // Save the updated record
        await record.save()

        res.status(201).json(newAttendance)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


module.exports = {
    getOneAttendance,
    addAttendance
}