import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ecommerce from "./e-commerce";


const ReactRouter = () => {

    const router = createBrowserRouter([
      
        {
          path: "/",
          element: <Ecommerce/>,
        },
      ]);
      

    return <RouterProvider router={router} />
}

export default ReactRouter;