import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import { productSearch } from "../../../shared/productSearch";
import ApiError from "../../errors/ApiErrors";
import { IProduct } from "./product.interface";

//create a new product
const createProductInDB = async (payload: IProduct) => {
  const product = await prisma.product.create({
    data: {
      name: payload.name,
      description: payload.description as string,
      price: payload.price,
      category: payload.category,
    },
  });

  return product;
};

// get all products
const getAllProductsFromDB = async (req: any) => {
  const { page = 1, limit = 20, search } = req.query;
  const skip = (page - 1) * limit;

  const searchFilters = productSearch(search);

  const products = await prisma.product.findMany({
    where: searchFilters as any,
    skip: skip,
    take: limit,
    orderBy: [{ price: "asc" }, { createdAt: "asc" }],
  });

  const totalCount = await prisma.product.count({
    where: searchFilters as any,
  });

  return {
    totalCount,
    totalPages: Math.ceil(totalCount / limit),
    currentPage: page,
    products,
  };
};

// get single product by id
const getSingleProductFromDB = async (id: number) => {
  const product = await prisma.product.findFirst({ where: { id } });
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found!");
  }
  return product;
};

// update a product by id
const updateProductInDB = async (id: number, payload: IProduct) => {
  const existingProduct = await prisma.product.findFirst({ where: { id } });
  if (!existingProduct) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found!");
  }

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: payload,
  });

  return updatedProduct;
};

// delete a product by id
const deleteProductFromDB = async (id: number) => {
  const deletedProduct = await prisma.product.delete({ where: { id } });
  if (!deletedProduct) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found!");
  }

  return deletedProduct;
};

export const productService = {
  createProductInDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
