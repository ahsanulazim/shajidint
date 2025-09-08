'use client'

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./HeroCarousel.css"

export default function HeroCarousel() {

  const images = [
    { src: '/carousel/army 1.webp', alt: 'army 1' },
    { src: '/carousel/army 2.webp', alt: 'army 2' },
    { src: '/carousel/army 3.webp', alt: 'army 3' },
    { src: '/carousel/army 4.webp', alt: 'army 4' },
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
        autoPlaySpeed={1000}
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
        {images.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} className="block h-full m-auto w-full" />
        ))}
      </Carousel>
    </>
  )
}
