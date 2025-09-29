"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HeroCarousel.css";
import Image from "next/image";

export default function HeroCarousel() {
  const images = [
    {
      id: 0,
      src: "/carousel/Tank.jpg",
      title: "Tank",
      des: "APC BTR 80 8 wheel",
    },
    {
      id: 1,
      src: "/carousel/MBT.jpg",
      title: "Tank",
      des: "Tank MBT",
    },
    {
      id: 2,
      src: "/carousel/marcedez.jpg",
      title: "Truck",
      des: "Mercedez Benz Truck",
    },
    {
      id: 3,
      src: "/carousel/army 4.webp",
      title: "Helicopter",
      des: "Military Helicopter",
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <Carousel
        additionalTransform={0}
        ssr={true}
        arrows
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={false}
        className="mx-auto rounded-2xl border-2 border-white max-w-[1440px]"
        containerClass="container"
        dotListClass="custom-dot-list flex gap-1"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((image) => (
          <div className="relative h-full m-auto w-full">
            <Image
              width={1440}
              height={455}
              src={image.src}
              alt={image.title}
              key={image.id}
              className=" h-[455px] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 text-white p-3 rounded-md max-w-xs">
              <h3 className="text-2xl tracking-tight">{image.title}</h3>
              <p className="text-gray-400">{image.des}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
