import "./bloghorizontal.css";
import Button from "../../components/button/Button";
const BlogHorizontal = (props) => {
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
  const HorizontalBlog = ({ hblog }) => {
    return (
      <div className="blogHorizontal">
        <div className="blogHorizontal-text">
          <div className="blogHorizontal-title">
            <h2>{hblog.title}</h2>
          </div>
          <div className="blogHorizontal-author">
            <p>Written by:&emsp; {hblog.author}</p>
          </div>
          <div className="blogHorizontal-description">
            <p>{hblog.description}</p>
          </div>
          <div className="blogHorizontal-date-button">
            <p>{hblog.date}</p>
            <Button
              label={hblog.button.label}
              color={hblog.button.color}
              to={hblog.button.to}
            />
          </div>
        </div>
        <div className="blogHorizontal-pic">
          <img src={hblog.image} alt={hblog.title} />
        </div>
      </div>
    );
  };
  return (
    <div className="blogHorizontal-container">
      {blogsData.map((hblog) => (
        <HorizontalBlog key={hblog.id} hblog={hblog} />
      ))}
    </div>
  );
};

export default BlogHorizontal;
