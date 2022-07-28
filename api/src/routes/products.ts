import { Router } from 'express'
import { getAllProducts, createNewProduct } from '../controllers/products'

const router = Router();

router.get('/', getAllProducts)
router.post('/',createNewProduct)

export default router;