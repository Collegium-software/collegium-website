import "./blogpagedetails.css";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import { useEffect, useState } from "react";
import BlogVertical from "./BlogVertical";
import Button from "../../components/button/Button";
const BlogOneDetails = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogs");
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
  const undesiredUrl = "/blogs/blog1";
  const filteredBlogs = allBlogs.filter(
    (blog) => blog.button.to !== undesiredUrl
  );
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blogpagedetails">
      <Navbar background="white" color="black" />
      <div className="blog-hero-pic">
        <img src={allBlogs[0].image} alt={allBlogs[0].title} />
      </div>
      <div className="blogpage-full-article">
        <div className="blogpageFullArticle-title">
          <h2>{allBlogs[0].title}</h2>
          <p>
            <strong>Written by: {allBlogs[0].author}</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{allBlogs[0].date}
          </p>
        </div>
        <div className="blogpageFullArticle-description">
          <p>{allBlogs[0].description}</p>
        </div>
      </div>
      <div className="recent-posts">
        <h1>Other Blogs:</h1>
        <div className="blogs">
          {filteredBlogs.slice(0, 3).map((blog) => (
            <div key={blog.id}>
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

export default BlogOneDetails;
