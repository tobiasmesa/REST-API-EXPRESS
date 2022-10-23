/* Imports  */
const express =  require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 3000 // Just in case

const app = express() 

connectDB()

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use('/api/tasks', require('./routes/taskRoutes.js'))
app.use('/api/users', require('./routes/userRoutes.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))