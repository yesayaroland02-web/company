import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Teams from "../pages/teams";
import Blogs from "../pages/blogs";
import BlogDetail from "../pages/blog-detail";
import Login from "../pages/login";
import CreateBlog from "../pages/create-blog";

import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create-blog",
        element: (
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);