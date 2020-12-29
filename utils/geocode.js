const request = require('postman-request')
const { mapBox_access_key, weather_access_key } = require('../api')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${mapBox_access_key}&limit=1`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location service', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to connect to location service', undefined)
    } else {
      callback(undefined, {
        location: response.body.features[0].place_name,
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
      })
    }
  })
}

module.exports = geocode
