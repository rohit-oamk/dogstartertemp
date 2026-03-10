const request = require("supertest");

const BASE_URL = "http://localhost:5000";

describe("GET /api/dogs/random", () => {

  test("should return random dog image", async () => {

    const response = await request(BASE_URL)
      .get("/api/dogs/random");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.imageUrl).toBeDefined();
    expect(typeof response.body.data.imageUrl).toBe("string");

  });

});