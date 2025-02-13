import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import background1 from "./image/pic2.png";
import whatapp from "./image/whatsapp.png";
import background2 from "./image/Sports-Wear-2.jpg";
import background3 from "./image/Street-Wear.jpg";
import SectionTwo from "./sectiontwo/sectiontwo";
import SectionThree from "./sectionthree/sectionthree";
import Four from "./four/four";

const Home = () => {
  // Function to open WhatsApp chat
  const openWhatsAppChat = () => {
    window.open("https://wa.me/+923364272446", "_blank");
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full bg-gradient-to-r from-black to-gray-900">
      <Carousel
  showThumbs={false}
  autoPlay={true}
  infiniteLoop={true}
  showStatus={false}
  className="w-full bg-gradient-to-r from-black to-gray-900"
>
  {[background1, background2, background3].map((image, index) => (
    <div key={index} className="w-full">
      <img
        src={image}
        alt={`Background Slide ${index + 1}`}
        className="w-full h-[80vh] max-h-[900px] min-h-[400px] bg-gradient-to-r from-black to-gray-900"
      />
    </div>
  ))}
</Carousel>

      </div>

      {/* WhatsApp chat icon/button */}
      <div
        className="fixed bottom-5 right-5 z-50 cursor-pointer animate-bounce "
        onClick={openWhatsAppChat}
      >
        <img src={whatapp} alt="WhatsApp" className="w-12 h-12 drop-shadow-lg" />
      </div>

      <br />
      <SectionTwo />
      <SectionThree />
      <Four />
    </>
  );
};

export default Home;
