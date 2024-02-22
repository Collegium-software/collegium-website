import "./usHero.css";
import UsersStoriesHero from "../../images/usersStoryPage/calgary-70848_1280.jpg";

const UsHero = () => {
  return (
    <div>
      <div className="us-blogs-hero">
        <img src={UsersStoriesHero} alt="us-blogs-hero" />
        <div className="us-blogs-hero-text">
          <div className="us-blogs-route">
            <p>Home/Users' Stories</p>
          </div>
          <div className="us-blogs-title">
            <h2>Users' Stories</h2>
          </div>
          <div className="us-blogs-subtitle">
            <p>Insights and Updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsHero;