const express  = require('express')
const { 
    getStudentUser, 
    postStudentUser, 
    updateStudentUser, 
    deltStudentUser, 
    getOneStudentUser, 
    deltMultiStudentUser, 
    getMultiStudentUser 
} = require('../../controllers/studentControllers/studentUserController')
const router = express.Router()

router.route('/').get(getStudentUser).post(postStudentUser)

router.route('/:id').put(updateStudentUser).delete(deltStudentUser).get(getOneStudentUser)

router.route('/:ids').delete(deltMultiStudentUser).get(getMultiStudentUser)

module.exports = router