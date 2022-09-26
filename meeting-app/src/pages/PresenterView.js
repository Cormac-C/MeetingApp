import { Container, Form, Button } from "react-bootstrap";
import { EditAgendaItem, Sidebar } from "../components";
import { v4 as uuid } from "uuid";

import React, { useState, useEffect } from "react";

export function PresenterView({
  meetingTitle,
  setMeetingTitle,
  agendaItems,
  setAgendaItems,
  userType,
  setUserType,
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

  const handleItemAdd = (e) => {
    e.preventDefault();
    agendaItems.push({
      title: "Title",
      timeEstimate: "-",
      description: "Description",
      id: uuid(),
    });
    setAgendaItems([...agendaItems]);
  };

  return (
    <div id="outer-container">
      <Sidebar
        agendaItems={agendaItems}
        setSelectedAgendaItemId={setSelectedAgendaItemId}
        userType={userType}
        setUserType={setUserType}
      />
      <Container id="page-wrap">
        <Form className="w-3/5 mx-auto">
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
        <Button onClick={(e) => handleItemAdd(e)}>Add Agenda Item</Button>
      </Container>
    </div>
  );
}
