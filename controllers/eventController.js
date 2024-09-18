const Event = require('../models/Event');
const Registration = require('../models/Registration');

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Register for an event
exports.registerForEvent = async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json(registration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get registrations for a specific event
exports.getEventRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find({ eventId: req.params.eventId });
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
