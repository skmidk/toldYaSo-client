'use strict'
const authEvents = require('./auth/events')
const postEvents = require('./postActions/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signIn').on('submit', postEvents.onSignIn)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)

})
