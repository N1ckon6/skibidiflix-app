import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const mainBanner = useSelector((state) => state.skibidiflixData.bannerData);
  const imageURL = useSelector((state) => state.skibidiflixData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <section>
      <div>HomeBanner</div>
    </section>
  );
};

export default HomeBanner;
