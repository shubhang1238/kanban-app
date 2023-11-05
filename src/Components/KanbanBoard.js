import React, { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import GroupingOptions from "./GroupingOptions";
import SortingOptions from "./SortingOptions";
import api from "../data/api";

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  useEffect(() => {
    // Fetch data from the API when the component mounts
    api.fetchData().then((data) => {
      setTickets(data);
    });
  }, []);

  // Implement sorting and grouping functions here

  return (
    <div className="kanban-board">
      <GroupingOptions grouping={grouping} setGrouping={setGrouping} />
      <SortingOptions sorting={sorting} setSorting={setSorting} />
      <div className="ticket-cards">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
