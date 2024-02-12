const request = require("supertest");
const app = require("../app/api");

let userId;

describe("USER ROUTER", () => {
    describe("TRY POST TO SEND MAIL", () => {
        it("Should return 200 /=> Mail send", async () => {
            const response = await request(app).post("/mail").send({
                from: "marcel@marcel.com",
                subject: "un sujet",
                text: "un text",
            });
            expect(response.status).toBe(200);
        });
    });
});
