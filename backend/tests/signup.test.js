import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../index.js'; // Make sure your Express app is exported from index.js

describe('API Test', () => {
  it('should return 200 on GET /', async () => {
    const res = await request(app).get('/api/v1/signup');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello from API'); // change according to your route
  });
});
