import React from "react";
import Navbar from "./components/nav_var";
import LandingPage from "./components/home_page";
import RoomsPage from "./components/room_page";
import AboutUs from "./components/about_us";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import GalleryPage from "./components/gallery_page";
import Maps from "./components/maps";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <RoomsPage />
      <AboutUs />
      <GalleryPage />
      <Maps />
      <Testimonials />
      <Footer />
      
    </div>
  );
};

export default App;


// import React from "react";
// import Routing from "./routing/routes";

// const App = () => {
//   return (
//     <div>
//       <Routing />
//     </div>
//   );
// };

// export default App;

