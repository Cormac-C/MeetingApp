import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AttendeeView } from "./pages";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [agendaItems, setAgendaItems] = useState([]);
  const sampleAgendaItems = [
    {
      title: "Introduction",
      timeEstimate: "5 min",
      description: "This is a description of an investor meeting introduction",
      id: uuid(),
    },
    {
      title: "Team Updates",
      timeEstimate: "10 min",
      description: "Meet the new coop student.",
      id: uuid(),
    },
    {
      title: "Product Roadmap",
      timeEstimate: "20 min",
      description: "This is a description of an investor meeting roadmap",
      id: uuid(),
    },
    {
      title: "Sales Plan",
      timeEstimate: "20 min",
      description: "This is a description of an investor meeting sales plan",
      id: uuid(),
    },
    {
      title: "Team Updates",
      timeEstimate: "10 min",
      description: "Meet the new coop student.",
      id: uuid(),
    },
    {
      title: "Product Roadmap",
      timeEstimate: "20 min",
      description: "This is a description of an investor meeting roadmap",
      id: uuid(),
    },
    {
      title: "Sales Plan",
      timeEstimate: "20 min",
      description: "This is a description of an investor meeting sales plan",
      id: uuid(),
    },
  ];

  useEffect(() => {
    setAgendaItems(sampleAgendaItems);
  }, []);

  return <div className="App">{AttendeeView(agendaItems)}</div>;
}

export default App;
