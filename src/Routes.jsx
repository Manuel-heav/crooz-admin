// Routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Driver from "./components/Driver";
import Parent from "./components/Parent";
import PrivateRoute from "./context/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/driver",
        element: (
          <PrivateRoute>
            <Driver />
          </PrivateRoute>
        ),
      },
      {
        path: "/parent",
        element: (
          <PrivateRoute>
            <Parent />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
