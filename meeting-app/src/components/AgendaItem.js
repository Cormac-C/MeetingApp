import { Container, Row } from "react-bootstrap"


export function AgendaItem ({title, timeEstimate, description}) {
    return (
        <Row 
            className="bg-slate-50 border-solid border-2 rounded border-slate-700 my-2"
        >
            <h3 className="text-slate-700 text-left mt-2">{title}</h3>
            <p className="text-slate-500 text-left mb-2">{timeEstimate}</p>
            {/* <p className="text-base text-slate-700 text-left mb-2">{description}</p> */}
        </Row>
    );
}  