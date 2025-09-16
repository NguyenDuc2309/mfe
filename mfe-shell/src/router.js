import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Product from "./pages/ProductRemote";
import Order from "./pages/OrderRemote";
import User from "./pages/UserRemote";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/products/*", Component: Product, errorElement: NotFound },
      { path: "/orders/*", Component: Order, errorElement: NotFound },
      { path: "/users/*", Component: User, errorElement: NotFound },
      { path: "/404", Component: NotFound },
      { path: "*", Component: NotFound }
    ],
  },
]);
