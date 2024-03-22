import "./blogpagedetails.css";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import { useEffect, useState } from "react";
import BlogVertical from "./BlogVertical";
import Button from "../../components/button/Button";
const BlogThreeDetails = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogsPics");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ", ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data: ", data);
        setAllBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const undesiredUrl = "/blogs/blog3";
  const filteredBlogs = allBlogs.filter(
    (blog) => blog.button.to !== undesiredUrl
  );

  if (loading) {
    return <p style={{ color: "black" }}>Loading...</p>;
  }

  return (
    <div className="blogpagedetails">
      <Navbar background="white" color="black" />
      <div className="blog-hero-pic">
        <img
          src={`data:image/jpeg;base64,${allBlogs[2].image}`}
          alt={allBlogs[2].title}
        />
      </div>
      <div className="blogpage-full-article">
        <div className="blogpageFullArticle-title">
          <h2>{allBlogs[2].title}</h2>
          <p>
            <strong>Written by: {allBlogs[2].author}</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{allBlogs[2].date}
          </p>
        </div>
        <div className="blogpageFullArticle-description">
          <p>{allBlogs[2].description}</p>
        </div>
      </div>
      <div className="recent-posts">
        <h1>Other Blogs:</h1>
        <div className="blogs">
          {filteredBlogs.slice(0, 3).map((blog, index) => (
            <div key={index}>
              <BlogVertical
                id={blog.id}
                image={blog.image}
                title={blog.title}
                author={blog.author}
                description={blog.description}
                date={blog.date}
                bttnLabel={blog.button.label}
                bttnColor={blog.button.color}
                bttnTo={blog.button.to}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="see-more-button">
        <Button label="See more blogs" color="black" to="/blogs/all-blogs" />
      </div>

      <SFooter />
    </div>
  );
};

export default BlogThreeDetails;
