const { Schema, model} = require('mongoose')

const goalSchema = new Schema(
    {
        day: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        activity: {
            type: String,
            required: true,
            trim: true
        },
        hours: {
            type: String,
            required: true,
            trim: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }

    },
)

const Goal = model('Goal', goalSchema)
module.exports = Goal