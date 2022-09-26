import { Container, Form } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { EditAgendaItem, Sidebar } from "../components";

import React, { useState, useEffect } from "react";

export function PresenterView({
  meetingTitle,
  setMeetingTitle,
  agendaItems,
  setAgendaItems,
}) {
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

  const handleTitleChange = (e) => {
    e.preventDefault();
    setMeetingTitle(e.target.value);
  };

  const handleItemEdit = (e, title, timeEstimate, description, id) => {
    e.preventDefault();
    console.log("handling edit save");
    const item = agendaItems.find((item) => item.id === id);
    item.title = title;
    item.timeEstimate = timeEstimate;
    item.description = description;
    setAgendaItems([...agendaItems]);
  };

  const handleItemDelete = (e, id) => {
    e.preventDefault();
    const trimmedAgendaItems = agendaItems.filter((item) => item.id !== id);
    setAgendaItems(trimmedAgendaItems);
  };

  return (
    <div id="outer-container">
      <Sidebar
        agendaItems={agendaItems}
        setSelectedAgendaItemId={setSelectedAgendaItemId}
      />
      <Container id="page-wrap">
        <Form>
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            value={meetingTitle}
            onChange={handleTitleChange}
          />
        </Form>
        {agendaItems &&
          agendaItems.length > 0 &&
          agendaItems.map((item) => {
            return (
              <EditAgendaItem
                title={item.title}
                description={item.description}
                timeEstimate={item.timeEstimate}
                id={item.id}
                handleEdit={handleItemEdit}
                handleDelete={handleItemDelete}
              />
            );
          })}
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
