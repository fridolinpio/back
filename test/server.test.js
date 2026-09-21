const request = require("supertest");
const app = require("../src/server");

test("GET /api/health returns ok", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
});