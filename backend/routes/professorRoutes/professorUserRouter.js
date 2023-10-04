const express  = require('express')
const { 
    getProfessorUser, 
    postProfessorUser, 
    updateProfessorUser, 
    deltProfessorUser, 
    getOneProfessorUser, 
    deltMultiProfessorUser, 
    getMultiProfessorUser,
    loginProfessor,
    editPassword
} = require('../../controllers/professorControllers/professorUserController')
const router = express.Router()

router.route('/').get(getProfessorUser).post(postProfessorUser)

router.route('/:id').put(updateProfessorUser).delete(deltProfessorUser).get(getOneProfessorUser)

router.route('/:ids').delete(deltMultiProfessorUser).get(getMultiProfessorUser)

router.route('/login').post(loginProfessor)

router.route('/forgotpass/:id').put(editPassword)

module.exports = router