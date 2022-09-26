import { Container, Row } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { AgendaItem } from "../components";

export function Sidebar({ agendaItems, setSelectedAgendaItemId }) {
  return (
    <Menu
      right
      push
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      {agendaItems &&
        agendaItems.length > 0 &&
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
  );
}
