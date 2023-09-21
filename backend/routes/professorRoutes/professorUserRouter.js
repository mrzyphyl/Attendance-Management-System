const express  = require('express')
const { 
    getProfessorUser, 
    postProfessorUser, 
    updateProfessorUser, 
    deltProfessorUser, 
    getOneProfessorUser, 
    deltMultiProfessorUser, 
    getMultiProfessorUser } = require('../../controllers/professorControllers/professorUserController')
const router = express.Router()

router.route('/').get(getProfessorUser).post(postProfessorUser)

router.route('/:id').put(updateProfessorUser).delete(deltProfessorUser).get(getOneProfessorUser)

router.route('/:ids').delete(deltMultiProfessorUser).get(getMultiProfessorUser)

module.exports = router