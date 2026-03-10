const request = require("supertest");

const BASE_URL = "http://localhost:5000";

describe("Invalid API route", () => {

  test("should return 404 error", async () => {

    const response = await request(BASE_URL)
      .get("/api/dogs/invalid");

    expect(response.status).toBe(404);

    expect(response.body.error).toBe("Route not found");

  });

});