const express  = require('express')
const { 
    findDepartments
} = require('../../controllers/professorControllers/professorSubjectController')
const router = express.Router()

router.route('/').get(findDepartments)

module.exports = router