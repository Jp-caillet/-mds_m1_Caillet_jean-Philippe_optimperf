// Dependencies
const mongoose = require('mongoose')
const validator = require('node-validator')

// Core
 

module.exports = class Show {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/search', async (req, res) => {
      try {
        // Save
        await mongoose.connect('mongodb+srv://user:psw@cluster0-829wl.mongodb.net/opti?retryWrites=true&w=majority', { useNewUrlParser: true })
        this.db = await mongoose.connection
        const result  = await this.db.collection('users').find( {} ).toArray()
        res.status(200).json(result)
        this.db.close()
      } catch (e) {
        console.error(`[ERROR] user/show -> ${e}`)
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