const request = require('postman-request')
const api = require('./api')
const url = `http://api.weatherstack.com/current?access_key=${api.access_key}&query=37.8267,-122.4233`

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current)
})
