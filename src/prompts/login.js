'use strict'

module.exports = () => {
  return [
    {
      type: 'input',
      name: 'username',
      message: 'Enter your username'
    }, {
      type: 'password',
      name: 'password',
      message: 'Enter your password'
    }
  ]
}
