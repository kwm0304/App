const { AuthenticationError } = require('apollo-server-express')
const { Event, User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {};

module.exports = resolvers;