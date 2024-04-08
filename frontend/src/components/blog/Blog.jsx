import React, { useEffect, useState } from "react";
import "./blog.css";
import Button from "../button/Button";
import LukeImage from "../../images/Luke.jpeg";
import BlogImage from "../../images/BlogImage.png";
import axios from "axios";

const Header = ({ title, title2 }) => (
  <header className="BlogHeader">
    <h2>{title}</h2>
    <br />
  </header>
);

const BlogCard = ({ title, description, label, image, author, url }) => (
  <section className="BlogCard">
    <div className="BlogPicture">
      <img className="BlogImage" src={image} alt="Blog" />
    </div>
    <div className="BlogContent">
      <h3 className="BlogHeadline">{title}</h3>
      <div className="author">
        <p>
          <strong>Written by: </strong>
          {author}
        </p>
      </div>
      <p
        className="mainParagraph"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {/* <p className="mainParagraph">{description}</p> */}
      <div className="blogButton">
        <Button label={label} to={url} />
      </div>
    </div>
  </section>
);

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/blogsData");

        console.log("Fetched data: ", response.data);

        setAllBlogs(response.data);
        console.log("allblogs data: ", allBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <section className="Blog"></section>
      ) : (
        <section className="Blog">
          <Header title="Blogs" />
          {allBlogs.length > 0 && (
            <BlogCard
              title={allBlogs[allBlogs.length - 1].title}
              description={allBlogs[allBlogs.length - 1].description}
              label="Read More"
              image={`data:image/jpeg;base64,${
                allBlogs[allBlogs.length - 1].image
              }`}
              author={allBlogs[allBlogs.length - 1].author}
              url={allBlogs[allBlogs.length - 1].button.to}
            />
          )}
        </section>
      )}
    </>
  );
};
export default Blog;
