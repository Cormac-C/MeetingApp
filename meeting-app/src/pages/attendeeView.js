import { Container } from "react-bootstrap"
import { slide as Menu } from 'react-burger-menu'


export function AttendeeView () {
    const agendaItems = [
        {
            title: "Item 1",
            timeEstimate: "45 min",
            description: "This is a description"
        },
        {
            title: "Item 2",
            timeEstimate: "30 min",
            description: "This is a description"
        }
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
                        <a id="home" className="menu-item" href="/">{item.title}</a>
                    )
                })}
            </Menu>
            <Container id="page-wrap">
                Meeting Title
                
            </Container> 
        </div>
        
    );
}  