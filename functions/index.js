const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/timestap', (req, res) => {
	res.send("" + Date.now());
});

app.get('/timestap-cached', (req, res) => {
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	res.send("" + Date.now());
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
