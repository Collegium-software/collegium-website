import BlogOne from "./BlogOne";
import BlogsHero from "./BlogsHero";
// import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import BlogsList from "./BlogsList";
import BlogFive from "./BlogFive";
import SFooter from "../../components/footer/SFooter";
const Blogs = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "#0A253B";
  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  return (
    <div>
      <Navbar background="#0A253B" color="white" />
      <BlogsHero />
      <BlogOne />
      <div style={{ marginTop: "5vw" }}>
        <BlogsList />
      </div>

      <BlogFive />
      <SFooter />
    </div>
  );
};

export default Blogs;
