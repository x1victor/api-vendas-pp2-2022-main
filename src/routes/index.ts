
import { Router } from "express";
import routerProduct from "../modules/products/routes/routes.product";

const router = Router()

// quem responde a rota /product é routerProduct
router.use('/product', routerProduct)

export default router