const mongoose = require('mongoose');

mongoose.connect(process.env.NMONGODB_URI || 'mongodb://127.0.0.1.27017/mckenzie-transport', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose.connection;