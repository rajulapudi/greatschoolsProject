//const apiKey = require('./key')
var request = require('request');


var apiKey="AIzaSyAcbQSClxq-Y03A6F9QUpyCSyAftVgAzZ0"

//const places = new GooglePlaces(apiKey)
/* const params = {
  location: '17.387140,78.491684',
  radius: 1000
}; */
var query = 'Schools in Hyderabad'
var url =`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`

// Callback

/* request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */




// Promise
/* places.nearbySearch(query).then((res) => {
  console.log(res.body);
}); */