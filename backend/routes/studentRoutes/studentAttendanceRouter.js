const express  = require('express')
const { 
    getStudentAttendance, 
    postStudentAttendance, 
    deltStudentAttendance, 
    getOneStudentAttendance, 
    deltMultiStudentAttendance, 
    getMultipleStudentAttendance 
} = require('../../controllers/studentControllers/studentAttendanceController')
const { 
    addAttendance, 
    getOneAttendance 
} = require('../../controllers/studentControllers/AttendanceSheetController')
const router = express.Router()

router.route('/').get(getStudentAttendance).post(postStudentAttendance)

router.route('/:id').delete(deltStudentAttendance).get(getOneStudentAttendance)

router.route('/:ids').delete(deltMultiStudentAttendance).get(getMultipleStudentAttendance)

router.route('/get/:id').get(getOneAttendance)

router.route('/add/:id').post(addAttendance)

module.exports = router