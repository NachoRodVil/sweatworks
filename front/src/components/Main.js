import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./Index";
import { Navbar, Nav } from "react-bootstrap";

function Main() {
    return (
        <div className="body_background">
            <Navbar collapseOnSelect expand="lg" className="dark-nav" variant="dark">
                <Navbar.Toggle eventKey={2} aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link style={{}}>TEAMS</Nav.Link>
                        <Nav.Link eventKey={2}>LEADERBOARDS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <img style={{ width: "100%", height: "auto", display: "flex" }} src="https://i.imgur.com/cOlVVn3.jpg"></img>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </div>
    );
}

export default Main;
