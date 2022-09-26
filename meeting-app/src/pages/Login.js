import React from "react";
import { Container, Button } from "react-bootstrap";

export function Login(setUserType) {
  return (
    <div>
      Login
      <Container>
        What type of user are you?
        <Button
          onClick={() => {
            setUserType(1);
            console.log("setting user as presenter");
          }}
        >
          Presenter
        </Button>
        <Button
          onClick={() => {
            setUserType(0);
            console.log("setting user as attendee");
          }}
        >
          Attendee
        </Button>
      </Container>
    </div>
  );
}
