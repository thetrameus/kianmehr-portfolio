import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Test from "../test/test";

export const router = createBrowserRouter([
  { path: "/", index: true, element: <App /> },
  { path: "/test", element: <Test /> },
]);
