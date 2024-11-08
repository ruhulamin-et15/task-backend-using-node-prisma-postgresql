import express from "express";
import auth from "../../middlewares/auth";
import { productController } from "./product.controller";
import { productValidation } from "./product.validation";
import validateRequest from "../../middlewares/validateRequest";
import { UserRole } from "@prisma/client";

const router = express.Router();

// admin routes
router.post(
  "/create",
  auth(UserRole.ADMIN),
  validateRequest(productValidation.productValidationSchema),
  productController.createProduct
);
router.put("/:id", auth(UserRole.ADMIN), productController.updateProduct);
router.delete("/:id", auth(UserRole.ADMIN), productController.deleteProduct);

// public routes
router.get("/", productController.getProducts);
router.get("/:id", productController.getSingleProduct);

export const productRoute = router;
