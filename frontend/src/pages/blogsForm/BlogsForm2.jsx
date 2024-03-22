// UploadForm.js

import React, { useState } from "react";
import axios from "axios";
import "./blogsform2.css";
const Blogs2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
    date: "",
    label: "",
  });

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpload = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", selectedFile);
      formDataToSend.append("id", formData.id);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("label", formData.label);

      await axios.post("http://localhost:3000/upload", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    }
  };

  return (
    <div className="my-form">
      <div>
        <label>Blog ID:</label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Blog Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <label>Blog Image:</label>
      <input type="file" onChange={handleFileChange} />
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Label:</label>
        <input
          type="text"
          name="label"
          value={formData.label}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
};

export default Blogs2;
