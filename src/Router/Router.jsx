import { createBrowserRouter } from "react-router-dom";
import Lesson from "./../Components/Lesson";
import MainLayout from "./../layouts/MainLayout";
import Dashboard from "./../Page/Dashboard";
import ForgotPassword from "./../Page/ForgotPassword";
import Home from "./../Page/Home";
import Login from "./../Page/Login";
import NotFound from "./../Page/NotFound";
import Profile from "./../Page/Profile";
import Register from "./../Page/Register";
import StartLearning from "./../Page/StartLearning";
import UpdateProfile from "./../Page/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/start-learning",
          element: (
            <PrivateRoute>
              <StartLearning />
            </PrivateRoute>
          ),
          loader: () => fetch("/spanish_vocabularies.json"),
        },
        {
          path: "/lesson/:lessonNo",
          element: (
            <PrivateRoute>
              <Lesson />
            </PrivateRoute>
          ),
          loader: () => fetch("/spanish_vocabularies.json"),
        },
        {
          path: "profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          ),
        },
        {
          path: "/update-profile",
          element: (
            <PrivateRoute>
              <UpdateProfile></UpdateProfile>
            </PrivateRoute>
          ),
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword></ForgotPassword>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
