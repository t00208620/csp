/* GET 'login' page*/
const homelist = function(req, res){
res.render('login', {
title: 'Loc8r - find a place to work with wifi',
});
};



/* GET 'registration' page*/
const locationInfo = function(req, res){
  res.render('registration', { title: 'Location info' });
};

/* GET 'main-content' page */
const addReview = function(req, res){
  res.render('main-content', { title: 'Add review',
  title: 'Ship Information',
  pageHeader: { 
  title: 'Ship Information for the Royal Caribbean Fleet: Ship name, Sailing Destination, Passenger capacity, Departure Time', 
  strapline: '' 
  },
  locations: [{ 
  name: 'ADVENTURE',
  destination: 'Texas',
  noOfPassengers: 5020,
  facilities: ['FLOWRIDER®', 'SPLASHAWAY BAY℠', 'THE PERFECT STORM℠'],
  departTime: '17.00'
  },{
  name: 'BRILLIANCE',
  destination: 'Mexico',
  noOfPassengers: 2501,
  facilities: ['ROCK CLIMBING WALL', 'MINI GOLF', 'ARCADE'],
  departTime: '18.00'
  },{
  name: 'EXPLORER',
  destination: 'Barbados',
  noOfPassengers: 3114,
  facilities: ['ICE RINK', 'POOL PARTY', 'SURFING'],
  departTime: '20.00' 
  },{
    name: 'GRANDEUR',
    destination: 'Toronto',
    noOfPassengers: 1992,
    facilities: ['CASINO', 'POOLSIDE MOVIES', 'ROCK CLIMBING'],
    departTime: '10.00' 
    },{
      name: 'HARMONY',
      destination: 'Bahamas',
      noOfPassengers: 5749,
      facilities: ['ULTIMATE ABYSS℠', 'THE PERFECT STORM℠', 'ZIP LINING'],
      departTime: '17.00' 
      },{
        name: 'JEWEL',
        destination: 'Florida',
        noOfPassengers: 2388,
        facilities: ['CASINO', 'POOLSIDE MOVIES', 'ROCK CLIMBING'],
        departTime: '13.00' 
        }]
});

};

module.exports = {
  homelist,
  locationInfo,
  addReview
};