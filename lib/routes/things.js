const { Router } = require('express');

const things = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      type, 
      description
    } = req.body;

    const thing = {
      type, 
      description
    };

    things.push(thing);
    res.send(thing);
  })

  .get('/:id', (req, res) => {
    res.send(things[req.params.id]);
  });
