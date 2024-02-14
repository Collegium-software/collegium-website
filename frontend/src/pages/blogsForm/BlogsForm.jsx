import "./blogsform.css";
import blogsHero from "../../images/blogs/blogs-hero.jpg";
import { useEffect, useState } from "react";

import SFooter from "../../components/footer/SFooter";

const BlogsForm = () => {
  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [displayDeleteForm, setDisplayDeleteForm] = useState(false);

  const getData = (e) => {
    e.preventDefault();
    let selectElement = document.getElementById("mySelect");
    let selectedOption = selectElement.value;

    if (selectedOption === "create") {
      setDisplayCreateForm(true);
      setDisplayUpdateForm(false);
      setDisplayDeleteForm(false);
    } else if (selectedOption === "update") {
      setDisplayUpdateForm(true);
      setDisplayCreateForm(false);
      setDisplayDeleteForm(false);
    } else if (selectedOption === "delete") {
      setDisplayDeleteForm(true);
      setDisplayCreateForm(false);
      setDisplayUpdateForm(false);
    }
  };
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
    date: "",
    button: {
      label: "",
      color: "black",
      to: "",
    },
  });

  const handleChange = (e) => {
    const blogId = parseInt(document.getElementById("blog-id").value, 10);
    setFormData((prevData) => ({
      ...prevData,
      id: blogId,
      image: document.getElementById("blog-image-url").value,
      title: document.getElementById("blog-title").value,
      description: document.getElementById("blog-description").value,
      date: document.getElementById("blog-date").value,
      button: {
        label: document.getElementById("blog-button-label").value,
        color: "black",
        to: `/blogs/blog${blogId}`,
      },
    }));
  };
  const [responseOk, setResponseOk] = useState(false);

  const handleSubmit = async (e) => {
    console.log("This is Date at point (b): ", formData.date);

    e.preventDefault();

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success, e.g., redirect or show a success message
        console.log("Blog submitted successfully!");
        setResponseOk(true);
        setDisplayCreateForm(false);
      } else {
        // Handle error
        console.error("Error submitting blog");
        alert("Error creating blog, try again later!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="blogform">
      <div className="blogs-hero">
        <img src={blogsHero} alt="blogs-hero" />
        <div className="blogs-hero-text">
          <div className="blogs-route">
            <p>Home / admin / blogs</p>
          </div>
          <div className="blogs-title">
            <h2>Blog Management Console</h2>
          </div>
          <div className="blogs-subtitle">
            <p>Empowering Admins with CRUD Operations</p>
          </div>
        </div>
      </div>
      <form className="selection-form" id="selection-form">
        <label htmlFor="mySelect">
          Choose the action from the list below:
          <br />
          <select id="mySelect" className="actionLabel-select">
            <option value=""></option>
            <option value="create">Create new blog</option>
            <option value="update">Update an existing blog</option>
            <option value="delete">Delete an existing blog</option>
          </select>
          <button className="next-button" onClick={getData}>
            Next
          </button>
        </label>
      </form>
      {displayCreateForm && (
        <form
          onSubmit={handleSubmit}
          className="create-update-form"
          id="create-update-form"
        >
          <label htmlFor="blog-id">
            Blog ID (number):
            <br />
            <input
              type="number"
              id="blog-id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="blog-image-url">
            Blog Image URL (4x3 aspect ratio):
            <br />
            <input
              type="text"
              id="blog-image-url"
              onChange={handleChange}
              value={formData.image}
              required
            />
          </label>

          <label htmlFor="blog-title">
            Blog Title:
            <br />
            <input
              type="text"
              id="blog-title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </label>

          <label htmlFor="blog-description">
            Blog Description: <br />
            <span>(add "&lt;br /&gt;" where you need a line break )</span>
            <br />
            <textarea
              id="blog-description"
              onChange={handleChange}
              value={formData.description}
              required
            />
          </label>

          <label htmlFor="blog-date">
            Date:
            <br />
            <input
              type="date"
              id="blog-date"
              onChange={handleChange}
              value={formData.date}
              required
            />
          </label>

          <label htmlFor="blog-button-label">
            Button Label:
            <br />
            <input
              type="text"
              id="blog-button-label"
              onChange={handleChange}
              value={formData.button.label}
              required
            />
          </label>

          <button className="cr-updt-button" type="submit">
            Create
          </button>
        </form>
      )}
      {responseOk && (
        <div className="confirm-window">
          <p>Blog Created Successfully!</p>
        </div>
      )}
      {displayUpdateForm && <div>This is Update Form</div>}
      {displayDeleteForm && <div>This is Delete Form</div>}
      <SFooter />
    </div>
  );
};

export default BlogsForm;
