const { AuthenticationError } = require('apollo-server-express');
const { User, Goal, Post } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('regimens')
                    .populate('friends');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('regimens')
                .populate('friends');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('regimens');
        },
        userGoals: async (parent, { userId }) => {
            const goal = goal.find({ userId })
            return goal;
        },
        userFriends: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.findOne(params)
        },
        allPosts: async () => {
            await Post.find() 
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const token = signToken(user);
            return { token, user };
        }, 
        addFriend: async (parent, {friendId, user}, context) => {
            if (context.user) {
                const friend = User.findOne({friendId})

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { friends: friend._id} },
                    { new: true }
                )
                return friend
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addGoal: async (parent, args, context) => {
            if (context.user) {
                const goal = await Goal.create(args)

                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: {regimens: goal}},
                    { new: true }
                )

                return goal
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeFriend: async (parent, {friendId}, context) => {
            if(context.user) {
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: {friends: friendId}},
                    { new: true }
                )

                return context.user
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeGoal: async (parent, {goalId}, context) => {
            if(context.user) {
                await User.findOneAndUpdate(
                    { _id: contex.user._id},
                    { $pull: {regimens: goalId}},
                    { new: true }
                )

                return context.user
            }

            throw new AuthenticationError('You need to be logged in!'); 
        },
    }
}

module.exports = resolvers