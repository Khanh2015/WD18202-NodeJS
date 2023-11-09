import { Router } from "express";
import {
  getAllProduct,
  gedtDetailProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/product";

const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", gedtDetailProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);

export default productRouter;
