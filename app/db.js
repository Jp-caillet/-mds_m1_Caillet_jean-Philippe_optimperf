const mongoose = require('mongoose')
let url = 'mongodb+srv://user:psw@cluster0-829wl.mongodb.net/opti?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true })
this.db = mongoose.connection
module.exports = this.db