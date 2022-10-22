
//@desc Get task
//@route GET /api/task 
//@access Private
const getTask = (req, res) => 
{

    res.status(200).json({ message: 'Get Tasks!'});
}

//@desc Set task
//@route Post /api/task 
//@access Private
const setTask = (req, res) => 
{
   // console.log(req.body.text)
    if(!req.body.text)
    {
        res.status(400)
        throw new Error('Please add a text field!')
    }
    res.status(200).json({ message: 'Create task!'});
}

//@desc Update task
//@route PUT /api/task/:id
//@access Private
const updateTask = (req, res) => 
{
    res.status(200).json({ message: `Update task ${req.params.id}`});
}

//@desc Delete task
//@route DELETE /api/task/:id
//@access Private 

const deleteTask = (req, res) => 
{
    res.status(200).json({ message: `Delete task ${req.params.id}`});
}

module.exports = 
{
    getTask,
    setTask,
    updateTask,
    deleteTask
}