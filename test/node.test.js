const request = require('supertest');
const app = require('../server');

describe('GET /node/subtree/*', () => {
  it('should return a subtree for a valid node path', async () => {
    const res = await request(app).get('/node/subtree/Rocket/Stage1');
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'Stage1');
    expect(res.body).toHaveProperty('children');
    expect(res.body.children.length).toBe(3);
  });

  it('should return a 404 for an invalid node path', async () => {
    const res = await request(app).get('/node/subtree/InvalidNode');
    
    expect(res.status).toBe(404);
    expect(res.text).toBe('Node not found');
  });

  it('should return a 404 for a valid parent but invalid child node in the path', async () => {
    const res = await request(app).get('/node/subtree/Rocket/InvalidChildNode');
    
    expect(res.status).toBe(404);
    expect(res.text).toBe('Node not found in the given path');
  });
});
