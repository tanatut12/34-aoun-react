import React, { useState } from "react";
import DataTable from "./DataTable";

const InputForm = ({
  handleSubmit,
  handleChange,
  formData,
  submittedData,
  handleDelete,
}) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   lastName: "",
  //   position: "",
  // });

  // const [submittedData, setSubmittedData] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmittedData([...submittedData, formData]);
  //   setFormData({
  //     name: "",
  //     lastName: "",
  //     position: "",
  //   });
  // };

  return (
    <div className="flex flex-col items-center justify-center px-[580px] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center space-x-4 w-full  bg-white p-8 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-bold ">Input Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="position"
          >
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your position"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>

      <DataTable submittedData={submittedData} handleDelete={handleDelete} />
    </div>
  );
};

export default InputForm;
