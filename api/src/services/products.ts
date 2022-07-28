import productModel, { Product } from '../models/products'

const getProducts = async () => {
  const agg: any = [
    {
      '$group': {
        '_id': {
          'Model': '$Model', 
          'Make': '$Make'
        }, 
        'MaxPrice': {
          '$max': '$Price'
        }, 
        'LastDate': {
          '$last': '$Date'
        }, 
        'MinPrice': {
          '$min': '$Price'
        }, 
        'Count': {
          '$count': {}
        }, 
        'AvgPrice': {
          '$avg': '$Price'
        }
      }
    }, {
      '$sort': {
        'Count': -1
      }
    }
  ];
  const getAggProduct = await productModel.aggregate(agg)
  return getAggProduct
}

const createProduct = async (product: Product) => {
  const newProduct = await productModel.create(product)
  return await newProduct.save()
}

export default { getProducts, createProduct }