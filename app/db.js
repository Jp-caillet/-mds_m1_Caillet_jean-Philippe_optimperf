const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user:psw@cluster0-829wl.mongodb.net/opti?retryWrites=true&w=majority', { useNewUrlParser: true })
this.db = mongoose.connection
module.exports = this.db