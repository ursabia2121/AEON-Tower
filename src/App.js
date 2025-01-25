// import React, { useState } from "react";
// import Navbar from "./components/nav_var";
// import LandingPage from "./components/home_page";
// import RoomsPage from "./components/room_page";
// import AboutUs from "./components/about_us";
// import Footer from "./components/footer";
// import Testimonials from "./components/testimonials";
// import GalleryPage from "./components/gallery_page";
// import Maps from "./components/maps";
// import Chat from "./components/chat";

// const App = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [unreadMessages, setUnreadMessages] = useState(0);

//   const handleNewMessage = (count) => {
//     if (!isChatOpen) {
//       setUnreadMessages(count);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <LandingPage />
//       <RoomsPage />
//       <AboutUs />
//       <GalleryPage />
//       <Maps />
//       <Testimonials />
//       <Footer />

//       {/* Chat Widget */}
//       <div className="fixed bottom-4 right-4">
//         {isChatOpen && (
//           <div className="relative w-80 h-96 bg-white shadow-2xl rounded-lg border border-gray-200">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsChatOpen(false)}
//               className="absolute top-3 right-3 text-gray-100 hover:text-gray-800 transition duration-300"
//               aria-label="Close Chat"
//             >
//               ✖
//             </button>

//             {/* Chat Component */}
//             <Chat onNewMessage={handleNewMessage} />
//           </div>
//         )}

//         {!isChatOpen && (
//           <button
//             onClick={() => {
//               setIsChatOpen(true);
//               setUnreadMessages(0);
//             }}
//             className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             Talk to us!
//             {unreadMessages > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
//                 {unreadMessages}
//               </span>
//             )}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import Navbar from "./components/nav_var";
import LandingPage from "./components/home_page";
import RoomsPage from "./components/room_page";
import AboutUs from "./components/about_us";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import GalleryPage from "./components/gallery_page";
import Maps from "./components/maps";
import Chat from "./components/chat";
import io from "socket.io-client"; // Import socket.io-client

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [socket, setSocket] = useState(null); // To store socket instance

  // Initialize socket connection globally when the app loads
  useEffect(() => {
    const socketInstance = io("http://localhost:5000"); // Connect to the server
    setSocket(socketInstance);
    
    socketInstance.on("message", (data) => {
      // Handle message received globally
      console.log("Received message:", data);
      setUnreadMessages((prev) => prev + 1);
    });

    return () => {
      socketInstance.disconnect(); // Clean up socket connection on unmount
    };
  }, []);

  const handleNewMessage = (count) => {
    if (!isChatOpen) {
      setUnreadMessages(count);
    }
  };

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

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4">
        {isChatOpen && (
          <div className="relative w-80 h-96 bg-white shadow-2xl rounded-lg border border-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-3 right-3 text-gray-100 hover:text-gray-800 transition duration-300"
              aria-label="Close Chat"
            >
              ✖
            </button>

            {/* Chat Component */}
            <Chat socket={socket} onNewMessage={handleNewMessage} />
          </div>
        )}

        {!isChatOpen && (
          <button
            onClick={() => {
              setIsChatOpen(true);
              setUnreadMessages(0); // Reset unread message count when opening chat
            }}
            className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Talk to us!
            {unreadMessages > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
                {unreadMessages}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
