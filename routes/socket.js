// const express = require('express');
// const router = express.Router();
// const User = require('./models/user');

// router.post('/join', (req, res) => {
//   const { email, name, socketId } = req.body;
//   const newUser = new User({ email, name, socketId });
//   newUser.save()
//     .then(() => res.status(201).send('User joined the room'))
//     .catch(err => res.status(400).send('Error joining the room: ' + err));
// });

// router.get('/users', (req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).send('Error fetching users: ' + err));
// });

// module.exports = router;
