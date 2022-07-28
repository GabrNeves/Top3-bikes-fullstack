import request from "supertest";

import app from "../../src/index";
import connect, { MongodHelper } from "../db-helper";
import { Product } from "../../src/models/products";

const nonExistingProductId = "xxxx2222334";
async function createProduct(override?: Partial<Product>) {
  let product = {
    ID: 412,
    Make: "One",
    Model: "Two",
    Price: 222,
    UserID: 212,
    Date: new Date("2022-05-02"),
  };

  if (override) {
    product = { ...product, ...override };
  }

  return await request(app).post("/products").send(product);
}

describe("product controller", () => {
  let mongodHelper: MongodHelper;

  beforeAll(async () => {
    mongodHelper = await connect();

  });

  afterEach(async () => {
    await mongodHelper.clearDatabase();
  });

  afterAll(async () => {
    await mongodHelper.closeDatabase();
  });

  it("should create product", async () => {
    const res = await createProduct();

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.Make).toBe("One");
  });

  it("should not create a product with wrong data", async () => {
    const res = await request(app)
      .post("/products")
      .send({
        ID: 412,
        Make: "One",
        Model: "Two",
        Price: 222,
        UserID: 212,
        Date: new Date("2022-05-02"),
      });
      expect(res.status).toBe(400)
  });
});
