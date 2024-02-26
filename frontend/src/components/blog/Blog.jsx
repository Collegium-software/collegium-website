import React from "react";
import "./blog.css";
import Button from "../button/Button";
import LukeImage from "../../images/Luke.jpeg";
import BlogImage from "../../images/BlogImage.png";

const Header = ({ title, title2 }) => (
  <header className="BlogHeader">
    <h1>{title}</h1>
    <h2>{title2}</h2>
    <hr />
  </header>
);

const BlogCard = ({ title, description, label }) => (
  <section className="BlogCard">
    <div className="BlogPicture">
      <img className="BlogImage" src={BlogImage} alt="Blog Post" />
    </div>
    <div className="BlogContent">
      <h3 className="BlogHeadline">{title}</h3>
      <p className="mainParagraph">{description}</p>
      <div className="blogButton">
        <Button label={label} to="/blogs/all-blogs/"/>
      </div>
      <div className="author">
        <img className="LukeImage" src={LukeImage} alt="Luke West" />
        <p>Luke West</p>
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section className="Blog">
    <Header title="Blog" title2="Insights and updates" />
    <BlogCard
      title="Collegium's Bold Move: Zero-Carbon, Mass Timber Community in Ontario"
      description="The cost of Design & Construction is rising unsustainably. Housing and Community Infrastructure is becoming more and more unaffordable and “Affordable” housing has become nothing more than a myth in Canada..."
      label="Read More"
    />
  </section>
);

export default Blog;
