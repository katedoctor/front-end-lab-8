process.stdout.write('What are you waiting for? \n');
const express = require('express'),
      app = express();

app.use(express.json());
var handlers = require('./controllers/handlers.js')

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening to port ${port}`));

app.get('/rockstars', handlers.get);
app.get('/rockstars/:id', handlers.getId);
app.post('/rockstars', handlers.post);
app.put('/rockstars/:id', handlers.put);
app.delete('/rockstars/:id', handlers.delete);
