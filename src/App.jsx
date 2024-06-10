import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import UserTable from "./components/UserTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Owner from "./components/Owner.jsx";
import UserSector from "./components/UserSector.jsx";
import InputForm from "./components/Form.jsx";
import AdminSector from "./components/AdminSector.jsx";
import Home from "./components/Home.jsx";
import axios from "axios";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchEmployer = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setSubmittedData(response.data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchEmployer();
  }, [reload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      lastname: "",
      position: "",
    });
    try {
      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        { formData }
      );
      // setEmployer();
      setReload(!reload);
    } catch (error) {
      console.log("error");
    }
  };
  const handleDelete = async (id) => {
    const afterDelete = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`,
      { member_id: id }
    );
    setReload(!reload);
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
