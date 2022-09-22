import { Container } from "react-bootstrap"
import { slide as Menu } from 'react-burger-menu'
import { AgendaItem } from "../components"


export function AttendeeView () {
    const agendaItems = [
        {
            title: "Introduction",
            timeEstimate: "5 min",
            description: "This is a description of an investor meeting introduction"
        },
        {
            title: "Team Updates",
            timeEstimate: "10 min",
            description: "Meet the new coop student."
        },
        {
            title: "Product Roadmap",
            timeEstimate: "20 min",
            description: "This is a description of an investor meeting roadmap"
        },
        {
            title: "Sales Plan",
            timeEstimate: "20 min",
            description: "This is a description of an investor meeting sales plan"
        },
        {
            title: "Team Updates",
            timeEstimate: "10 min",
            description: "Meet the new coop student."
        },
        {
            title: "Product Roadmap",
            timeEstimate: "20 min",
            description: "This is a description of an investor meeting roadmap"
        },
        {
            title: "Sales Plan",
            timeEstimate: "20 min",
            description: "This is a description of an investor meeting sales plan"
        },
    ]
    return (
        <div id="outer-container">
            <Menu
                right
                push
                pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" }
            >
                {agendaItems && agendaItems.map((item) => {
                    return (
                        <AgendaItem
                            title = {item.title}
                            description = {item.description}
                            timeEstimate = {item.timeEstimate}
                        />
                    )
                })}
            </Menu>
            <Container id="page-wrap">
                Meeting Title
                
            </Container> 
        </div>
        
    );
}  