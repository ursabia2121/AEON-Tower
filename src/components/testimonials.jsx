import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Guests Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80">
            <p className="text-gray-600 italic mb-4">
              "I like the proximity to the supermarket & the mall. Room is
              clean, spacious, and well-appointed. Staff are very professional,
              helpful, and available. Angielyn, receptionist, and King,
              breakfast, are super nice and made my stay very pleasant. Will
              stay again in the future."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="path/to/angel-avatar.jpg" // Replace with actual image URL
                alt="Angel"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Angel</h4>
                <p className="text-gray-500">United States of America</p>
                <p className="text-yellow-400">8.0/10</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80">
            <p className="text-gray-600 italic mb-4">
              "Facilities were excellent, staff was amazing. Amenities were also
              great. Nice location. Definitely would stay here again, it's much
              better than all others in the area that I've stayed in. Free
              breakfast and easy to access the pool. The room could have been a
              little cleaner, and I got a deal to have the 1br for the studio
              price, but they still gave me a studio."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="path/to/anthony-avatar.jpg" // Replace with actual image URL
                alt="Anthony"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Anthony</h4>
                <p className="text-gray-500">United States of America</p>
                <p className="text-yellow-400">9.0/10</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80">
            <p className="text-gray-600 italic mb-4">
              "The room was well designed and comfortable. The building though
              needs to be completed. It seems unfinished? I like the room but
              not what is outside. They should fix the elevator for the
              residents and not let the residents use the spare lift."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="path/to/ignacito-avatar.jpg" // Replace with actual image URL
                alt="Ignacito"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Ignacito</h4>
                <p className="text-gray-500">Philippines</p>
                <p className="text-yellow-400">9.0/10</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80">
            <p className="text-gray-600 italic mb-4">
              "I like the location, just side of Abreeza. The building is really
              designed for luxury hotel, Room is so big and bed, Sofa so nice
              and so clean!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="path/to/honglun-avatar.jpg" // Replace with actual image URL
                alt="Honglun"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Honglun</h4>
                <p className="text-gray-500">China</p>
                <p className="text-yellow-400">10/10</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80">
            <p className="text-gray-600 italic mb-4">
              "The room is clean. The amenities make my stay more enjoyable. The
              staff are friendly. The food is satisfying. And to top it all, it
              is just a 15-minute away from the airport. It is my third time
              choosing to stay here and they never disappoint me. It is a home
              away from home."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="path/to/celedonia-avatar.jpg" // Replace with actual image URL
                alt="Celedonia"
                className="rounded-full w-12 h-12 object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Celedonia</h4>
                <p className="text-gray-500">Philippines</p>
                <p className="text-yellow-400">9.0/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
