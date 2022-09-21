
import { Router } from "express";
import routerProduct from "../modules/products/routes/routes.product";
import routerUser from "../modules/users/routes/routes.user";
import routerSession from '../modules/users/routes/routes.session'

const router = Router()

// quem responde a rota /product é routerProduct
router.use('/product', routerProduct)

// quem responde a rota /product é routerProduct
router.use('/user', routerUser)


router.use('/session', routerSession)

export default router