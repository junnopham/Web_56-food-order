import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import food2 from "../assets/images/food-2.jpeg";
import food3 from "../assets/images/food-3.jpeg";
import food4 from "../assets/images/food-4.jpeg";
import food5 from "../assets/images/food-5.jpeg";
import food6 from "../assets/images/food-6.jpeg";
import food7 from "../assets/images/food-7.jpeg";
import food8 from "../assets/images/food-8.jpeg";
import food9 from "../assets/images/food-9.jpeg";

const images = [food2, food3, food4, food5, food6, food7, food8, food9];

const Home = () => {
  return (
    <>
      <div
        className="slider"
        style={{
          position: "relative",
        }}
      >
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          effect={"fade"}
          loop={true}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={"image" + index}>
                <img src={image} alt="img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          style={{
            position: "absolute",
            zIndex: 999,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          }}
        >
          <div
            className="text-white fw-bolder fs-3"
            style={{
              textShadow: "2px 2px #000",
              userSelect: "none",
            }}
          >
            <span>Food is our common ground,</span>
            <br />
            <span>a universal experience.</span>
          </div>
          <div className="input-group mt-1">
            <input
              type="text"
              className="form-control"
              placeholder="Search.."
              aria-label="Search.."
              aria-describedby="search"
            />
            <button className="btn btn-primary" type="button" id="search">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
