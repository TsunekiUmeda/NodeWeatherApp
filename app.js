const request = require('postman-request')
const { mapBox_access_key, weather_access_key } = require('./api')
const url = `http://api.weatherstack.com/current?access_key=${weather_access_key}&query=37.8267,-122.4233`

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const temp = response.body.current.temperature
//     const feelsLike = response.body.current.feelslike
//     const description = response.body.current.weather_descriptions[0]
//     console.log(
//       `${description}. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees out`
//     )
//   }
// })

const geo_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBox_access_key}&limit=1`

request({ url: geo_url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to GeoLocation service')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location')
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
  }
})
