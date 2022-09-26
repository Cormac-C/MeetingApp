import { Row } from "react-bootstrap";

export function AgendaItem({
  title,
  timeEstimate,
  description,
  id,
  setSelected,
}) {
  return (
    <button
      onClick={() => {
        setSelected(id);
        console.log("setting selected", id);
      }}
    >
      <Row className="bg-slate-50 border-solid border-2 rounded border-slate-700 my-2 w-64">
        <h3 className="text-slate-700 text-left mt-2">{title}</h3>
        <p className="text-slate-500 text-left mb-2">{timeEstimate}</p>
      </Row>
    </button>
  );
}
