const asyncHandler = require('express-async-handler')
const studentSubjects = require('../../models/studentModel/studentSubjectModel')
const { subtle } = require('crypto')

//GET All Subjects of Student
//@route GET /api/student-user/subjects
//@access public
const getStudentSubjects = asyncHandler (async (req, res) => {
    const subjects = await studentSubjects.find({studentSubjects})
    res.status(200).json(subjects)
})

//GET One Subjects of Student
//@route GET /api/student-user/subjects/:id
//@access public
const getOneStudentSubjects = asyncHandler (async (req, res) => {
    const subjects = await studentSubjects.findById(req.params.id)

    if(!subjects){
        res.status(400)
        throw new Error('User no found')
    }
    
    res.status(200).json(subjects)
})

//GET Multiple Subjects of Student
//@route GET /api/student-user/subjects/:ids
//@access public
const getMultipleStudentSubjects = asyncHandler (async (req, res) => {
    const subjects = await studentSubjects.find({studentSubjects})
    res.status(200).json(subjects)
})

//POST Subjects of Student
//@route POST /api/student-user/subjects
//@access public
const postStudentSubjects = asyncHandler (async (req, res) => {
    const { subject_code, subject_name, subject_time, subject_instructor, department, student_enrolled } = req.body

    if(!subject_code || !subject_name || !subject_time){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if subject time exist
    const timeExist = await studentSubjects.findOne({subject_time, subject_code, subject_name})

    if(timeExist){
        res.status(400)
        throw new Error('You already have a same subject on that time')
    }

    const subject = await studentSubjects.create({
        subject_code,
        subject_name,
        subject_time,
        subject_instructor,
        student_enrolled,
        department
    })

    if(subject){
        res.status(201).json({
            _id: subject.id,
            subject_code: subject.subject_code,
            subject_name: subject.subject_name,
            subject_time: subject.subject_time,
            subject_instructor: subject.subject_instructor,
            student_enrolled: subject.student_enrolled,
            department: subject.department
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Update Subjects of Student
//@route PUT /api/student-user/subjects/:id
//@access Public
const updateStudentSubjects = asyncHandler (async (req, res) => {
    const subject = await studentSubjects.findById(req.params.id)

    if(!subject){
        res.status(400)
        throw new Error('User no found')
    }

    const updatedSubject = await studentSubjects.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedSubject)
})

//Delete Subject of Student
//@route DELETE /api/student-user/subjects/:id
//@access Public
const deltStudentSubject = asyncHandler (async (req, res) => {
    const subject = await studentSubjects.findById(req.params.id)

    if(!subject){
        res.status(400)
        throw new Error('User no found')
    }

    await subject.deleteOne()

    res.status(200).json({ id: req.params.id})
})

//Delete Multiple Subjects of Student
//@route DELETE /api/student-user/subjects/:ids
//@access Public
const deltMultiStudentSubjects = asyncHandler (async (req, res) => {
    const subject = await studentSubjects.findById(req.params.id)

    if(!subject){
        res.status(400)
        throw new Error('User no found')
    }

    await subject.deleteMany()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getStudentSubjects,
    getOneStudentSubjects,
    getMultipleStudentSubjects,
    postStudentSubjects,
    updateStudentSubjects,
    deltStudentSubject,
    deltMultiStudentSubjects
}