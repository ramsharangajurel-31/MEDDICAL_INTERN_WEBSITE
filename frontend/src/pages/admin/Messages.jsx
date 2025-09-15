import React, { useState, useEffect } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("https://meddical-intern-website.onrender.com/api/contact");
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="messages-page">
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="messages-list">
          {messages.map((msg) => (
            <li key={msg._id} className="message-item">
              <div className="message-header">
                <strong>{msg.name}</strong> ({msg.email}) - <em>{msg.subject}</em>
                <span className="message-date">{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
              <p className="message-body">{msg.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messages;
