import React from "react";
import "../stylesheets/banner.css";
const Banner = () => {
  return (
    <div className="image-with-search">
      <input type="text" placeholder="Search" className="search-bar" />
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Image"
        className="image"
      />
    </div>
  );
};

export default Banner;
