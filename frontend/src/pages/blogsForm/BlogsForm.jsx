import "./blogsform.css";
import blogsHero from "../../images/blogs/blogs-hero.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SFooter from "../../components/footer/SFooter";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import axios from "axios";
import InterimNavbarBlog from "../../components/navbar/InterimNavbarBlog";

const BlogsForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/admin/check-auth", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          navigate("/admin/login");
        }
      } catch (error) {
        console.error("Error checking authentication ", error);
      }
    };
    checkAuthentication();
  }, [navigate]);

  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [titleEntryUpdateForm, setTitleEntryUpdateForm] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [displayDeleteForm, setDisplayDeleteForm] = useState(false);
  const [postResponseOk, setPostResponseOk] = useState(false);
  const [postResponseNotOk, setPostResponseNotOk] = useState(false);
  const [patchResponseOk, setPatchResponseOk] = useState(false);
  const [patchResponseNotOk, setPatchResponseNotOk] = useState(false);

  const getData = (e) => {
    e.preventDefault();
    let selectElement = document.getElementById("mySelect");
    let selectedOption = selectElement.value;

    if (selectedOption === "create") {
      setDisplayCreateForm(true);
      setDisplayUpdateForm(false);
      setDisplayDeleteForm(false);
      setTitleEntryUpdateForm(false);
    } else if (selectedOption === "update") {
      setTitleEntryUpdateForm(true);
      setDisplayCreateForm(false);
      setDisplayDeleteForm(false);
    } else if (selectedOption === "delete") {
      setDisplayDeleteForm(true);
      setDisplayCreateForm(false);
      setDisplayUpdateForm(false);
      setTitleEntryUpdateForm(false);
    } else {
      setDisplayCreateForm(false);
      setDisplayUpdateForm(false);
      setDisplayDeleteForm(false);
      setTitleEntryUpdateForm(false);
    }

    setPostResponseOk(false);
    setPatchResponseOk(false);
    setPostResponseNotOk(false);
    setPatchResponseNotOk(false);
    setDeleteResponseOk(false);
    setDeleteResponseNotOk(false);
    setDeleteOperationAborted(false);
    setYesNoWindow(false);
    setBlogTitleToUpdate("");
    setBlogTitleValueForDelete("");
  };
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handling the creation of form:
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("file", selectedFile);
      formDataToSend.append("id", formData.id);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("label", formData.label);

      await axios.post("http://localhost:3000/create", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPostResponseOk(true);
      setDisplayCreateForm(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setPostResponseNotOk(true);
      setDisplayCreateForm(false);
    }
    setFormData({
      id: "",
      title: "",
      author: "",
      description: "",
      date: "",
      label: "",
    });
    const form = document.getElementById("selection-form");
    form.reset();
  };

  //handling the update of form:
  const [blogTitleValue, setBlogTitleValue] = useState("");
  const [blogTitleToUpdate, setBlogTitleToUpdate] = useState("");

  const handleChangeForTitle = (e) => {
    setBlogTitleToUpdate(e.target.value);
  };

  //getting the title entry form data for update:
  const getTitleData = (e) => {
    e.preventDefault();
    let blogTitle = document.getElementById("blog-title-old").value;
    console.log("my blogTitle value (a):  ", blogTitle);
    // encodedBlogTitle = encodeURIComponent(blogTitle);
    // console.log("This is my encoded blog title: ", encodedBlogTitle);
    setBlogTitleValue(blogTitle);
    setDisplayUpdateForm(true);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSendForUpdate = new FormData();
      formDataToSendForUpdate.append("image", selectedFile);
      formDataToSendForUpdate.append("id", formData.id);
      formDataToSendForUpdate.append("title", formData.title);
      formDataToSendForUpdate.append("author", formData.author);
      formDataToSendForUpdate.append("description", formData.description);
      formDataToSendForUpdate.append("date", formData.date);
      formDataToSendForUpdate.append("label", formData.label);

      await axios.patch(
        `http://localhost:3000/update/${blogTitleValue}`,
        formDataToSendForUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Blog updated successfully!");
      setPatchResponseOk(true);
      setDisplayUpdateForm(false);
    } catch (error) {
      console.error("Error updating blog");
      setPatchResponseNotOk(true);
    }
    setFormData({
      id: "",
      image: "",
      title: "",
      author: "",
      description: "",
      date: "",
      button: {
        label: "",
        color: "",
        to: "",
      },
    });
    setDisplayUpdateForm(false);
    setTitleEntryUpdateForm(false);
    const form = document.getElementById("selection-form");
    form.reset();
    setBlogTitleToUpdate("");
  };

  //getting the title entry form data for delete:

  const [blogTitleValueForDelete, setBlogTitleValueForDelete] = useState("");
  const [yesNoWindow, setYesNoWindow] = useState(false);
  const handleChangeForTitleToDelete = (e) => {
    setBlogTitleValueForDelete(e.target.value);
  };

  const getTitleDataDelete = (e) => {
    e.preventDefault();
    let blogTitle = document.getElementById("blog-title-old-delete").value;
    console.log("my blogTitle value (a):  ", blogTitle);
    // encodedBlogTitle = encodeURIComponent(blogTitle);
    // console.log("This is my encoded blog title: ", encodedBlogTitle);
    setBlogTitleValueForDelete(blogTitle);
    setDisplayDeleteForm(false);
    setYesNoWindow(true);
  };
  const [deleteResponseOk, setDeleteResponseOk] = useState(false);
  const [deleteResponseNotOk, setDeleteResponseNotOk] = useState(false);
  const [deleteOperationAborted, setDeleteOperationAborted] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(
        `http://localhost:3000/delete/${blogTitleValueForDelete}`
      );

      console.log("Blog deleted successfully!");
      setDeleteResponseOk(true);
    } catch (error) {
      console.error("Error deleting blog");
      setDeleteResponseNotOk(true);
    }

    setDisplayDeleteForm(false);
    setYesNoWindow(false);
    const form = document.getElementById("selection-form");
    form.reset();
    setBlogTitleValueForDelete("");
  };
  const handleNoDelete = (e) => {
    e.preventDefault();
    console.log("Delete operation canceled");
    setDisplayDeleteForm(false);
    setYesNoWindow(false);
    const form = document.getElementById("selection-form");
    form.reset();
    setBlogTitleValueForDelete("");
    setDeleteOperationAborted(true);
  };

  //handling logout:
  const logout = async () => {
    try {
      const response = await fetch("/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Logged out successfully!");
        localStorage.removeItem("token");
        navigate("/admin/login");
      } else {
        console.log("Error logging out.");
      }
    } catch (error) {
      console.error("Error while logging out ", error);
    }
  };

  return (
    <div className="blogform">
      <InterimNavbarBlog background="#0a253b" color="white" />
      <div className="fblogs-hero">
        <img src={blogsHero} alt="blogs-hero" />
        <div className="fblogs-hero-text">
          <div className="fblogs-route">
            <p>Home / admin / blogs</p>
          </div>
          <div className="fblogs-title">
            <h2>Blog Management Console</h2>
          </div>
          <div className="fblogs-subtitle">
            <p>Empowering Admins with CRUD Operations</p>
          </div>
        </div>
      </div>
      <div className="allmyblogforms">
        <div className="logout-button-div">
          <button className="logoutButton" onClick={logout}>
            Logout
          </button>
        </div>
        {/* CRUD Operation selection form: */}
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
          </label>
          <button className="next-button" onClick={getData}>
            Next
          </button>
        </form>
        {/* creating-blog form: */}
        {displayCreateForm && (
          <form
            onSubmit={handleCreate}
            className="create-update-form"
            id="create-update-form"
          >
            <label htmlFor="blog-id">
              Blog ID (number):
              <br />
              <input
                type="number"
                id="blog-id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="blog-image-url">
              Blog Image Upload:
              <br />
              <input type="file" onChange={handleFileChange} />
            </label>

            <label htmlFor="blog-title">
              Blog Title:
              <br />
              <input
                type="text"
                id="blog-title"
                name="title"
                onChange={handleChange}
                value={formData.title}
                required
              />
            </label>

            <label htmlFor="blog-author">
              Blog Author:
              <br />
              <input
                type="text"
                id="blog-author"
                name="author"
                onChange={handleChange}
                value={formData.author}
                required
              />
            </label>

            <label htmlFor="blog-description">
              Blog Description: <br />
              <span>
                (add "&lt;br /&gt;" where you need a line break. To make titles
                bold, surround them with "&lt;strong&gt;" and "&lt;strong/&gt;"
                )
              </span>
              <textarea
                id="blog-description"
                name="description"
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
                name="date"
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
                name="label"
                onChange={handleChange}
                value={formData.label}
                required
              />
            </label>

            <button className="cr-updt-button" type="submit">
              Create
            </button>
          </form>
        )}
        {/* Confirmation message that blog added */}
        {postResponseOk && (
          <div className="confirm-window-success">
            <p>Blog created successfully!</p>
          </div>
        )}
        {postResponseNotOk && (
          <div className="confirm-window-failure">
            <p>Blog creation failed, try again later.</p>
          </div>
        )}
        {/* updating-blog form: */}
        {titleEntryUpdateForm && (
          <form className="getTitle-form" id="getTitle-form">
            <label htmlFor="blog-title-old">
              Type the title of the blog you wish to update:
              <br />
              <input
                type="text"
                id="blog-title-old"
                onChange={handleChangeForTitle}
                value={blogTitleToUpdate}
                required
              />
            </label>
            <button className="next-button-update" onClick={getTitleData}>
              Next
            </button>
          </form>
        )}
        {displayUpdateForm && (
          <form
            onSubmit={handleUpdate}
            className="create-update-form"
            id="create-update-form"
          >
            <label htmlFor="blog-id">
              Blog ID (number):
              <br />
              <input
                type="number"
                id="blog-id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="blog-image-url">
              Blog Image Upload:
              <br />
              <input type="file" onChange={handleFileChange} />
            </label>

            <label htmlFor="blog-title">
              Blog Title:
              <br />
              <input
                type="text"
                id="blog-title"
                name="title"
                onChange={handleChange}
                value={formData.title}
                required
              />
            </label>

            <label htmlFor="blog-author">
              Blog Author:
              <br />
              <input
                type="text"
                id="blog-author"
                name="author"
                onChange={handleChange}
                value={formData.author}
                required
              />
            </label>

            <label htmlFor="blog-description">
              Blog Description: <br />
              <span>
                (add "&lt;br /&gt;" where you need a line break. To make titles
                bold, surround them with "&lt;strong&gt;" and "&lt;strong/&gt;"
                )
              </span>
              <textarea
                id="blog-description"
                name="description"
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
                name="date"
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
                name="label"
                onChange={handleChange}
                value={formData.label}
                required
              />
            </label>

            <button className="cr-updt-button" type="submit">
              Update
            </button>
          </form>
        )}
        {/* Confirmation message that blog updated */}
        {patchResponseOk && (
          <div className="confirm-window-success">
            <p>Blog updated successfully!</p>
          </div>
        )}
        {patchResponseNotOk && (
          <div className="confirm-window-failure">
            <p>Blog update failed. A blog with such title not found.</p>
          </div>
        )}
        {/* deleting-blog form: */}
        {displayDeleteForm && (
          <form className="getTitle-form-delete" id="getTitle-form-delete">
            <label htmlFor="blog-title-old-delete">
              Type the title of the blog you wish to delete:
              <br />
              <input
                type="text"
                id="blog-title-old-delete"
                onChange={handleChangeForTitleToDelete}
                value={blogTitleValueForDelete}
                required
              />
            </label>
            <button className="next-button" onClick={getTitleDataDelete}>
              Next
            </button>
          </form>
        )}
        {yesNoWindow && (
          <form className="yes-no-form" id="getTitle-form-delete">
            <label htmlFor="blog-title-old-delete">
              The blog will be deleted permanently, are you sure you want to
              delete this blog?
              <br />
              <br />
              <div className="yes-no-buttons">
                <button className="yes-button" onClick={handleDelete}>
                  Yes
                </button>
                <button className="no-button" onClick={handleNoDelete}>
                  No
                </button>
              </div>
            </label>
          </form>
        )}
        {/* Confirmation message that blog deleted */}
        {deleteResponseOk && (
          <div className="confirm-window-success">
            <p>Blog deleted successfully!</p>
          </div>
        )}
        {deleteResponseNotOk && (
          <div className="confirm-window-failure">
            <p>A blog with such a title not found.</p>
          </div>
        )}
        {deleteOperationAborted && (
          <div className="confirm-window-failure">
            <p>Delete operation aborted.</p>
          </div>
        )}
      </div>

      <SFooter />
    </div>
  );
};

export default BlogsForm;
