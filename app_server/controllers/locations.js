/* GET 'home' page */
const homelist = function(req, res){
res.render('locations-list', {
title: 'Loc8r - find a place to work with wifi',
});
};



/* GET 'Location info' page */
const locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review',
  title: 'Ship Information',
  pageHeader: { 
  title: 'Ship Information for the Royal Caribbean Fleet: Sailing times, Departure and Destination, Passenger capacity', 
  strapline: 'Find places to work with wifi near to you!' 
  },
  locations: [{ 
  name: 'ADVENTURE -> Max capacity: 5,020',
  address: 'Cape Liberty NJ, New York -> Galveston, Texas',
  rating: 5,
  facilities: ['FLOWRIDER®', 'SPLASHAWAY BAY℠', 'THE PERFECT STORM℠'],
  distance: 'Departs @ 5P.M.'
  },{
  name: 'BRILLIANCE -> Max capacity: 2,501',
  address: 'Tampa, Florida -> Puerto Costa Maya, Mexico',
  rating: 4,
  facilities: ['ROCK CLIMBING WALL', 'MINI GOLF', 'ARCADE'],
  distance: 'Departs @ 4P.M.'
  },{
  name: 'EXPLORER -> Max capacity: 3,114',
  address: 'Miami, Florida -> Bridgetown, Barbados',
  rating: 1,
  facilities: ['ICE RINK', 'POOL PARTY', 'SURFING'],
  distance: 'Departs @ 4P.M.' 
  },{
    name: 'GRANDEUR -> Max capacity: 1,992',
    address: 'Bridgetown, Barbados -> Castrieus, St.Lucia',
    rating: 1,
    facilities: ['CASINO', 'POOLSIDE MOVIES', 'ROCK CLIMBING'],
    distance: 'Departs @ 10P.M.' 
    },{
      name: 'HARMONY -> Max capacity: 5,749',
      address: 'Orlanda, Florida -> CocoCay, Bahamas',
      rating: 1,
      facilities: ['ULTIMATE ABYSS℠', 'THE PERFECT STORM℠', 'ZIP LINING'],
      distance: 'Departs @ 5P.M.' 
      },{
        name: 'JEWEL -> Max capacity: 2,388',
        address: 'Miami, Florida -> Conzumel, Mexico',
        rating: 1,
        facilities: ['CASINO', 'POOLSIDE MOVIES', 'ROCK CLIMBING'],
        distance: 'Departs @ 5P.M.' 
        }]
});

};

module.exports = {
  homelist,
  locationInfo,
  addReview
};