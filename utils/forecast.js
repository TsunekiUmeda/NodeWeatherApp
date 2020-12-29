const request = require('postman-request')
const { weather_access_key } = require('../api')

const forecast = (lng, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${weather_access_key}&query=${lat},${lng}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (response.body.error) {
      console.log(response.body.error)
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        temp: response.body.current.temperature,
        feelsLike: response.body.current.feelslike,
        description: response.body.current.weather_descriptions[0],
      })
    }
  })
}

module.exports = forecast
