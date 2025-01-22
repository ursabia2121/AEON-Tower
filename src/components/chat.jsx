import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

const Chat = ({ onNewMessage }) => {
    const [messages, setMessages] = useState([
      { text: "Hi, how are you? How can we help you?", sender: "system" },
    ]);
    const [input, setInput] = useState("");
    const [clientId, setClientId] = useState(""); // Store the client ID
    const [socket, setSocket] = useState(null); // To store the socket instance
  
    useEffect(() => {
      const socketInstance = io("http://localhost:5000"); // Connect to the socket server
      setSocket(socketInstance);
  
      socketInstance.on("message", (data) => {
        console.log("Received message:", data);
  
        // Validate that the text is provided
        if (data?.text) {
          setMessages((prevMessages) => [...prevMessages, { text: data.text, sender: data.sender }]);
        }
      });
  
      socketInstance.emit("user_connected"); // Inform the server that the user has connected
  
      return () => {
        socketInstance.disconnect();
      };
    }, []);
  
    useEffect(() => {
      const fetchMessages = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/chat/${clientId}`);
          setMessages((prevMessages) => [
            ...prevMessages,
            ...response.data.messages,
          ]);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };
  
      if (clientId) {
        fetchMessages();
      }
    }, [clientId]);
  
    const handleSend = () => {
      if (input.trim()) {
        socket.emit("send_message", { clientId, message: String(input) }); // Only emit the message
        setInput(""); // Clear input field
      }
    };
  
    return (
      <div className="flex flex-col w-full h-full bg-gray-100">
        <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
          <h1 className="text-lg font-semibold">Live Chat</h1>
        </div>
  
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text} {/* Render only the text of the message */}
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex items-center p-4 bg-white border-t">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    );
  };
  

export default Chat;
