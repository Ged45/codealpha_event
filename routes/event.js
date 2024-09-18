const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getEvents);
router.post('/register', eventController.registerForEvent);
router.get('/events/:eventId/registrations', eventController.getEventRegistrations);

module.exports = router;
