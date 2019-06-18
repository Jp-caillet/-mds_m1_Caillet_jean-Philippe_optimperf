// Dependencies
const mongoose = require('mongoose')
const validator = require('node-validator')

// Core
const check = validator.isObject()
  .withRequired('id', validator.isString())

module.exports = class SearchByEmail {
  constructor (app) {
    this.app = app
    this.run()
  }
  
  

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/read', validator.express(check), (req, res) => {
      try {
        // Save
        console.log(req.body.id)
        mongoose.connect('mongodb+srv://user:psw@cluster0-829wl.mongodb.net/opti?retryWrites=true&w=majority', { useNewUrlParser: true })
        this.db = mongoose.connection
        const o_id = new mongoose.Types.ObjectId(req.body.id)
        this.db.collection('users').findOne({_id: o_id}, function(err,obj) {
          if(obj == null){
            res.status(200).json({
              code: 409,
              message: 'User Not Found'
            })
          }else{
            res.status(409).json({
              obj
            })
          }
          
        })
        
      } catch (e) {
        console.error(`[ERROR] user/searchByEmail -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}