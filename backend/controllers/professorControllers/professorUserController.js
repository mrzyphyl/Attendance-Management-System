const asyncHandler = require('express-async-handler')
const professorUser = require('../../models/professorModel/professorUserModel')

//Get All Professor User
//@access Public
const getProfessorUser = asyncHandler (async (req, res) => {
    const user = await professorUser.find({professorUser})
    res.status(200).json(user)
})

//Get One Professor User
//@access Public
const getOneProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }
    
    res.status(200).json(profUser)
})

//Get Multi Professor User
//@access Public
const getMultiProfessorUser = asyncHandler (async (req, res) => {
    const user = await professorUser.find({professorUser})
    res.status(200).json(user)
})
