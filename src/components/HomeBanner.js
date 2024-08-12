import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import top10 from "../assets/top10Image.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiRestartLine } from "react-icons/ri";

const HomeBanner = () => {
  const mainBanner = useSelector((state) => state.skibidiflixData.bannerData);
  const imageURL = useSelector((state) => state.skibidiflixData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < mainBanner.length - 1) {
      setCurrentImage((preve) => preve + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === 9) {
        setCurrentImage(0);
      } else if (currentImage < mainBanner.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [mainBanner, imageURL, currentImage]);

  console.log("mainBanner", mainBanner);
  return (
    <section className="w-full h-full relative select-none">
      <div className="flex min-h-full max-h-[100vh] relative overflow-hidden">
        {mainBanner.map((data, rank = 0) => {
          rank++;
          return (
            <>
              <div
                className="min-w-full min-h-full overflow-hidden 
            relative group transition-all duration-500"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img
                  src={imageURL + "/" + data.backdrop_path}
                  className="h-full w-full object-cover justify-between relative"
                />

                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

                <div className="container">
                  <div className="w-full h-[70vh] absolute bottom-0 ms-16">
                    <div className="max-w-2xl">
                      <div className="flex gap-4 items-center">
                        <p className="font-bold text-red-600 text-6xl drop-shadow-2xl">
                          S
                        </p>
                        <p className="font-bold text-2xl text-neutral-400 mt-2 drop-shadow-2xl">
                          S E R I E S
                        </p>
                      </div>
                      <p className="font-bold text-6xl text-white drop-shadow-2xl text-left ms-8 font-archivo ">
                        {data?.title || data?.name}
                      </p>
                      <div>
                        <div className="w-full flex mt-4">
                          <img src={top10} className="rounded scale-110" />
                          <p className="font-bold text-3xl text-white drop-shadow-2xl text-center ms-4">
                            #{rank} in{" "}
                            {data.media_type === "movie"
                              ? "Movies"
                              : "TV Shows"}{" "}
                            Today
                          </p>
                        </div>
                        <p className="text-2xl text-white drop-shadow-3xl line-clamp-2 mt-4">
                          {data.overview}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-between">
                      <div className="flex gap-4">
                        <div className="w-fit h-[10vh] flex items-center">
                          <button
                            className="flex px-10 py-3 bg-white rounded mt-8 hover:bg-white/70 transition-all"
                            onClick={() => console.log("Play Movie")}
                          >
                            <FaPlay className="text-black text-3xl" />
                            <p className="h-full text-black text-2xl ms-2 font-semibold">
                              Play
                            </p>
                          </button>
                        </div>
                        <div className="w-fit h-[10vh] flex items-center">
                          <button
                            className="flex px-5 py-2.5 bg-neutral-400/40 rounded mt-8 hover:bg-white/10 transition-all items-center"
                            onClick={() => console.log("More Info")}
                          >
                            <IoIosInformationCircleOutline className="text-white text-4xl font-bold" />
                            <p className="text-white font-semibold text-2xl ms-2">
                              More Info
                            </p>
                          </button>
                        </div>
                      </div>
                      <div className="w-fit h-fit flex me-16 items-center mt-6">
                        <button
                          className="bg-transparent rounded-full border p-1 me-5"
                          onClick={() => console.log("Replay")}
                        >
                          <RiRestartLine className="text-white text-4xl" />
                        </button>
                        <div className="w-full py-3 bg-neutral-800/40 border-s-2">
                          <p className="text-white me-6 ms-4 text-xl">
                            {data.adult === true
                              ? "Adult Only"
                              : "For Everyone"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default HomeBanner;
