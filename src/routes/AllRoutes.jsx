import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MyBlogs from "../pages/MyBlogs";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import SingleBlog from "../pages/SingleBlog";
import NotFoundPage from "../pages/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: "blogs/blogId",
            element: <SingleBlog />,
          },
        ]
      },
      {
        path: "myBlogs",
        children: [
          {
            index: true,
            element: <MyBlogs />,
          },
          {
            path: "myBlogs/blogId",
            element: "",
          },
        ]
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ]
  },
])