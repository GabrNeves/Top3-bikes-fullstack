import { getAllProducts } from '../../src/controllers/products';
import connect, { MongodHelper } from '../db-helper';

import ProductDocument from '../../src/models/products'
import { Product } from '../../src/models/products';
import ProductServices from '../../src/services/products'


//insert new fake product
const product: Product = {
  ID: 412,
  Make: 'One',
  Model: 'Two',
  Price: 222,
  UserID: 212,
  Date: new Date('2022-05-02'),
}
async function createNewProduct() {
  const productDocument = await ProductDocument.create(product);
  return await productDocument.save()
}

//unit test

//test suite
describe('product services', () => {
  //fake db
  let mongodHelper: MongodHelper;
  
  beforeAll(async () => {
    mongodHelper = await connect();
    await createNewProduct()
  });

  afterEach(async () => {
    await mongodHelper.clearDatabase();
  });

  afterAll(async () => {
    await mongodHelper.closeDatabase();
  });

  //test
  it("should get all product", async () => {
    const productList = await ProductServices.getProducts();
    expect(productList.length).toEqual(1);
    expect(productList[0]._id.Model).toEqual('Two')
  })
  it('should create a new product', async () => {
    const newProduct = await ProductServices.createProduct(product);
    expect(newProduct).toHaveProperty('ID', 412);
    expect(newProduct).toHaveProperty('Make', 'One');
    expect(newProduct).toHaveProperty('Model', 'Two');
    expect(newProduct).toHaveProperty('Price', 222);
    expect(newProduct).toHaveProperty('UserID', 212);
    expect(newProduct).toHaveProperty('Date', new Date('2022-05-02'));
  })

})
