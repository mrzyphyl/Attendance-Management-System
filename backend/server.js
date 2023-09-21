const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/middleware')
const connectDB = require('./database/db')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use('/api/student-user', require('./routes/studentRoutes/studentUserRouter'))
// app.use('/api/professor-user', require('./routes/professorRoutes/professorUserRouter'))
// app.use('/api/student-user/subjects', require('./routes/studentRoutes/studentSubjectRouter'))
// app.use('/api/professor-user/subjects', require('./routes/professorRoutes/professorSubjectRouter'))
// app.use('/api/student-user/attendance', require('./routes/studentRoutes/studentAttendanceRouter'))
// app.use('/api/professor-user/attendance', require('./routes/professorRoutes/professorAttendanceRouter'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))