import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { AgendaItem } from "../components";

export function Sidebar({
  agendaItems,
  setSelectedAgendaItemId,
  userType,
  setUserType,
}) {
  console.log(userType, "user type");

  const handleChangeUserType = (val) => {
    console.log(val, "value");
    console.log("handle user change", userType);
    setUserType(val);
  };
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
      <ToggleButtonGroup
        type="radio"
        name="userTypes"
        value={userType}
        onChange={handleChangeUserType}
      >
        <ToggleButton id="tbg-btn-1" value={1}>
          Presenter
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={0}>
          Attendee
        </ToggleButton>
      </ToggleButtonGroup>
    </Menu>
  );
}
