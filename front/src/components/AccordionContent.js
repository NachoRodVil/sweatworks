import React from "react";
import { Accordion, Card, Row, Col, ProgressBar } from "react-bootstrap";

function AccordionContent({ user, num }) {
    return (
        <Card className="custom-acc">
            <Accordion.Toggle className="custom-acc-header" as={Card.Header} eventKey={num}>
                <Row className="header-content-1" style={{ margin: "0px" }}>
                    <Col xs lg="12" style={{ margin: "0px" }}>
                        <Row>
                            <Col xs lg="1" className="header-content-1 fadeshow1">
                                {Number(num) + 1}
                            </Col>
                            <Col sm xs="12" lg="1" className="header-content-1">
                                <img style={{ margin: "0px 0px 0px 17px", height: "100px" }} src={user.img} alt="perfil"></img>
                            </Col>
                            <Col sm xs="12" lg="4" className="header-content-name">
                                <strong>{user.name}</strong>
                            </Col>
                            <Col sm xs="4" lg="1" className="header-content-2">
                                {user.bib}
                            </Col>
                            <Col sm xs="4" lg="1" className="header-content-2">
                                {user.age}
                            </Col>
                            <Col sm xs="4" lg="1" className="header-content-2">
                                {user.gender}
                            </Col>
                            <Col sm xs="6" lg="2" style={{ backgroundColor: "black" }} className="header-content-3">
                                {Math.floor(user.time / 60) + ":" + String(user.time % 60).padStart(2, "0")}
                            </Col>
                            <Col sm xs="6" lg="1" style={{ backgroundColor: "#2359A4" }} className="header-content-3">
                                {user.score}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={num}>
                <Row>
                    <Col xs lg="2" style={{ opacity: "0" }}></Col>
                    <Col xs lg="10" stylw={{ padding: "0px 0px 0px 40px" }}>
                        <Card.Body className="custom-acc-body accordion_background">
                            <div style={{ marginBottom: "50px" }}>
                                <Row>
                                    <Col xs lg="2" className="header-content-bars">
                                        STRENGTH
                                    </Col>
                                    <Col xs lg="1" style={{ color: "#40aecc" }} className="header-content-1">
                                        {user.skills.str}
                                    </Col>
                                    <Col xs lg="6" style={{ padding: "10px" }}>
                                        <ProgressBar variant="blue" now={(user.skills.str / 20) * 100} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2" className="header-content-bars">
                                        ENDURANCE
                                    </Col>
                                    <Col xs lg="1" style={{ color: "#f36a21" }} className="header-content-1">
                                        {user.skills.end}
                                    </Col>
                                    <Col xs lg="6" style={{ padding: "10px" }}>
                                        <ProgressBar variant="orange" now={(user.skills.end / 20) * 100} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2" className="header-content-bars">
                                        DEXTERITY
                                    </Col>
                                    <Col xs lg="1" style={{ color: "#C8D82B" }} className="header-content-1">
                                        {user.skills.dex}
                                    </Col>
                                    <Col xs lg="6" style={{ padding: "10px" }}>
                                        <ProgressBar variant="green" now={(user.skills.dex / 20) * 100} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs lg="2" className="header-content-bars">
                                        DECISION MAKING
                                    </Col>
                                    <Col xs lg="1" style={{ color: "#864C94" }} className="header-content-1">
                                        {user.skills.dec}
                                    </Col>
                                    <Col xs lg="6" style={{ padding: "10px" }}>
                                        <ProgressBar variant="purple" now={(user.skills.dec / 20) * 100} />
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <h1 className="title-accordeon">Post Apocalyptic Highway</h1>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                1
                                            </div>
                                            <Col xs lg="4" className="header-content-table">
                                                Hill Climb
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.pah.hc.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.pah.hc.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.pah.hc.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.pah.hc.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" + Math.floor(user.pah.hc.time / 60) + ":" + (user.pah.hc.time % 60)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.pah.hc.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                2
                                            </div>
                                            <Col xs lg="4" className="header-content-table">
                                                Run For The Hills
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.pah.rfth.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.pah.rfth.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.pah.rfth.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.pah.rfth.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" + Math.floor(user.pah.rfth.time / 60) + ":" + (user.pah.rfth.time % 60)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.pah.rfth.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                3
                                            </div>
                                            <Col xs lg="4" className="header-content-table">
                                                Coded Doors
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.pah.cd.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.pah.cd.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.pah.cd.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.pah.cd.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.pah.cd.time / 60) +
                                                    ":" +
                                                    String(user.pah.cd.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.pah.cd.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                4
                                            </div>
                                            <Col xs lg="4" className="header-content-table">
                                                Spear Throw
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.pah.st.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.pah.st.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.pah.st.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.pah.st.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.pah.st.time / 60) +
                                                    ":" +
                                                    String(user.pah.st.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.pah.st.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                5
                                            </div>
                                            <Col xs lg="4" className="header-content-table">
                                                Sand Bagging
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.pah.sb.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.pah.sb.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.pah.sb.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.pah.sb.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.pah.sb.time / 60) +
                                                    ":" +
                                                    String(user.pah.sb.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.pah.sb.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <h1 className="title-accordeon">Costa Rican Caves</h1>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                6
                                            </div>
                                            <Col xs lg="10" className="header-content-table">
                                                Crevasse Crossing
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.crc.cc.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.crc.cc.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.crc.cc.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.crc.cc.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.crc.cc.time / 60) +
                                                    ":" +
                                                    String(user.crc.cc.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.crc.cc.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                7
                                            </div>
                                            <Col xs lg="10" className="header-content-table">
                                                The Canopy
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.crc.tc.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.crc.tc.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.crc.tc.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.crc.tc.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.crc.tc.time / 60) +
                                                    ":" +
                                                    String(user.crc.tc.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.crc.tc.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                8
                                            </div>
                                            <Col xs lg="10" className="header-content-table">
                                                Dirty Armor
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.crc.da.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.crc.da.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.crc.da.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.crc.da.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.crc.da.time / 60) +
                                                    ":" +
                                                    String(user.crc.da.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.crc.da.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                9
                                            </div>
                                            <Col xs lg="10" className="header-content-table">
                                                Navigational Challenge
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.crc.nc.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.crc.nc.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.crc.nc.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.crc.nc.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.crc.nc.time / 60) +
                                                    ":" +
                                                    String(user.crc.nc.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.crc.nc.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "20px" }}>
                                    <Col xs lg="6" style={{ padding: "0 0 0 34px" }}>
                                        <Row>
                                            <div xs lg="2" className="numberCircle">
                                                10
                                            </div>
                                            <Col xs lg="10" className="header-content-table">
                                                Dead Weight
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs lg="6">
                                        <Row>
                                            {user.crc.dw.p ? (
                                                <div xs lg="1" className="letterCircle">
                                                    P
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    P
                                                </div>
                                            )}
                                            {user.crc.dw.r ? (
                                                <div xs lg="1" className="letterCircle">
                                                    R
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    R
                                                </div>
                                            )}
                                            {user.crc.dw.w ? (
                                                <div xs lg="1" className="letterCircle">
                                                    W
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    W
                                                </div>
                                            )}
                                            {user.crc.dw.f ? (
                                                <div xs lg="1" className="letterCircle">
                                                    F
                                                </div>
                                            ) : (
                                                <div xs lg="1" className="letterCircleNoOpacity">
                                                    F
                                                </div>
                                            )}
                                            <Col xs lg="2" style={{ padding: 0 }}></Col>
                                            <Col xs lg="4" className="header-content-timecell">
                                                {"00:" +
                                                    Math.floor(user.crc.dw.time / 60) +
                                                    ":" +
                                                    String(user.crc.dw.time % 60).padStart(2, 0)}
                                            </Col>
                                            <Col xs lg="1" className="header-content-score">
                                                {user.crc.dw.score}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Accordion.Collapse>
        </Card>
    );
}

export default AccordionContent;
