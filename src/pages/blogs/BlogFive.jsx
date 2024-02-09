import "./blogone.css";
import blogfive from "../../images/blogs/blogfive.jpg";
import Button from "../../components/button/Button";
const BlogFive = () => {
  return (
    <div className="blogOne-container">
      <div className="blogOne">
        <div className="blogOne-text">
          <div className="blogOne-title">
            <h2>Blogs List: Blog 5</h2>
          </div>
          <div className="blogOne-description">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
          </div>
          <div className="blogOne-date-button">
            <p>July 4, 2023</p>
            <Button label={"Learn More"} color="black" to="/blogs/blog5" />
          </div>
        </div>
        <div className="blogOne-pic">
          <img src={blogfive} alt="blog-five" />
        </div>
      </div>
    </div>
  );
};

export default BlogFive;
