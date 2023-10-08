const asyncHandler = require('express-async-handler')
const studentUser = require('../../models/studentModel/studentUserModel')
const CryptoJS = require('crypto-js')

//Get All Student User
//@route GET /api/student-user
//@access Public
const getStudentUser = asyncHandler (async (req, res) => {
    const user = await studentUser.find({studentUser})
    res.status(200).json(user)
})

//Get One Student User
//@route GET /api/student-user/:id
//@access Public
const getOneStudentUser = asyncHandler (async (req, res) => {
    const studUser = await studentUser.findById(req.params.id)

    if(!studUser){
        res.status(400)
        throw new Error('User no found')
    }
    
    res.status(200).json(studUser)
})

//Get Multiple Student User
//@route GET /api/student-user/:ids
//@access Public
const getMultiStudentUser = asyncHandler (async (req, res) => {
    const student = await studentUser.find({studentUser})
    res.status(200).json(student)
})

//Login Student User
//@route POST /api/student-user/login
//@access Public
const loginStudent = asyncHandler (async (req, res) => {
    let { email, password } = req.body

    if(!email && !password){
        res.status(400)
        throw new Error('Please provide both email and password')
    }

    // Check if the user exists
    const userExist = await studentUser.findOne({ email })

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

//Post Student User
//@route POST /api/student-user
//@access Public
const postStudentUser = asyncHandler (async (req, res) => {
    const { 
        firstname, 
        middlename, 
        lastname, 
        age, 
        birthday, 
        gender, 
        address, 
        user_status, 
        student_number, 
        department, 
        email, 
        password 
     } = req.body

    if(!firstname && !lastname){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await studentUser.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('Email already in use')
    }

    const cipher = CryptoJS.AES.encrypt(password, 'secret key 123').toString()

    const student = await studentUser.create({
        firstname, 
        middlename, 
        lastname, 
        age, 
        birthday, 
        gender, 
        address, 
        user_status, 
        student_number, 
        department, 
        email, 
        password: cipher
    })

    if(student){
        res.status(201).json({
            _id: student.id,
            firstname: student.firstname,
            middlename: student.middlename,
            lastname: student.lastname,
            age: student.age,
            birthday: student.birthday,
            gender: student.gender,
            address: student.address,
            user_status: student.user_status,
            student_number: student.student_number,
            department: student.department,
            email: student.email,
            password: student.cipher
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Edit Student User Password
//@route PUT /api/student-user/:id
//@access Public
const editPassword = asyncHandler (async (req, res) => {
    //Check if User exist
    const checkUser = await studentUser.findById(req.params.id)

    if(!checkUser){
        res.status(400)
        throw new Error('User not found')
    }

    const cipher = CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString()
    const editUserPassword = await studentUser.findByIdAndUpdate(
        req.params.id,
        {password: cipher},
        {new: true}
    )
    res.status(200).json(editUserPassword)
})

//Update Student User
//@route PUT /api/student-user/:id
//@access Public
const updateStudentUser = asyncHandler (async (req, res) => {
    const student = await studentUser.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error('User no found')
    }

    const updatedUser = await studentUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedUser)
})

//Delete Student User
//@route DELETE /api/student-user/:id
//@access Public
const deltStudentUser = asyncHandler (async (req, res) => {
    const student = await studentUser.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error('User no found')
    }

    await student.deleteOne()

    res.status(200).json({ id: req.params.id})
})


//Delete Multiple Student User
//@route DELETE /api/student-user/:ids
//@access Public
const deltMultiStudentUser = asyncHandler (async (req, res) => {
    const student = await studentUser.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error('User no found')
    }

    await student.deleteMany()

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
    loginStudent,
    editPassword
}