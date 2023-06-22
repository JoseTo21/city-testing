const supertest = require("supertest");
const app = require("../app");

let cityId;

test("GET -> '/api/v1/cities' should return status 200 and to have length is 2", async () => {
  const res = await supertest(app).get("/api/v1/cities");
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(2);
});

test("POST -> '/api/v1/cities' should return status 201", async () => {
  const body = {
    name: "Cordoba",
    country: "Argentina",
    isCapital: false,
  };
  const res = await supertest(app).post("/api/v1/cities").send(body);

  cityId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(body.name);
});

test("GET ONE -> '/api/v1/cities:id' should return status 200", async () => {
  const res = await supertest(app).get(`/api/v1/cities/${cityId}`);

  expect(res.status).toBe(200);
  expect(res.body.name).toBe("Cordoba");
});

test("UPDATE -> '/api/v1/cities/:id' should return status code 200 and res.body.name === city.name", async () => {
  const city = {
    name: "Cordoba",
  };

  res = await supertest(app).put(`/api/v1/cities/${cityId}`).send(city);

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(city.name);
});

test("DELETE -> '/api/v1/cities/:id' should return status code 204", async () => {
  const res = await supertest(app).delete(`/api/v1/cities/${cityId}`);

  expect(res.status).toBe(204);
});
