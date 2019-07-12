const request = require('supertest');
const app = require('../lib/app');

describe('route tests', () => {
  it('can create a thing with POST', () => {
    return request(app)
      .post('/api/v1/things')
      .send({ type: 'thing1', description: 'first thing' })
      .then(res => {
        expect(res.body).toEqual({ 
          type: 'thing1', 
          description: 'first thing' 
        });
      });
  });

  it('can retrieve a thing by id', () => {
    return request(app)
      .get('/api/v1/things/0')
      .then(res => {
        expect(res.body).toEqual({ 
          type: 'thing1', 
          description: 'first thing' 
        });
      });
  });
});
