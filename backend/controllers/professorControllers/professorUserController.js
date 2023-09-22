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

//Post Professor User
//@access Public
const postProfessorUser = asyncHandler (async (req, res) => {
    const { 
        firstname, 
        middlename, 
        lastname, 
        age, 
        birthday, 
        gender, 
        address, 
        user_status, 
        employee_number, 
        department, 
        email, 
        password 
    } = req.body

    if(!firstname && !lastname){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await professorUser.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('Email already in use')
    }

    const professor = await professorUser.create({
        firstname,
        middlename,
        lastname,
        age,
        birthday,
        gender,
        address,
        user_status,
        employee_number,
        department,
        email,
        password
    })

    if(professor){
        res.status(201).json({
            _id: professor.id,
            firstname: professor.firstname,
            middlename: professor.middlename,
            lastname: professor.lastname,
            age: professor.age,
            birthday: professor.birthday,
            gender: professor.gender,
            address: professor.address,
            user_status: professor.user_status,
            employee_number: professor.employee_number,
            department: professor.department,
            email: professor.email,
            password: professor.password
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Update Professor User
//@access Public
const updateProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }

    const updatedUser = await professorUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedUser)
})

//Delete Professor User
//@access Public
const deltProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }

    await profUser.deleteOne()

    res.status(200).json({ id: req.params.id})
})

//Delete Multiple Professor User
//@access Public
const deltMultiProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }

    await profUser.deleteMany()

    res.status(200).json({ id: req.params.id})
})


module.exports = {
    getProfessorUser,
    getOneProfessorUser,
    getMultiProfessorUser,
    postProfessorUser,
    updateProfessorUser,
    deltProfessorUser,
    deltMultiProfessorUser
}
