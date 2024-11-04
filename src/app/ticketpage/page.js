'use client';

import { useState } from "react";

const TicketPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Code to create a ticket in the backend (e.g., AWS Amplify API)
    console.log("Ticket Created", { title, description, priority, severity });
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default TicketPage;
