import "./bloghorizontal.css";
import Button from "../../components/button/Button";
const BlogHorizontal = (props) => {
  const {
    id,
    title,
    author,
    description,
    image,
    date,
    bttnLabel,
    bttnColor,
    bttnTo,
  } = props;
  const blogElements = {
    id: id,
    title: title,
    author: author,
    description: description,
    image: image,
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
      title: blogElements.title,
      author: blogElements.author,
      description: blogElements.description,
      image: blogElements.image,
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
            <p dangerouslySetInnerHTML={{ __html: hblog.description }} />
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
          <img
            src={`data:image/jpeg;base64,${hblog.image}`}
            alt={hblog.title}
          />
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
