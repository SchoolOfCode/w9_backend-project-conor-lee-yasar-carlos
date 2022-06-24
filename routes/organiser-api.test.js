import request from 'supertest';
import app from '../app.js';


describe(`GET all information for the selected week`, () => {
  // smoke test
  it(`return all the days of the week in an array`, async () => {
    // ARRANGE
    const expected = {
      success: true,
      payload: expect.arrayContaining([
        expect.objectContaining({
          day: expect.any(Number),
          resources: expect.arrayContaining([
            {
              id: expect.any(Number),
              topic: expect.any(String),
              url: expect.any(String),
              rating: expect.any(Boolean),
            }
          ]),
          list: expect.arrayContaining([
            {
              id: expect.any(Number),
              topic: expect.any(String),
              rating: expect.any(Number),
              weekend: expect.any(Boolean),
              completed: expect.any(Boolean),
              rating: expect.any(Number)
            }
          ])
        })
      ])
    }

    // ACT
    const response = await request(app).get('/api/v1/user/1');

    // ASSERT
    // Check status code is 200
    expect(response.status).toBe(200);

    // check success message is true to match the 200
    expect(response.body.success).toBe(true);

    // check the structure of the payload
    expect(response.body).toEqual(expected);
  });
});