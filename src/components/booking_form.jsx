import React, { useState } from "react";
import { SubmitForm } from "../api/axios";

const BookingForm = () => {
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
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Ensure payment details are provided if payment is required
    if (formData.paymentRequired && !formData.paymentInfo) {
      alert("Please provide payment details.");
      return;
    }

    // Send the booking data to backend
    try {
      const response = await SubmitForm(formData);
      if (response.success) {
        alert("Booking submitted successfully!");
        // Optionally, reset form or redirect
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
        });
      } else {
        alert("Error submitting the booking. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your booking.");
    }
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
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
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
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Contact Number</label>
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
            Number of Guests
          </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Dates */}
        <div className="mb-4">
          <label
            htmlFor="arrivalDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Arrival Date
          </label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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
          <label
            htmlFor="departureDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="GCash">GCash</option>
              <option value="Maya">Maya</option>
            </select>
          </div>
        )}

        {/* Payment Info - dynamically show based on selected payment method */}
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
              GCash Phone Number
            </label>
            <input
              type="text"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your GCash phone number"
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
              Maya Phone Number
            </label>
            <input
              type="text"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Maya phone number"
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
