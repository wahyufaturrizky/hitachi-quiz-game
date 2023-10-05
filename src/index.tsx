import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./pages/error-page";
import HomeScreen from "./pages/home-screen-page";
import InstructionScreen from "./pages/instruction-page";
import LayoutQuestion from "./pages/layout-question";
import QuestionScreen from "./pages/question-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "instruction-page",
        element: <InstructionScreen />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/question",
    element: <LayoutQuestion />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/question/:numberOfQuestion",
        element: <QuestionScreen />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
