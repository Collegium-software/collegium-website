import { useEffect, useState } from "react";
import "./allblogs.css";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import BlogsHero from "./BlogsHero";
import SFooter from "../../components/footer/SFooter";
import waitForFetch from "../../images/blogs/loading.gif";
import axios from "axios";
import InterimNavbar from "../../components/navbar/InterimNavbar";
import InterimNavbarBlog from "../../components/navbar/InterimNavbarBlog";

const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [zeroBlog, setZeroBlog] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
    const retrieveAllBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/blogsData");

        console.log("data: ", response.data);
        setAllBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };

    retrieveAllBlogs();
  }, []);

  const sortedBlogs = allBlogs
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log("Sorted Blogs: ", sortedBlogs);

  const Blog = ({ blog }) => {
    if (allBlogs.length === 0) {
      setZeroBlog(true);
    }
    return (
      <div className="myBlog-gradient">
        <div className="myBlog-container">
          <div className="myBlog-image">
            <img
              src={`data:image/jpeg;base64,${blog.image}`}
              alt={blog.title}
            />
          </div>
          <div className="myBlog-text">
            <p className="date-created">Date created: &emsp;{blog.date}</p>
            <h2 className="myBlog-title">{blog.title}</h2>
            <p className="myBlog-author">Written by:&emsp;{blog.author}</p>
            <p className="myBlog-description">{blog.description}</p>
            <div className="myBlog-button">
              <Button
                label={blog.button.label}
                color={blog.button.color}
                to={blog.button.to}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <InterimNavbarBlog background="#0a253b" color="white" />
      <BlogsHero
        route="Blogs/All- Blogs"
        title="All Blogs"
        subtitle="Insights & Updates"
      />
      {loading ? (
        <div className="loading-waitTime">
          <img src={waitForFetch} />
        </div>
      ) : (
        <>
          {zeroBlog && (
            <div className="noblog">
              <h4>
                Sorry! no blog to display at the moment. Please visit the page
                later.
              </h4>
            </div>
          )}
          <div className="all-blogs-section">
            {sortedBlogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </>
      )}

      <SFooter />
    </>
  );
};

export default AllBlogs;

//to fetch all blogs from the database.
