import "./blogsform.css";
import blogsHero from "../../images/blogs/blogs-hero.jpg";
const BlogsForm = () => {
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
      <form className="blogs-form">
        <label htmlFor="mySelect">
          Choose the action from the list:
          <br />
          <select id="mySelect" className="actionLabel-select">
            <option value="create">Create new blog</option>
            <option value="update">Update existing blog</option>
            <option value="create">Delete an existing blog</option>
          </select>
          <button className="next-button">Next</button>
        </label>
      </form>
    </div>
  );
};

export default BlogsForm;
