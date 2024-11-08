import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { productService } from "./product.service";
import sendResponse from "../../../shared/sendResponse";

//create a new product
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProductInDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Product created successfully",
    data: product,
  });
});

//get all products
const getProducts = catchAsync(async (req: Request, res: Response) => {
  const products = await productService.getAllProductsFromDB(req);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Products retrieved successfully",
    data: products,
  });
});

//get single product
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = await productService.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product retrieved successfully",
    data: product,
  });
});

//update a product
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = await productService.updateProductInDB(
    productId,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product updated successfully",
    data: updatedProduct,
  });
});

//delete a product
const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const deletedProduct = await productService.deleteProductFromDB(productId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product deleted successfully",
    data: deletedProduct,
  });
});

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
