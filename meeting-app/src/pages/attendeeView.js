import { Container } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { AgendaItem } from "../components";

import React, { useState, useEffect } from "react";

export function AttendeeView(agendaItems) {
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
      <Menu
        right
        push
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        {agendaItems &&
          agendaItems.map((item) => {
            return (
              <AgendaItem
                title={item.title}
                description={item.description}
                timeEstimate={item.timeEstimate}
                id={item.id}
                setSelected={setSelectedAgendaItemId}
              />
            );
          })}
      </Menu>
      <Container id="page-wrap">
        <h1>Meeting Title</h1>
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
