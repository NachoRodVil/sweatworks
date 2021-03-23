import React, { useState, useEffect } from "react";
import { Accordion, Container, Row, Col, Spinner, Card } from "react-bootstrap";
import AccordionContent from "./AccordionContent";
import axios from "axios";

function Index() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        const results = await axios.get("/users");
        setUsers(results.data);
        setLoading(false);
        console.log(JSON.stringify(users));
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {loading ? (
                <div style={{ justifyContent: "center", textAlign: "center", display: "flex" }}>
                    <Spinner style={{ marginTop: "50px" }} animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="11">
                            <Card className="apocalypse-header-card">
                                <Card.Body>
                                    <Col xs lg="12" style={{ margin: "0px" }}>
                                        <Row>
                                            <Col sm xs="12" lg="6" className="apocalypse-header-title">
                                                <h1>APOCALYPSE CITY</h1>
                                            </Col>

                                            <Col sm xs="4" lg="1" className="apocalypse-header-subtitles">
                                                BIB
                                            </Col>
                                            <Col sm xs="4" lg="1" className="apocalypse-header-subtitles">
                                                AGE
                                            </Col>
                                            <Col sm xs="4" lg="1" className="apocalypse-header-subtitles">
                                                GENDER
                                            </Col>
                                            <Col sm xs="6" lg="2" className="apocalypse-header-subtitles">
                                                TIME
                                            </Col>
                                            <Col sm xs="6" lg="1" className="apocalypse-header-subtitles">
                                                SCORE
                                            </Col>
                                        </Row>
                                    </Col>
                                </Card.Body>
                            </Card>

                            <Accordion>
                                {users.map((user) => {
                                    return <AccordionContent user={user} num={String(users.indexOf(user))}></AccordionContent>;
                                })}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default Index;
