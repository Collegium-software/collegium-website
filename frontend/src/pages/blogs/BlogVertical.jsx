import Button from "../../components/button/Button";
import "./blogvertical.css";

const BlogVertical = (props) => {
  const {
    id,
    image,
    title,
    author,
    description,
    date,
    bttnLabel,
    bttnColor,
    bttnTo,
  } = props;
  const blogElements = {
    id: id,
    image: image,
    title: title,
    author: author,
    description: description,
    date: date,
    button: {
      label: bttnLabel,
      color: bttnColor,
      to: bttnTo,
    },
  };

  const blogsData = [
    {
      id: blogElements.id,
      image: blogElements.image,
      title: blogElements.title,
      author: blogElements.author,
      description: blogElements.description,
      date: blogElements.date,
      button: {
        label: blogElements.button.label,
        color: blogElements.button.color,
        to: blogElements.button.to,
      },
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
            <div className="blogslist-author">
              <p>Written by:&emsp;{blog.author}</p>
            </div>
            <div className="blogslist-description">
              <p>{blog.description}</p>
            </div>
          </div>
          <div className="blogslist-date-button">
            <p>{blog.date}</p>
            <div className="blogslist-button">
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
    <div className="blogslist-container">
      {blogsData.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogVertical;
