import { Row, Col, Button, Card, Form, CloseButton } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export function EditAgendaItem({
  title,
  timeEstimate,
  description,
  id,
  handleEdit,
  handleDelete,
}) {
  const [workingTitle, setWorkingTitle] = useState(title);
  const [workingTimeEstimate, setWorkingTimeEstimate] = useState(timeEstimate);
  const [workingDescription, setWorkingDescription] = useState(description);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setWorkingTitle(e.target.value);
  };

  const handleEstimateChange = (e) => {
    e.preventDefault();
    setWorkingTimeEstimate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setWorkingDescription(e.target.value);
  };

  const handleCancel = () => {
    setWorkingTitle(title);
    setWorkingTimeEstimate(timeEstimate);
    setWorkingDescription(description);
  };

  return (
    <Card className="w-3/5 p-4 my-8 mx-auto">
      <CloseButton
        className="ml-auto"
        aria-label="Hide"
        onClick={(e) => handleDelete(e, id)}
      />
      <Form className="text-left space-y-2">
        <Form.Label>Name</Form.Label>
        <Form.Control value={workingTitle} onChange={handleTitleChange} />
        <Form.Label>Time Estimate</Form.Label>
        <Form.Control
          value={workingTimeEstimate}
          onChange={handleEstimateChange}
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={workingDescription}
          onChange={handleDescriptionChange}
        />
        <Row className="flex-row pt-4 text-center">
          <Col>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              type="submit"
              onClick={(e) =>
                handleEdit(
                  e,
                  workingTitle,
                  workingTimeEstimate,
                  workingDescription,
                  id
                )
              }
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
