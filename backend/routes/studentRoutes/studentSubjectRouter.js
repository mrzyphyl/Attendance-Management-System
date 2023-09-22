const express  = require('express')
const { 
    getStudentSubjects, 
    postStudentSubjects, 
    updateStudentSubjects, 
    deltStudentSubject, 
    getOneStudentSubjects, 
    deltMultiStudentSubjects, 
    getMultipleStudentSubjects 
} = require('../../controllers/studentControllers/studentSubjectController')
const router = express.Router()

router.route('/').get(getStudentSubjects).post(postStudentSubjects)

router.route('/:id').put(updateStudentSubjects).delete(deltStudentSubject).get(getOneStudentSubjects)

router.route('/:ids').delete(deltMultiStudentSubjects).get(getMultipleStudentSubjects)

module.exports = router