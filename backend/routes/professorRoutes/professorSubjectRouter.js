const express  = require('express')
const { 
    getProfessorSubjects, 
    getOneProfessorSubjects, 
    postProfessorSubjects,
    updateSubjects, 
    deltSubject, 
    deltMultiSubjects, 
    getMultipleProfessorSubjects, 
} = require('../../controllers/professorControllers/professorSubjectController')
const router = express.Router()

router.route('/').get(getProfessorSubjects).post(postProfessorSubjects)

router.route('/:id').put(updateSubjects).delete(deltSubject).get(getOneProfessorSubjects)

router.route('/:ids').delete(deltMultiSubjects).get(getMultipleProfessorSubjects)

module.exports = router