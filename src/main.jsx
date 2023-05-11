import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import JobDetail from "./components/JobDetail/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job/:jobId",
        element: <JobDetail />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <></>,
      },
      {
        path: "/applied-jobs",
        element: <></>,
      },
      {
        path: "/blogs",
        element: <></>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
