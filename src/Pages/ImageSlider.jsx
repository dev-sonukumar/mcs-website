import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { asset11, bee, bis, epr, isi, tec, wpc } from "../utils/ImportImage";

const ImageSlider = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Image URLs
  const images = [bis, bee, wpc, isi, tec, epr];

  return (
    <div className="bg-[var(--main-color2)]  my-12">
      <div className="relative container mx-auto px-4 py-8 ">
        <img src={asset11} className="absolute left-10 hidden lg:block" />
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Projects
        </h2>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Card Title {index + 1}
                  </h3>
                  <p className="text-gray-600">
                    This is a sample description for the card.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
