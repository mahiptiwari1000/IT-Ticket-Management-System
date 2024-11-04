import { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const updateTicketStatus = (ticketId, status) => {
    // Update the status of a specific ticket
  };

  return (
    <TicketContext.Provider value={{ tickets, setTickets, selectedTicket, setSelectedTicket, updateTicketStatus }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
