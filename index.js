const express = require('express');
const path = require('path');

const NBA = require('nba');

const app = express();

// serve built static assets
app.use(express.static(path.join(__dirname, 'client/build')));

// serve up an api
app.get('/api/players', (req, res) => {
    r = NBA.players;
    res.json(r);
});

app.get('/api/players/:player_id', (req, res) => {
    NBA.stats.playerInfo({ PlayerID: req.params.player_id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ 'error': err }));
});

app.get('/api/teams', (req, res) => {
    r = NBA.teams;
    res.json(r);
});

app.get('/api/teams/:team_id', (req, res) => {
    NBA.stats.teamInfoCommon({ TeamID: req.params.team_id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ 'error': err }));
});

// serve up the index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`nbaasset listening on ${port}`);