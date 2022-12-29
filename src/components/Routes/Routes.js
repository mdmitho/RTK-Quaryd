import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../../App";
import { Dashboard } from "../Dashboard/Dashboard";
import { About } from "../page/About";
import { Cart } from "../page/Cart";
import { AddProduct } from "../page/DashboardPage/AddProduct";
import { ProductList } from "../page/DashboardPage/ProductList";
import { Home } from "../page/Home";
import TopRated from "../page/TopRated";


const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "cart",
      element: <Cart/>,
    },
    {
      path: "topRated",
      element: <TopRated/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard",
          element: <ProductList />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
      ],
    },
  ]);

  export default router;