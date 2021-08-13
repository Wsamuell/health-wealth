const { Schema, model} = require('mongoose')

const regimentSchema = new Schema(
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
        createdAt: {
            type: Date,
            default: Date.now
        }

    },
)

const Regitment = model('Regiment', regimentSchema)
module.exports = Regitment