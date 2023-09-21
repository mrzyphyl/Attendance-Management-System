const asyncHandler = require('express-async-handler')
const professorSubjects = require('../../models/professorModel/professorSubjectModel')

//GET All Subjects by Professor
//@access public
const getProfessorSubjects = asyncHandler (async (req, res) => {
    const subjects = await professorSubjects.find({professorSubjects})
    res.status(200).json(subjects)
})

//GET One Subjects by Professor
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
//@access public
const getMultipleProfessorSubjects = asyncHandler (async (req, res) => {
    const subjects = await professorSubjects.find({professorSubjects})
    res.status(200).json(subjects)
})

module.exports = {
    getProfessorSubjects,
    getOneProfessorSubjects,
    getMultipleProfessorSubjects
}