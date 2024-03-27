// ImageList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogtest.css";

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blogsPics");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Blog Data</h2>
      <div className="image-list" style={{ color: "black" }}>
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <p>Blog ID: {image.id}</p>
            <p>Title: {image.title}</p>
            <p>Author: {image.author}</p>
            <p>Description: {image.description}</p>
            <img
              src={`data:image/jpeg;base64,${image.image}`}
              alt={`Image ${index}`}
            />
            <p>Date: {image.date}</p>
            <p>Button Label: {image.button.label}</p>
            <p>Button Color: {image.button.color}</p>
            <p>Button link: {image.button.to}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
