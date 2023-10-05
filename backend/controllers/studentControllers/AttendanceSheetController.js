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
        res.status(404); //Change the status to 404 for "Not Found"
        throw new Error('Record not found');
    }

    //Find the specific Attendance record within the array
    const attendanceItem = record.attendance.find(
        (item) => item._id.toString() === req.params.id
    )

    if (!attendanceItem) {
        res.status(404); // Change the status to 404 for "Not Found"
        throw new Error('Item not found');
    }

    res.status(200).json(attendanceItem);
})

//Add Attendance for Student User
//@route PUT /api/student-user/:id/attendance
//@access Public
const addAttendance = asyncHandler (async (req, res) => {
    const { subject_code, subject_name, subject_time, subject_instructor } = req.body;

    try {
        // Find the patient record by ID
        const record = await studentAttendance.findById(req.params.id);

        if (!record) {
            res.status(404); // Change the status to 404 for "Not Found"
            throw new Error('Record not found');
        }

        // Create a new medical history item
        const newAttendance = {
            subject_code,
            subject_name,
            subject_time,
            subject_instructor,
            department
        };

        // Add the new medical history item to the record
        record.attendance.push(newAttendance);

        // Save the updated record
        await record.save();

        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


module.exports = {
    getOneAttendance,
    addAttendance
}