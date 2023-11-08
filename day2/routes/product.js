import { Router } from "express";
import {
  getAllProduct,
  gedtDetailProduct,
  deleteProduct,
} from "../controllers/product";

const productRouter = Router();

productRouter.get("/product", getAllProduct);
productRouter.get("/product/:id", gedtDetailProduct);
productRouter.delete("/product/:id", deleteProduct);

export default productRouter;
