const Task = require('../models/Task')

// @desc    Get all tasks
// @routes  GET /api/v1/tasks
// @access  Public

exports.getTasks = async (req, res, next) => {
   try{
    const task = await Task.find()

    return res.status(200).json({
        success: true,
        count: tasks.length,
        data: task
    })

   } catch(err){
    return res.status(500).json({
        success: false,
        error: 'Server Error'
    })
   }
}
// @desc    Add tasks
// @routes  POST /api/v1/tasks
// @access  Public

exports.addTasks = async (req, res, next) => {
    try {
        const { text, amount } = req.body// Will only accept fields that are in our model

        const task = await Task.create(req.body)
    
        return res.status(201).json({
            success: true,
            data: task
        })
    } catch(err){
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message)

            return res.status(400).json({
                success: false,
                errors: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
    
}
// @desc    Delete tasks
// @routes  DELETE /api/v1/:id
// @access  Public

exports.deleteTasks = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id)

        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }

        await task.remove()

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}