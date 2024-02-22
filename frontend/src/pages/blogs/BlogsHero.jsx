import "./blogshero.css";
import blogsHero from "../../images/blogs/blogs-hero.jpg";

const BlogsHero = () => {
  return (
    <div>
      <div className="blogs-hero">
        <img src={blogsHero} alt="blogs-hero" />
        <div className="blogs-hero-text">
          <div className="blogs-route">
            <p>Home/Blogs</p>
          </div>
          <div className="blogs-title">
            <h2>Blogs</h2>
          </div>
          <div className="blogs-subtitle">
            <p>Insights and Updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
