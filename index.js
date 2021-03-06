const mongoose = require('mongoose')
const authenticate = require('mm-authenticate')(mongoose)

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise

module.exports = authenticate(async (req, res) => res.end(JSON.stringify(req.user)))