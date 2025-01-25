import React, { useState, useEffect } from "react";
import { SubmitForm } from "../api/axios";

const BookingForm = () => {
  const [unavailableDates, setUnavailableDates] = useState([]);

  const roomPaymentAmounts = {
    "Deluxe Double Studio": 150,
    "Deluxe Suite": 100,
    "Superior Suite": 200,
  };

  const roomLimits = {
    "Deluxe Double Studio": 3,
    "Deluxe Suite": 2,
    "Superior Suite": 4,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roomType: "",
    numberOfGuests: 1,
    arrivalDate: "",
    arrivalTime: "",
    departureDate: "",
    paymentRequired: false,
    paymentMethod: "",
    paymentInfo: "",
    paymentAmount: 0, // Store payment amount
  });

  useEffect(() => {
    if (formData.roomType) {
      // Set the number of guests to the max allowed for the selected room type
      const maxGuests = roomLimits[formData.roomType];
      if (formData.numberOfGuests > maxGuests) {
        setFormData((prevData) => ({
          ...prevData,
          numberOfGuests: maxGuests,
        }));
      }
      // Set the fixed payment amount for the selected room type
      const newPaymentAmount = roomPaymentAmounts[formData.roomType];
      setFormData((prevData) => ({
        ...prevData,
        paymentAmount: newPaymentAmount,
      }));
    }
  }, [formData.roomType, formData.numberOfGuests]);

  useEffect(() => {
    // Calculate the payment amount based on the duration of stay
    if (formData.arrivalDate && formData.departureDate) {
      const arrival = new Date(formData.arrivalDate);
      const departure = new Date(formData.departureDate);
      const timeDiff = departure - arrival;
      const days = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days

      if (days > 0) {
        // Update paymentAmount based on the number of days
        const roomRate = roomPaymentAmounts[formData.roomType];
        setFormData((prevData) => ({
          ...prevData,
          paymentAmount: roomRate * days,
        }));
      }
    }
  }, [formData.arrivalDate, formData.departureDate, formData.roomType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
      paymentMethod: checked ? "Credit Card" : "",
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);

  //   if (
  //     formData.paymentRequired &&
  //     formData.paymentMethod !== "Cash" &&
  //     !formData.paymentInfo
  //   ) {
  //     alert("Please provide payment details.");
  //     return;
  //   }
  //   // Send the booking data to backend
  //   try {
  //     const response = await SubmitForm(formData);
  //     if (response.success) {
  //       alert("Booking submitted successfully!");
  //       // Optionally, reset form or redirect
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phoneNumber: "",
  //         roomType: "",
  //         numberOfGuests: 1,
  //         arrivalDate: "",
  //         arrivalTime: "",
  //         departureDate: "",
  //         paymentRequired: false,
  //         paymentMethod: "",
  //         paymentInfo: "",
  //         paymentAmount: 0, // Reset payment amount
  //       });
  //     } else {
  //       alert("Error submitting the booking. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("There was an error submitting your booking.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the arrival date is unavailable
    if (isDateUnavailable(formData.arrivalDate)) {
      alert(
        "The selected arrival date is already booked. Please choose another date."
      );
      return;
    }

    // Check if the departure date is unavailable
    if (isDateUnavailable(formData.departureDate)) {
      alert(
        "The selected departure date is already booked. Please choose another date."
      );
      return;
    }

    if (
      formData.paymentRequired &&
      formData.paymentMethod !== "Cash" &&
      !formData.paymentInfo
    ) {
      alert("Please provide payment details.");
      return;
    }

    try {
      const response = await SubmitForm(formData);
      if (response.success) {
        alert("Booking submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          roomType: "",
          numberOfGuests: 1,
          arrivalDate: "",
          arrivalTime: "",
          departureDate: "",
          paymentRequired: false,
          paymentMethod: "",
          paymentInfo: "",
          paymentAmount: 0,
        });
      } else {
        alert("Error submitting the booking. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your booking.");
    }
  };

  useEffect(() => {
    if (formData.roomType) {
      // Fetch unavailable dates for the selected room type
      fetchUnavailableDates(formData.roomType);
    }
  }, [formData.roomType]);

  const fetchUnavailableDates = async (roomType) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/check-availability/${roomType}`
      );

      // Check if the response is valid (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Try to parse the response as JSON
      const data = await response.json();

      // If the response doesn't contain 'unavailableDates', log it
      if (!data.unavailableDates) {
        throw new Error("Response is missing unavailableDates");
      }

      setUnavailableDates(data.unavailableDates);
    } catch (error) {
      console.error("Error fetching unavailable dates:", error);
      alert(
        "There was an issue fetching the unavailable dates. Please try again later."
      );
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
  
    // If the user selects a booked date, reset it back to empty
    if (isDateUnavailable(value)) {
      alert("The selected date is booked. Please choose another date.");
      setFormData({
        ...formData,
        [name]: "", // Reset the date field
      });
      return;
    }
  
    // If the selected date is available, update the form data as usual
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const isDateUnavailable = (date) => {
    return unavailableDates.some((unavailableDate) => {
      const arrival = new Date(unavailableDate.arrivalDate);
      const departure = new Date(unavailableDate.departureDate);
      const selectedDate = new Date(date);
      return selectedDate >= arrival && selectedDate <= departure;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Book Now at AEON Tower
        </h1>

        {/* Name Fields */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-medium mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-medium mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Room Type & Guests */}
        <div className="mb-4">
          <label
            htmlFor="roomType"
            className="block text-gray-700 font-medium mb-2"
          >
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a Room</option>
            <option value="Deluxe Double Studio">Deluxe Double Studio</option>
            <option value="Deluxe Suite">Deluxe Suite</option>
            <option value="Superior Suite">Superior Suite</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="numberOfGuests"
            className="block text-gray-700 font-medium mb-2"
          >
            Number of Guests (Max: {roomLimits[formData.roomType]})
          </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            max={roomLimits[formData.roomType] || 1} // Set the max number of guests based on room type
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Payment Amount Display */}
        <div className="mb-4">
          <label
            htmlFor="paymentAmount"
            className="block text-gray-700 font-medium mb-2"
          >
            Total Payment Amount: ${formData.paymentAmount}
          </label>
        </div>

        {/* Dates */}
        <div className="mb-4">
  <label htmlFor="arrivalDate" className="block text-gray-700 font-medium mb-2">
    Arrival Date
  </label>
  <input
    type="date"
    id="arrivalDate"
    name="arrivalDate"
    value={formData.arrivalDate}
    onChange={handleDateChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
    disabled={isDateUnavailable(formData.arrivalDate)}
    style={{
      backgroundColor: isDateUnavailable(formData.arrivalDate) ? 'red' : 'white',
    }}
  />
  {isDateUnavailable(formData.arrivalDate) && (
    <>
      <p className="text-red-600 text-sm mt-1">Date Booked</p>
      <button
        type="button"
        className="text-blue-500 mt-2"
        onClick={() => setFormData({ ...formData, arrivalDate: "" })}
      >
        Re-pick Arrival Date
      </button>
    </>
  )}
</div>

        <div className="mb-4">
          <label
            htmlFor="arrivalTime"
            className="block text-gray-700 font-medium mb-2"
          >
            Arrival Time
          </label>
          <input
            type="time"
            id="arrivalTime"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
  <label htmlFor="departureDate" className="block text-gray-700 font-medium mb-2">
    Departure Date
  </label>
  <input
    type="date"
    id="departureDate"
    name="departureDate"
    value={formData.departureDate}
    onChange={handleDateChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
    disabled={isDateUnavailable(formData.departureDate)}
    style={{
      backgroundColor: isDateUnavailable(formData.departureDate) ? 'red' : 'white',
    }}
  />
  {isDateUnavailable(formData.departureDate) && (
    <>
      <p className="text-red-600 text-sm mt-1">Date Booked</p>
      <button
        type="button"
        className="text-blue-500 mt-2"
        onClick={() => setFormData({ ...formData, departureDate: "" })}
      >
        Re-pick Departure Date
      </button>
    </>
  )}
</div>

        {/* Payment Option */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="paymentRequired"
              checked={formData.paymentRequired}
              onChange={handlePaymentChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Require Payment Now</span>
          </label>
        </div>

        {/* Payment Section */}
        {formData.paymentRequired && (
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 font-medium mb-2"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>

              <option value="GCash">GCash</option>
            </select>
          </div>
        )}

        {/* Payment Info */}
        {formData.paymentMethod === "Credit Card" && (
          <div className="mb-4">
            <label
              htmlFor="paymentInfo"
              className="block text-gray-700 font-medium mb-2"
            >
              Credit Card Number
            </label>
            <input
              type="text"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your credit card number"
              required
            />
          </div>
        )}

        {formData.paymentMethod === "PayPal" && (
          <div className="mb-4">
            <label
              htmlFor="paymentInfo"
              className="block text-gray-700 font-medium mb-2"
            >
              PayPal Email
            </label>
            <input
              type="email"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your PayPal email"
              required
            />
          </div>
        )}

        {formData.paymentMethod === "GCash" && (
          <div className="mb-4">
            <label
              htmlFor="paymentInfo"
              className="block text-gray-700 font-medium mb-2"
            >
              GCash Number
            </label>
            <input
              type="text"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your GCash number"
              required
            />
          </div>
        )}

        {formData.paymentMethod === "Maya" && (
          <div className="mb-4">
            <label
              htmlFor="paymentInfo"
              className="block text-gray-700 font-medium mb-2"
            >
              Maya Number
            </label>
            <input
              type="text"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Maya number"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {formData.paymentRequired
            ? "Pay and Submit Booking"
            : "Submit Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
