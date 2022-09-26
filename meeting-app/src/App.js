import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AttendeeView, Login } from "./pages";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { PresenterView } from "./pages/PresenterView";

function App() {
  const [meetingTitle, setMeetingTitle] = useState(
    new Date().toString().slice(0, 10) + " Meeting"
  );
  const [userType, setUserType] = useState(1);

  const [agendaItems, setAgendaItems] = useState([
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
  ]);

  return (
    <div className="App">
      {userType === 0 ? (
        <AttendeeView
          meetingTitle={meetingTitle}
          agendaItems={agendaItems}
          userType={userType}
          setUserType={setUserType}
        />
      ) : userType === 1 ? (
        <PresenterView
          meetingTitle={meetingTitle}
          setMeetingTitle={setMeetingTitle}
          agendaItems={agendaItems}
          setAgendaItems={setAgendaItems}
          userType={userType}
          setUserType={setUserType}
        />
      ) : (
        Login(setUserType)
      )}
    </div>
  );
}

export default App;
