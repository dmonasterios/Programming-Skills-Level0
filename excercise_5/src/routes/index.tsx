import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "../pages/Home";
import Expenses from "../pages/Expenses";
import ExpensesResume from "../components/ExpensesResume";
import ExpensesDetails from "../components/ExpensesDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/expenses",
    element: <Expenses/>,
    children:[
      {
        path:"details",
        element: <ExpensesDetails/>,
      },
      {
        path:"resume",
        element: <ExpensesResume/>,
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router}/>
}

export default AppRouter;