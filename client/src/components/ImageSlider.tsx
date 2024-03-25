
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  return (
    <div className="w-full ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper border w-full"
      >
        {images.map((singleImage) => (
          <SwiperSlide>
            {" "}
            <img
              src={singleImage}
              alt="image_slider"
              className="h-vh90 w-full object-cover object-center "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
