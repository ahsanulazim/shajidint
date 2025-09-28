"use client";
import Carousel from "react-multi-carousel";

export default function LogoMarquee() {
  const logos = [
    { id: 0, src: "/enlistments/enlistments (1).png", alt: "SKS" },
    { id: 1, src: "/enlistments/enlistments (2).png", alt: "BOF" },
    { id: 2, src: "/enlistments/enlistments (3).png", alt: "CMTD" },
    { id: 3, src: "/enlistments/enlistments (4).png", alt: "DGDP" },
    { id: 4, src: "/enlistments/enlistments (5).png", alt: "MES" },
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      centerMode={false}
      className="w-full"
      containerClass="container-with-dots"
      dotListClass=""
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
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex flex-col gap-y-2 items-center justify-center transition duration-300"
        >
          <img src={logo.src} alt={logo.alt} className="h-20" />
          <div className="badge badge-success badge-outline">{logo.alt}</div>
        </div>
      ))}
    </Carousel>
  );
}
