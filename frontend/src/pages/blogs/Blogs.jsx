import BlogsHero from "./BlogsHero";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import BlogHorizontal from "./BlogHorizontal";
import BlogVertical from "./BlogVertical";

import "./blogs.css";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(blogsData);
  if (loading) {
    return <div>Loading...</div>;
  }
  const sortedBlogs = blogsData
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(sortedBlogs);
  let bottomBlog = true;
  let blogAvailable = true;
  let zeroBlog = false;
  let vToH = false;
  let vBlog = true;
  if (sortedBlogs.length < 5) {
    bottomBlog = false;
  }
  if (sortedBlogs.length === 0) {
    blogAvailable = false;
    zeroBlog = true;
  }
  if (sortedBlogs.length === 2) {
    vToH = true;
    vBlog = false;
  }
  return (
    <div>
      <Navbar background="#0a253b" color="white" />
      <BlogsHero />
      {zeroBlog && (
        <div className="no-blog">
          <h4>
            Sorry! no blog to display at the moment. Please visit the page
            later.
          </h4>
        </div>
      )}
      {blogAvailable && (
        <BlogHorizontal
          id={sortedBlogs[0].id}
          image={sortedBlogs[0].image}
          title={sortedBlogs[0].title}
          author={sortedBlogs[0].author}
          description={sortedBlogs[0].description}
          date={sortedBlogs[0].date}
          bttnLabel={sortedBlogs[0].button.label}
          bttnColor={sortedBlogs[0].button.color}
          bttnTo={sortedBlogs[0].button.to}
        />
      )}
      <div className="myBlogsList">
        {sortedBlogs.slice(1, 4).map((blog, index) => (
          <div key={index} className="cover-container">
            {blogAvailable && vBlog && (
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
            )}
          </div>
        ))}
      </div>
      {blogAvailable && vToH && (
        <BlogHorizontal
          id={sortedBlogs[1].id}
          image={sortedBlogs[1].image}
          title={sortedBlogs[1].title}
          author={sortedBlogs[1].author}
          description={sortedBlogs[1].description}
          date={sortedBlogs[1].date}
          bttnLabel={sortedBlogs[1].button.label}
          bttnColor={sortedBlogs[1].button.color}
          bttnTo={sortedBlogs[1].button.to}
        />
      )}

      {bottomBlog && blogAvailable && (
        <BlogHorizontal
          id={sortedBlogs[4].id}
          image={sortedBlogs[4].image}
          title={sortedBlogs[4].title}
          author={sortedBlogs[4].author}
          description={sortedBlogs[4].description}
          date={sortedBlogs[4].date}
          bttnLabel={sortedBlogs[4].button.label}
          bttnColor={sortedBlogs[4].button.color}
          bttnTo={sortedBlogs[4].button.to}
        />
      )}
      <div className="all-blogs-button">
        <Button label="See all blogs" color="black" to="/blogs/all-blogs" />
      </div>
      <SFooter />
    </div>
  );
};

export default Blogs;
