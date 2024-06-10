import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import UserTable from "./components/UserTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Owner from "./components/Owner.jsx";
import UserSector from "./components/UserSector.jsx";
import InputForm from "./components/Form.jsx";
import AdminSector from "./components/AdminSector.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    position: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      lastName: "",
      position: "",
    });
  };
  const handleDelete = (index) => {
    setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      ),
    },
    {
      path: "/User",
      element: (
        <div>
          <NavBar />
          <UserSector />
          <UserTable submittedData={submittedData} />
        </div>
      ),
    },
    {
      path: "/Owner",
      element: <NavBar />,
      children: [
        {
          path: "",
          element: <Owner />,
        },
      ],
    },
    {
      path: "/Admin",
      element: (
        <div>
          <NavBar />
          <AdminSector />
          <InputForm
            submittedData={submittedData}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
          />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
