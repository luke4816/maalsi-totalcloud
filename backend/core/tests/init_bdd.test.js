const request = require("supertest");
const DB = require("../app/db.config");

describe("MAIN ROUTER", () => {
    afterAll(async () => {
        DB.sequelize.close();
    });

    describe("POPULATE DATABASE", () => {
        it("Should return ?", async () => {
            const response = await DB.sequelize.sync({ alter: true });
            expect(response).toHaveProperty("models");
        });
    });
});
