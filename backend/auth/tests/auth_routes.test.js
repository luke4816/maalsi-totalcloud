/*** IMPORT */
const request = require("supertest");
const app = require("../app/api");
const DB = require("../app/db.config");

let tokens;

describe("USER ROUTER", () => {
    afterAll(async () => {
        await DB.sequelize.close();
    });

    describe("TRY LOGIN - POST", () => {
        it("Should return 200 /=> login", async () => {
            const response = await request(app).post("/auth/login").send({
                email: "roger@marcel.com",
                password: "roger",
            });
            tokens = response.body;
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("access_token");
        });

        it("Sould return 400 /=> missing params", async () => {
            const response = await request(app).post("/auth/login").send({
                email: "roger@marcel.com",
                password: "",
            });

            expect(response.status).toBe(400);
        });

        it("Should return 401 /=> no account", async () => {
            const response = await request(app).post("/auth/login").send({
                email: "roger@roger.com",
                password: "roger",
            });

            expect(response.status).toBe(401);
        });

        it("Should return 401 /=> bad password", async () => {
            const response = await request(app).post("/auth/login").send({
                email: "roger@marcel.com",
                password: "rogerrrrrrrr",
            });

            expect(response.status).toBe(401);
        });
    });
});
