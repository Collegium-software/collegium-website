import "./blogshero.css";
import blogsHero from "../../images/blogs/blogs-hero.jpg";

const BlogsHero = (props) => {
  const { route, title, subtitle, image } = props;
  const blogsheroElements = {
    image: image || blogsHero,
    route: route || "Home/Blogs",
    title: title || "Blogs",
    subtitle: subtitle || "Insights and Updates",
  };
  return (
    <div>
      <div className="blogs-hero">
        <img src={blogsheroElements.image} alt="blogs-hero" />
        <div className="blogs-hero-text">
          <div className="blogs-route">
            <p>{blogsheroElements.route}</p>
          </div>
          <div className="blogs-title">
            <h2>{blogsheroElements.title}</h2>
          </div>
          <div className="blogs-subtitle">
            <p>{blogsheroElements.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
