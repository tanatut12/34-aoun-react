import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import UserTable from "./components/UserTable.jsx";
import Owner from "./components/Owner.jsx";
import Form from "./components/Form.jsx";
import DataTable from "./components/DataTable.jsx";
import UserSector from "./components/UserSector.jsx";
import InputForm from "./components/Form.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <NavBar />
//         <UserSector />
//       </div>
//     ),
//   },
//   {
//     path: "/User",
//     element: (
//       <div>
//         <NavBar />
//         <UserSector />
//         <UserTable />
//       </div>
//     ),
//   },
//   {
//     path: "/Owner",
//     element: <NavBar />,
//     children: [
//       {
//         path: "",
//         element: <Owner />,
//       },
//     ],
//   },
//   {
//     path: "/Admin",
//     element: (
//       <div>
//         <NavBar />
//         <UserSector />
//         <InputForm />
//       </div>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
