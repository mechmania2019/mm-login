const mongoose = require('mongoose')
const authenticate = require('mm-authenticate')(mongoose)

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = global.Promise

module.exports = authenticate(async (req, res) => req.user)