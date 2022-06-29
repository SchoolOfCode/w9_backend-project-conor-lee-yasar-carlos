import request from 'supertest';
import app from '../app.js';

const apiURL = '/api/v1/user/1';

// All GET testing
describe(`GET requests to the API behave as they should`, () => {
  // smoke test for response object
  it(`Successful request returns an array of objects`, async () => {
    // ARRANGE
    const expected = {
      success: true,
      payload: expect.arrayContaining([expect.any(Object)])
    }

    // ACT
    const response = await request(app).get(apiURL);

    // ASSERT
    expect(response.status).toBe(200);

    // check 'success' message
    expect(response.body.success).toBe(true);

    // check the structure of the 'payload'
    expect(response.body).toEqual(expected);
  });

  // check the payload structure inside the response object
  it(`Object structure inside 'payload' array is correct.`, async () => {
    // ARRANGE
    const expected = {
      day: expect.any(Number),
      resources: expect.any(Array),
      list: expect.any(Array)
    }

    // ACT
    const response = await request(app).get(apiURL);

    // ASSERT
    expect(response.body.payload[0]).toEqual(expected);
  });

  // check the structure of the 'resources' found as part of the objects inside the 'payload' array
  it(`'resources' array has correct structure 'payload: [{resouce: [{id: int, topic: str, url: str, rating: bool}]}]'`, async () => {
    // ARRANGE
    const expected = expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        topic: expect.any(String),
        url: expect.any(String),
        rating: expect.any(Boolean)
      })
    ]);

    // ACT
    const response = await request(app).get(apiURL);

    // ASSERT
    expect(response.body.payload[0].resources).toEqual(expected);
  });

  // check the structure of the 'resources' found as part of the objects inside the 'payload' array
  it(`'list' array has correct structure 'payload: [{list: [{id: int, topic: str, rating: int, weekend: bool, completed: bool, comments: str}]}]'`, async () => {
    // ARRANGE
    const expected = expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        topic: expect.any(String),
        rating: expect.any(Number),
        weekend: expect.any(Boolean),
        completed: expect.any(Boolean),
        comments: expect.any(String)
      })
    ]);

    // ACT
    const response = await request(app).get(apiURL);

    // ASSERT
    expect(response.body.payload[0].list).toEqual(expected);
  });
  
});