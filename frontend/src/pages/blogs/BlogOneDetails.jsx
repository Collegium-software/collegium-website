import "./blogpagedetails.css";
<<<<<<< HEAD
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import { useEffect, useState } from "react";
import BlogVertical from "./BlogVertical";
import Button from "../../components/button/Button";
const BlogOneDetails = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locationReset = () => {
      window.scrollTo(0, 0);
    };
    locationReset();
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ", ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data: ", data);
        setAllBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const undesiredUrl = "/blogs/blog1";
  const filteredBlogs = allBlogs.filter(
    (blog) => blog.button.to !== undesiredUrl
  );
  if (loading) {
    return <p>Loading...</p>;
  }

=======
import blogoneHero from "../../images/blogs/blogoneHero.png";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
const BlogOneDetails = () => {
>>>>>>> main
  return (
    <div className="blogpagedetails">
      <Navbar background="white" color="black" />
      <div className="blog-hero-pic">
<<<<<<< HEAD
        <img src={allBlogs[0].image} alt={allBlogs[0].title} />
      </div>
      <div className="blogpage-full-article">
        <div className="blogpageFullArticle-title">
          <h2>{allBlogs[0].title}</h2>
          <p>
            <strong>Written by: {allBlogs[0].author}</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{allBlogs[0].date}
          </p>
        </div>
        <div className="blogpageFullArticle-description">
          <p>{allBlogs[0].description}</p>
        </div>
      </div>
      <div className="recent-posts">
        <h1>Other Blogs:</h1>
        <div className="blogs">
          {filteredBlogs.slice(0, 3).map((blog) => (
            <div key={blog.id}>
              <BlogVertical
                id={blog.id}
                image={blog.image}
                title={blog.title}
                author={blog.author}
                description={blog.description}
                date={blog.date}
                bttnLabel={blog.button.label}
                bttnColor={blog.button.color}
                bttnTo={blog.button.to}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="see-more-button">
        <Button label="See more blogs" color="black" to="/blogs/all-blogs" />
      </div>

=======
        <img src={blogoneHero} alt="blogonehero" />
      </div>
      <div className="blogpage-full-article">
        <div className="blogpageFullArticle-title">
          <h2>Finibus Bonorum et Malorum</h2>
          <p>
            <strong>Written by John Doe</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;July 4, 2023
          </p>
        </div>
        <div className="blogpageFullArticle-description">
          <p>
            <strong>
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC
            </strong>
            <br /> <br />
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?" <br />
            <br />
            1914 translation by H. Rackham <br />
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
            <br />
            <br />
            <br />
            <strong>Section 1.10.33 of "de Finibus Bonorum et Malorum" </strong>
            <br />
            <br />
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
            <br />
            <br />
            <br />
            <h2>Section</h2>
            <br />
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
            <br />
            <br />
            <br />
            <strong>Section 1.10.33</strong>
            <br />
            <br /> "At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat." Section
            1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45
            BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        </div>
      </div>
      <div className="recent-posts">
        <h1>RECENT POSTS</h1>
      </div>
>>>>>>> main
      <SFooter />
    </div>
  );
};

export default BlogOneDetails;
