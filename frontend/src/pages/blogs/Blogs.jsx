import BlogsHero from "./BlogsHero";
import Navbar from "../../components/navbar/Navbar";
import SFooter from "../../components/footer/SFooter";
import BlogHorizontal from "./BlogHorizontal";
import BlogVertical from "./BlogVertical";

import "./blogs.css";
import { useEffect, useState } from "react";
const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/blogs");
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
  if (sortedBlogs.length < 5) {
    bottomBlog = false;
  }
  if (sortedBlogs.length === 0) {
    blogAvailable = false;
    zeroBlog = true;
  }
  return (
    <div>
      <Navbar background="#0a253b" color="white" />
      <BlogsHero />
      {zeroBlog && (
        <div className="no-blog">
          <h4>
            Sorry, no blog to display at the moment. Please visit the page
            later.
          </h4>
        </div>
      )}
      {blogAvailable && (
        <BlogHorizontal
          id={sortedBlogs[0].id}
          image={sortedBlogs[0].image}
          title={sortedBlogs[0].title}
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
            {blogAvailable && (
              <BlogVertical
                id={blog.id}
                image={blog.image}
                title={blog.title}
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
      {bottomBlog && blogAvailable && (
        <BlogHorizontal
          id={sortedBlogs[4].id}
          image={sortedBlogs[4].image}
          title={sortedBlogs[4].title}
          description={sortedBlogs[4].description}
          date={sortedBlogs[4].date}
          bttnLabel={sortedBlogs[4].button.label}
          bttnColor={sortedBlogs[4].button.color}
          bttnTo={sortedBlogs[4].button.to}
        />
      )}
      <SFooter />
    </div>
  );
};

export default Blogs;
