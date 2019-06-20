const GooglePlaces = require('node-googleplaces') ;
const apiKey = require('./key')

const places = new GooglePlaces(apiKey)
const params = {
  location: '17.387140,78.491684',
  radius: 1000
};
 var query = 'Schools in Hyderabad'
// Callback
places.nearbySearch(query, (err, res) => {
  console.log(res.body);
});
 
// Promise
/* places.nearbySearch(query).then((res) => {
  console.log(res.body);
}); */