import { Router } from "express";
import routerProduct from "../modules/products/routes/routes.Product";


const router = Router()

router.use('/product', routerProduct);

export default router;