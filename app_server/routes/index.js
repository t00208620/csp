const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* All three pages for login, main-content and register */
router.get('/', ctrlLocations.homelist);
router.get('/registration', ctrlLocations.locationInfo);
router.get('/main-content', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
