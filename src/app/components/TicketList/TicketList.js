import React from 'react';
import { useTicketContext } from '../context/TicketContext';
import TicketItem from './TicketItem';

const TicketList = () => {
  const { tickets } = useTicketContext();

  return (
    <div>
      <h2>All Tickets</h2>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
