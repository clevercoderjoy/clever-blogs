import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import MyBlogs from "../pages/myBlogs/MyBlogs";
import SingleBlogPage from "../pages/singleBlogPage/SingleBlogPage";
import About from "../pages/about/About";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

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
            element: <SingleBlogPage />,
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