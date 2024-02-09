import "./blogslist.css";
import blog2 from "../../images/blogs/blog2.jpg";
import blog3 from "../../images/blogs/blog3.jpg";
import blog4 from "../../images/blogs/blog4.jpg";
import Button from "../../components/button/Button";
const BlogsList = () => {
  const blogsData = [
    {
      id: 1,
      image: blog2,
      title: "Blog List: Blog 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      date: "July 4, 2023",
      button: <Button label="Learn More" color="black" to="/blogs/blog2" />,
    },
    {
      id: 2,
      image: blog3,
      title: "Blog List: Blog 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      date: "July 4, 2023",
      button: <Button label="Learn More" color="black" to="/blogs/blog3" />,
    },
    {
      id: 3,
      image: blog4,
      title: "Blog List: Blog 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      date: "July 4, 2023",
      button: <Button label="Learn More" color="black" to="/blogs/blog4" />,
    },
  ];
  const Blog = ({ blog }) => {
    return (
      <div className="blogslist-gradient">
        <div className="blogslist-gradient-mask">
          <div className="blogslist-pics">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blogslist-text">
            <div className="blogslist-title">
              <h2>{blog.title}</h2>
            </div>
            <div className="blogslist-description">
              <p>{blog.description}</p>
            </div>
          </div>
          <div className="blogslist-date-button">
            <p>{blog.date}</p>
            <div className="blogslist-boutton">{blog.button}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="blogslist-section">
      <div className="blogslist-container">
        {blogsData.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
