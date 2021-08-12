const { Schema, model} = require('mongoose')

//this may be reusable for the posts on the front end homepage.

const reactionSchema = new Schema(
    {
        commentText: {
            type: String,
            required: true,
            maxlength: 300
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

const Reaction = model('Reaction', reactionSchema)
module.exports = Reaction;
