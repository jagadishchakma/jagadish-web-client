import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const HomeService = () => {
    return (
        <Fade bottom>
            <section className="content services home-services animate__animated animate__backInUp">
                <Container fluid={true}>
                    <h2 className="section-title home-services-title text-center">SERVICES <sup className="badge badge-danger"><Link to="/services">More</Link></sup> </h2>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={12}>
                            <Card className="card">
                                <div className="brand-icon"><i className="fa fa-desktop"></i></div>
                                <Card.Body>
                                    <h2 className="service-title">Front-End</h2>
                                    <Card.Text>
                                        I will do design faster and responsive website 
                                    </Card.Text>
                                    <ul>
                                        <li>✔ Loading Faster</li>
                                        <li>✔ Fully Responsive</li>
                                        <li>✔ User Friendly</li>
                                        <li>✔ W3C Validation </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={12}>
                            <Card className="card">
                                <div className="brand-icon"><FontAwesomeIcon icon={faSitemap}/></div>
                                <Card.Body>
                                    <h2 className="service-title">Back-End </h2>
                                    <Card.Text>
                                        I will do design and develop html template
                                    </Card.Text>
                                    <ul>
                                        <li>✔ CRUD Operation</li>
                                        <li>✔ Authentication</li>
                                        <li>✔ Secure API JWT </li>
                                        <li>✔ Rest API </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={12}>
                            <Card className="card">
                                <div className="brand-icon"><FontAwesomeIcon icon={faReact}/></div>
                                <Card.Body>
                                    <h2 className="service-title">SPA</h2>
                                    <Card.Text>
                                        I will develop single-page-application
                                    </Card.Text>
                                    <ul>
                                        <li>✔ Loading Fast</li>
                                        <li>✔ Single Page</li>
                                        <li>✔ Component Based </li>
                                        <li>✔ Performance Optimized </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fade>
    );
};

export default HomeService;