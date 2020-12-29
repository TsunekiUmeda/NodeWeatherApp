const request = require('postman-request')
const { weather_access_key } = require('../api')

const forecast = (lng, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${weather_access_key}&query=${lat},${lng}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      console.log(body.error)
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        temp: body.current.temperature,
        feelsLike: body.current.feelslike,
        description: body.current.weather_descriptions[0],
      })
    }
  })
}

module.exports = forecast
