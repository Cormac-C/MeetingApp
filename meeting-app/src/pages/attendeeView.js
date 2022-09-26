import { Container } from "react-bootstrap";
import { Sidebar } from "../components";

import React, { useState, useEffect } from "react";

export function AttendeeView({ meetingTitle, agendaItems }) {
  const [selectedAgendaItemId, setSelectedAgendaItemId] = useState();
  const [selectedAgendaItem, setSelectedAgendaItem] = useState();

  useEffect(() => {
    console.log("selected id", selectedAgendaItemId);
    if (agendaItems.length > 0) {
      if (selectedAgendaItemId) {
        setSelectedAgendaItem(
          agendaItems.find((item) => item.id === selectedAgendaItemId)
        );
      } else {
        setSelectedAgendaItem(agendaItems[0]);
      }
    }
  }, [selectedAgendaItemId, agendaItems]);

  return (
    <div id="outer-container">
      <Sidebar
        agendaItems={agendaItems}
        setSelectedAgendaItemId={setSelectedAgendaItemId}
      />
      <Container id="page-wrap">
        <h1>{meetingTitle}</h1>
        <div>
          {selectedAgendaItem ? (
            <>
              <h3>{selectedAgendaItem.title}</h3>
              <h5>{selectedAgendaItem.description}</h5>
            </>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
}
