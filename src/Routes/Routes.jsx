import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error-page/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
        {
            index: true,
            loader:()=>fetch('data.json'),
            path: "/",
            Component: Home
        },
        {
          path: "/about",
          Component: About
        },
        {
          path: "/readlist",
          loader:()=>fetch('data.json'),
          Component: ReadList
        },
        {
          path: '/bookDetails/:id',
          loader:()=>fetch('data.json'),
          Component: BookDetails
        }
    ]
  },
]);