const { AuthenticationError } = require('apollo-server-express');
const { User, Goal, Post, Reaction } = require('../models');
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
            const goal = Goal.find({ userId })
            return goal;
        },
        userFriends: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.findOne(params)
        },
        allPosts: async () => {
           const posts = await Post.find() 

           return posts
        }
        
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (parent, {userId}) => {
            const updatedUser = await User.findOneAndDelete({ _id: userId})
            return updatedUser
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
        addFriend: async (parent, {friendId}, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { friends: friendId } },
                  { new: true }
                ).populate('friends');
        
                return updatedUser;
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
        addPost: async (parent, {textInfo}, context) => {
           const post = await Post.create({textInfo: textInfo, userId: context.user._id})

           return post
        },
        removeFriend: async (parent, {friendId}, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: friendId }},
                    { new: true }
                ).populate('friends')

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeGoal: async (parent, {goalId}, context) => {
            if(context.user) {
                await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $pull: {regimens: goalId}},
                    { new: true }
                )

                return context.user
            }

            throw new AuthenticationError('You need to be logged in!'); 
        },
        addPoints: async (parent, {pointValue, userId}) => {
            const updatedUser = await User.findByIdAndUpdate(
                {_id: userId},
                {$inc: {points: pointValue}},
                {new: false}
            )

            return updatedUser
        },
        removePoints: async (parent, {pointValue, userId}) => {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: userId },
                { $inc: {points: pointValue}},
                { new: false }
            )
            return updatedUser;
        }
        
    }
}

module.exports = resolvers