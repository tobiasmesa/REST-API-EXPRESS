const asyncHandler = require('express-async-handler')
//@desc Get task
//@route GET /api/task 
//@access Private
const getTask = asyncHandler( async (req, res) => 
{
    res.status(200).json({ message: 'Get Tasks!'});
})

//@desc Set task
//@route Post /api/task 
//@access Private
const setTask = asyncHandler ( async (req, res) => 
{
   // console.log(req.body.text)
    if(!req.body.text)
    {
        res.status(400)
        throw new Error('Please add a text field!')
    }
    res.status(200).json({ message: 'Create task!'});
})

//@desc Update task
//@route PUT /api/task/:id
//@access Private
const updateTask = asyncHandler ( async (req, res) => 
{
    res.status(200).json({ message: `Update task ${req.params.id}`});
})

//@desc Delete task
//@route DELETE /api/task/:id
//@access Private 

const deleteTask = asyncHandler ( async (req, res) => 
{
    res.status(200).json({ message: `Delete task ${req.params.id}`});
})

module.exports = 
{
    getTask,
    setTask,
    updateTask,
    deleteTask
}