const { Schema, model} = require('mongoose')

const postSchema = new Schema(
    {
        textInfo: {
            type: String,
            required: true,
            maxlength: 150,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: {
            types: Number,
            required: false,
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    }
)

const Post = model('Post', postSchema);
module.exports = Post