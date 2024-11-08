import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoute } from "../modules/auth/auth.routes";
import { productRoute } from "../modules/product/product.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },

  {
    path: "/auth",
    route: authRoute,
  },

  {
    path: "/product",
    route: productRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
