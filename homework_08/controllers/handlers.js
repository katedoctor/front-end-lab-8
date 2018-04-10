const fs = require('fs');
const path = require('path');
const rock = JSON.parse(fs.readFileSync('./data/storage.json'));


exports.get = (req, res) => {
  res.status(200).send(rock);
};

exports.getId = (req, res) => {
 const rockstar = rock.find(c => {
   return c.id === parseInt(req.params.id);
 });
  if(!rockstar) {
    return res.status(404).send('rockstars with this id was not found');
  };
  res.status(200).send(rockstar);

};

exports.post = (req, res) => {
  if (!req.body.name || !req.body.band || !req.body.instrument) {
    return res.sendStatus(400).send('Data is required');
  };
  const rockstar = rock.find(c => c.name === req.body.name);
  if(rockstar){
    return res.status(409).send({'message':'rockstar already exist'});
  };
  rockstars = {
    "id": rock.length + 1,
    "name": req.body.name,
    "band": req.body.band,
    "instrument": req.body.instrument
  };
  rock.push(rockstars);
  res.sendStatus(201).send(rockstars);

};

exports.put = (req, res) => {
  const rockstars = rock.find(c => c.id === parseInt(req.params.id));
  if(!rockstars){
    return res.status(404).send('rockstars with this id was not found');
  };
  rockstars.name = req.body.name;
  rockstars.band = req.body.band;
  rockstars.instrument = req.body.instrument;
  res.status(200).send(rockstars);

};

exports.delete = (req, res) => {
  // http://localhost:3000/rockstars/2 without :
  const rockstars = rock.find(c => c.id === parseInt(req.params.id));
  if(!rockstars) {
    return res.status(404).send('rockstars with this id was not found');
  };
  const index = rock.indexOf(rockstars);
  rock.splice(index, 1);
  res.status(200).send({ 'message': 'Musician has been successfully removed.'});
};