const asyncHandler = require('express-async-handler')
const studentAttendance = require('../../models/studentModel/studentAttendanceModel')

//GET All Attendance of Student
//@route GET /api/student-user/attendance
//@access public
const getStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.find({studentAttendance})
    res.status(200).json(attendance)
})

//GET One Attendance of Student
//@route GET /api/student-user/attendance/:id
//@access public
const getOneStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.findById(req.params.id)

    if(!attendance){
        res.status(400)
        throw new Error('User no found')
    }
    
    res.status(200).json(attendance)
})

//GET Multiple Attendance of Student
//@route GET /api/student-user/attendance/:ids
//@access public
const getMultipleStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.find({studentAttendance})
    res.status(200).json(attendance)
})

//POST Attendance of Student
//@route POST /api/student-user/attendance
//@access public
const postStudentAttendance = asyncHandler (async (req, res) => {
    const { fullname } = req.body

    if(!fullname){
        res.status(400)
        throw new Error('Please add all fields')
    }

    const attendance = await studentAttendance.create({
        fullname,
    })

    if(attendance){
        res.status(201).json({
            _id: attendance.id,
            fullname: attendance.fullname,
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Delete Attendance of Student
//@route EDIT /api/student-user/attendance/:id
//@access Public
const deltStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.findById(req.params.id)

    if(!attendance){
        res.status(400)
        throw new Error('User no found')
    }

    await attendance.deleteOne()

    res.status(200).json({ id: req.params.id})
})

//Delete Multiple Attendance of Student
//@route GET /api/student-user/attendance/:ids
//@access Public
const deltMultiStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.findById(req.params.id)

    if(!attendance){
        res.status(400)
        throw new Error('User no found')
    }

    await attendance.deleteMany()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getStudentAttendance,
    getOneStudentAttendance,
    getMultipleStudentAttendance,
    postStudentAttendance,
    deltStudentAttendance,
    deltMultiStudentAttendance
}