const { AuthenticationError } = require('apollo-server-express');
const { User, Regiment } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('regiments')
                    .populate('friends');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('regiments')
                .populate('friends');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('regiments');
        },
        regiments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Regiment.find(params).sort({ createdAt: -1 });
        },
        friends: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.findOne(params)
        }
    }
}

module.exports = resolvers