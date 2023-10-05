const asyncHandler = require('express-async-handler')
const professorSubjects = require('../../models/professorModel/professorSubjectModel')
const { subtle } = require('crypto')

//GET All Subjects by Professor
//@route GET /api/professor-user/subjects
//@access public
const getProfessorSubjects = asyncHandler (async (req, res) => {
    const subjects = await professorSubjects.find({professorSubjects})
    res.status(200).json(subjects)
})

//GET One Subjects by Professor
//@route GET /api/professor-user/subjects/:id
//@access public
const getOneProfessorSubjects = asyncHandler (async (req, res) => {
    const subjects = await professorSubjects.findById(req.params.id)

    if(!subjects){
        res.status(400)
        throw new Error('User no found')
    }
    
    res.status(200).json(subjects)
})

//GET Multiple Subjects by Professor
//@route GET /api/professor-user/subjects/:ids
//@access public
const getMultipleProfessorSubjects = asyncHandler (async (req, res) => {
    const subjects = await professorSubjects.find({professorSubjects})
    res.status(200).json(subjects)
})

//POST Subjects by Professor
//@route POST /api/professor-user/subjects
//@access public
const postProfessorSubjects = asyncHandler (async (req, res) => {
    const { subject_code, subject_name, subject_time, subject_instructor, department } = req.body

    if(!subject_code && !subject_name && !subject_time){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if subject time exist
    const timeExist = await professorSubjects.findOne({subject_time, subject_code, subject_name, department})

    if(timeExist){
        res.status(401)
        throw new Error('There is already subject on that time')
    }

    const subject = await professorSubjects.create({
        subject_code,
        subject_name,
        subject_time,
        subject_instructor,
        department
    })

    if(subject){
        res.status(201).json({
            _id: subject.id,
            subject_code: subject.subject_code,
            subject_name: subject.subject_name,
            subject_time: subject.subject_time,
            subject_instructor: subject.subject_instructor,
            department: subject.department
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Update Subjects of Professor
//@route PUT /api/professor-user/subjects/:id
//@access Public
const updateSubjects = asyncHandler (async (req, res) => {
    const subject = await professorSubjects.findById(req.params.id)

    if(!subject){
        res.status(400)
        throw new Error('User no found')
    }

    const updatedSubject = await professorSubjects.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedSubject)
})

//Delete Subject of Professor
//@route DELETE /api/professor-user/subjects/:id
//@access Public
const deltSubject = asyncHandler (async (req, res) => {
    const subject = await professorSubjects.findById(req.params.id)

    if(!subject){
        res.status(400)
        throw new Error('User no found')
    }

    await subject.deleteOne()

    res.status(200).json({ id: req.params.id})
})

//Delete Multiple Subjects of Professor
//@route DELETE /api/professor-user/subjects/:ids
//@access Public
const deltMultiSubjects = asyncHandler (async (req, res) => {
    const subject = await professorSubjects.findById(req.params.id)

    if(!subject){
        res.status(400)
        throw new Error('User no found')
    }

    await subject.deleteMany()

    res.status(200).json({ id: req.params.id})
})

//Search Departments
//@route GET /api/professor-user/subjects/department
//@access Public
const findDepartments = asyncHandler(async (req, res) => {
    const { department } = req.query

    if (!department) {
        res.status(400)
        throw new Error('Please add a field')
    }

    try {
        const departments = await professorSubjects.find({ department })
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching departments' })
    }
})

module.exports = {
    getProfessorSubjects,
    getOneProfessorSubjects,
    getMultipleProfessorSubjects,
    postProfessorSubjects,
    updateSubjects,
    deltSubject,
    deltMultiSubjects,
    findDepartments
}