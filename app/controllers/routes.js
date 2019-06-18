const UserShow = require('./user/show.js')
const UserCreate = require('./user/create.js')
const UserSearch = require('./user/search.js')

module.exports = {
  user: {
    UserCreate,
    UserShow,
    UserSearch
  }
}

