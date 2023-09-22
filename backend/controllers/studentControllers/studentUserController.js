const asyncHandler = require('express-async-handler')
const studentUser = require('../../models/studentModel/studentUserModel')

//Get All Student User
//@access Public
const getStudentUser = asyncHandler (async (req, res) => {
    const user = await studentUser.find({studentUser})
    res.status(200).json(user)
})

//Get One Student User
//@access Public
const getOneStudentUser = asyncHandler (async (req, res) => {
    const studUser = await studentUser.findById(req.params.id)

    if(!studUser){
        res.status(400)
        throw new Error('User no found')
    }
    
    res.status(200).json(studUser)
})

//Get MultipleStudent User
//@access Public
const getMultiStudentUser = asyncHandler (async (req, res) => {
    const user = await studentUser.find({studentUser})
    res.status(200).json(user)
})

//Login Professor
//@access Public
const loginStudent = asyncHandler (async (req, res) => {
    let { email, password } = req.body

    if(!email && !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await studentUser.findOne({email, password})

    if(userExist){
        const getUser = await studentUser.findOne(userExist)
        res.status(200).json(getUser)
    } else {
        res.status(400)
        throw new Error('Wrong Credentials')
    }

})

//Post Student User
//@access Public
const postStudentUser = asyncHandler (async (req, res) => {
    const { FirstName, LastName, Age, Course, Section } = req.body

    if(!FirstName && !LastName){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await studentUser.findOne({FirstName, LastName})

    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }

    const studUser = await studentUser.create({
        FirstName,
        LastName,
        Age,
        Course,
        Section
    })

    if(studUser){
        res.status(201).json({
            _id: studUser.id,
            FirstName: studUser.FirstName,
            LastName: studUser.LastName,
            Age: studUser.Age,
            Course: studUser.Course,
            Section: studUser.Section
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Update Student User
//@access Public
const updateStudentUser = asyncHandler (async (req, res) => {
    const studUser = await studentUser.findById(req.params.id)

    if(!studUser){
        res.status(400)
        throw new Error('User no found')
    }

    const updatedUser = await studentUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedUser)
})

//Delete Student User
//@access Public
const deltStudentUser = asyncHandler (async (req, res) => {
    const studUser = await studentUser.findById(req.params.id)

    if(!studUser){
        res.status(400)
        throw new Error('User no found')
    }

    await studUser.deleteOne()

    res.status(200).json({ id: req.params.id})
})


//Delete Multiple Student User
//@access Public
const deltMultiStudentUser = asyncHandler (async (req, res) => {
    const studUser = await studentUser.findById(req.params.id)

    if(!studUser){
        res.status(400)
        throw new Error('User no found')
    }

    await studUser.deleteMany()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getStudentUser,
    getOneStudentUser,
    getMultiStudentUser,
    postStudentUser,
    updateStudentUser,
    deltStudentUser,
    deltMultiStudentUser,
    loginStudent
}