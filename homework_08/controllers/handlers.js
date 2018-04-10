const fs = require('fs');
var storage = './data/storage.json';

exports.get = (req, res) => {
  fs.readFile(storage, function (error, data) {
    if (error) return res.sendStatus(404);
    try {
      var rock = JSON.parse(data);
    } catch (error) {
      return res.sendStatus(500);
    }
  res.status(200).send(rock);
 });
};

exports.getId = (req, res) => {
  fs.readFile(storage, function (error, data) {
    if (error) return res.sendStatus(500)
    try {
      var rock = JSON.parse(data);
    } catch (error) {
      return res.sendStatus(500);
    }
 const rockstar = rock.find(c => {
   return c.id === parseInt(req.params.id);
 });
  if(!rockstar) {
    return res.status(404).send('rockstars with this id was not found');
  };
  res.status(200).send(rockstar);

});
};

exports.post = (req, res) => {
  fs.readFile(storage, function (error, data) {
    if (error) return res.sendStatus(400)
    try {
      var rock = JSON.parse(data);
    } catch (error) {
      return res.sendStatus(500);
    }
  if (!req.body.name || !req.body.id || !req.body.band || !req.body.instrument) {
    return res.sendStatus(400).send('Data is required');
  };
  const rockstar = rock.find((c)=> c.name === req.body.name);
  if(rockstar){
    return res.status(409).send({'message':'rockstar already exist'});
  };
  const rockstars = {
    "id": rock.length + 1,
    "name": req.body.name,
    "band": req.body.band,
    "instrument": req.body.instrument
  };
  rock.push(rockstars);
  res.sendStatus(201).send({ 'message': 'successfully added'});
  res.send(rockstars);
 });
}

exports.put = (req, res) => {
  fs.readFile(storage, function (error, data) {
    if (error) return res.sendStatus(500)
    try {
      var rock = JSON.parse(data)
    } catch (error) {
      return res.sendStatus(500)
    }
  const rockstars = rock.find(c => c.id === parseInt(req.params.id));
  if(!rockstars){
    return res.status(404).send('rockstars with this id was not found');
  };
  if (!req.body.name || !req.body.band || !req.body.instrument) {
    return res.sendStatus(400).send('Data is required');
  };
  rockstars.name = req.body.name;
  rockstars.band = req.body.band;
  rockstars.instrument = req.body.instrument;
  res.status(200).send(rockstars);
 });
}

exports.delete = (req, res) => {
  fs.readFile(storage, function (error, data) {
    if (error) return res.sendStatus(500)
    try {
      var rock = JSON.parse(data)
    } catch (error) {
      return res.sendStatus(500)
    }
  const rockstars = rock.find(c => c.id === parseInt(req.params.id));
  if(!rockstars) {
    return res.status(404).send('rockstars with this id was not found');
  };
  const index = rock.indexOf(rockstars);
  rock.splice(index, 1);
  res.status(200).send({ 'message': 'Musician has been successfully removed.'});
 });
}