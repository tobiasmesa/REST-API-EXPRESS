/* Imports  */
const express =  require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')


const port = process.env.PORT || 3000 // Just in case

const app = express() 


app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use('/api/tasks', require('./routes/tasksRoutes.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))