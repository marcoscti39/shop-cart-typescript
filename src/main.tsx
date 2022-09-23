import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import ContextProvider from "../context";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "store",
//     element: <Store />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
