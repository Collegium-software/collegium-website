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
  if (sortedBlogs.length < 5) {
    bottomBlog = false;
  }

  return (
    <div>
      <Navbar background="#0a253b" color="white" />
      <BlogsHero />
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
      <div className="myBlogsList">
        {sortedBlogs.slice(1, 4).map((blog, index) => (
          <div key={index} className="cover-container">
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
          </div>
        ))}
      </div>
      {bottomBlog && (
        <BlogHorizontal
          id={sortedBlogs[sortedBlogs.length - 1].id}
          image={sortedBlogs[sortedBlogs.length - 1].image}
          title={sortedBlogs[sortedBlogs.length - 1].title}
          description={sortedBlogs[sortedBlogs.length - 1].description}
          date={sortedBlogs[sortedBlogs.length - 1].date}
          bttnLabel={sortedBlogs[sortedBlogs.length - 1].button.label}
          bttnColor={sortedBlogs[sortedBlogs.length - 1].button.color}
          bttnTo={sortedBlogs[sortedBlogs.length - 1].button.to}
        />
      )}
      <SFooter />
    </div>
  );
};

export default Blogs;
