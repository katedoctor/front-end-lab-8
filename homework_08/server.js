
process.stdout.write('What are you waiting for? \n');
const fs = require('fs'),
  express = require('express'),
  app = express();

app.use(express.json());
var handlers = require('./controllers/handlers.js')

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

app.get('/rockstars', handlers.get);
app.get('/rockstar/:id', handlers.getId);
app.post('/rockstar', handlers.post);
app.put('/rockstar/:id', handlers.put);
app.delete('/rockstar/:id', handlers.delete);
