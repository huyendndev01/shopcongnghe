import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Product from "../pages/Product";

export const routes = [
  {
    path: "/",
    element: Home,
    isHeader: true,
  },
  {
    path: "/product",
    element: Product,
    isHeader: true,
  },
  {
    path: "/contact",
    element: Contact,
    isHeader: true,
  },
  {
    path: "/checkout",
    element: Checkout,
    isHeader: true,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
