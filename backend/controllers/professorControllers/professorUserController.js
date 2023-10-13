const asyncHandler = require('express-async-handler')
const professorUser = require('../../models/professorModel/professorUserModel')
const CryptoJS = require('crypto-js')

//Get All Professor User
//@route GET /api/professor-user
//@access Public
const getProfessorUser = asyncHandler (async (req, res) => {
    const user = await professorUser.find({professorUser})
    res.status(200).json(user)
})

//Get One Professor User
//@route GET /api/professor-user/:id
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
//@route GET /api/professor-user/:ids
//@access Public
const getMultiProfessorUser = asyncHandler (async (req, res) => {
    const user = await professorUser.find({professorUser})
    res.status(200).json(user)
})

//Login Professor
//@route POST /api/professor-user/login
//@access Public
const loginProfessor = asyncHandler (async (req, res) => {
    let { email, password } = req.body

    if(!email && !password){
        res.status(400)
        throw new Error('Please provide both email and password')
    }

    //Check if user exist
    const userExist = await professorUser.findOne({ email })

    if (userExist) {
        // Compare the entered password with the stored password
        const bytes = CryptoJS.AES.decrypt(userExist.password, 'secret key 123');
        const storedPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (password === storedPassword) {
            res.status(200).json(userExist)
        } else {
            res.status(400);
            throw new Error('Wrong Credentials')
        }
    } else {
        res.status(400)
        throw new Error('User not found')
    }

})

//Post Professor User
//@route POST /api/professor-user
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

    const cipher = CryptoJS.AES.encrypt(password, 'secret key 123').toString()

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
        password: cipher
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
            password: professor.cipher
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Edit Professor User Password
//@route PUT /api/professor-user/:id
//@access Public
const editPassword = asyncHandler (async (req, res) => {
    //Check if User exist
    const checkUser = await professorUser.findById(req.params.id)

    if(!checkUser){
        res.status(400)
        throw new Error('User not found')
    }

    const cipher = CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString()
    const editUserPassword = await professorUser.findByIdAndUpdate(
        req.params.id,
        {password: cipher},
        {new: true}
    )
    res.status(200).json(editUserPassword)
})

//Update Professor User
//@route PUT /api/professor-user/:id
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
//@route DELETE /api/professor-user/:id
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
//@route DELETE /api/professor-user/:ids
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
    deltMultiProfessorUser,
    loginProfessor,
    editPassword
}
