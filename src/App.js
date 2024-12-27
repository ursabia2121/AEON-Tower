import React from "react";
import Navbar from "./components/nav_var";
import LandingPage from "./components/home_page";
import RoomsPage from "./components/room_page";
import AboutUs from "./components/about_us";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import GalleryPage from "./components/gallery_page";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <RoomsPage />
      <AboutUs />
      <GalleryPage />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
