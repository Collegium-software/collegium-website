import "./blogpagedetails.css";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import { useEffect, useState } from "react";
import BlogVertical from "./BlogVertical";
import Button from "../../components/button/Button";
import waitForFetch from "../../images/blogs/loading.gif";
import axios from "axios";
import InterimNavbarBlog from "../../components/navbar/InterimNavbarBlog";
import BlogHorizontal from "./BlogHorizontal";
const BlogOneDetails = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vToH, setVToH] = useState(false);
  const [HToV, setHToV] = useState(true);

  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/blogsData");

        console.log("Fetched data: ", response.data);

        setAllBlogs(response.data);
        console.log("allblogs data: ", allBlogs);
        setLoading(false);
        if (allBlogs.length < 2) {
          setVToH(true);
          setHToV(false);
        }
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

  return (
    <div className="blogpagedetails">
      <InterimNavbarBlog background="white" color="black" />
      {loading ? (
        <div className="loading-waitTime">
          <img src={waitForFetch} />
        </div>
      ) : (
        <>
          <div className="blog-hero-pic">
            <img
              src={`data:image/jpeg;base64,${allBlogs[0].image}`}
              alt={allBlogs[0].title}
            />
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
              {HToV &&
                filteredBlogs.slice(0, 3).map((blog) => (
                  <div key={blog.id}>
                    <BlogHorizontal
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
              {vToH &&
                filteredBlogs.slice(0, 3).map((blog) => (
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
            <Button
              label="See more blogs"
              color="black"
              to="/blogs/all-blogs"
            />
          </div>
        </>
      )}

      <SFooter />
    </div>
  );
};

export default BlogOneDetails;
