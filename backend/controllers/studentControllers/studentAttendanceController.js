const asyncHandler = require('express-async-handler')
const studentAttendance = require('../../models/studentModel/studentAttendanceModel')

//GET All Attendance of Student
//@access public
const getStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.find({studentAttendance})
    res.status(200).json(attendance)
})

//GET One Attendance of Student
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
//@access public
const getMultipleStudentAttendance = asyncHandler (async (req, res) => {
    const attendance = await studentAttendance.find({studentAttendance})
    res.status(200).json(attendance)
})

//POST Attendance of Student
//@access public
const postStudentAttendance = asyncHandler (async (req, res) => {
    const { fullname, subject_code, subject_name, subject_time, subject_instructor } = req.body

    if(!subject_code && !subject_name){
        res.status(400)
        throw new Error('Please add all fields')
    }

    const attendance = await studentAttendance.create({
        fullname,
        subject_code,
        subject_name,
        subject_time,
        subject_instructor,
    })

    if(attendance){
        res.status(201).json({
            _id: subject.id,
            fullname: attendance.fullname,
            subject_code: attendance.subject_code,
            subject_name: attendance.subject_name,
            subject_time: attendance.subject_time,
            subject_instructor: attendance.subject_instructor,
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Delete Attendance of Student
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