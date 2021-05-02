import { faHtml5, faLaravel, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMobile, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';

const Services = () => {
    return (
        <Layout>
            <BreadCrumb path="Services"/>
            <section className="content">
                <Fade bottom>
                    <Container fluid={true}>
                        <div className="path-title">
                            <h3 className="path-name"><span>My</span> Programming</h3>
                            <h3 className="path-line"><span className="badge-left"></span><span className="badg-right"></span></h3>
                            <h3 className="path-badge">Services</h3>
                        </div>
                        <div className="services">
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
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="card">
                                        <div className="brand-icon"><FontAwesomeIcon icon={faHtml5}/></div>
                                        <Card.Body>
                                            <h2 className="service-title">HTML Template</h2>
                                            <Card.Text>
                                                I will design and construct w3c validation HTML template
                                            </Card.Text>
                                            <ul>
                                                <li>✔ HTML5 Element</li>
                                                <li>✔ W3C Validation</li>
                                                <li>✔ Meta Tag Use </li>
                                                <li>✔ Usless Code Avoid </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="card">
                                        <div className="brand-icon"><FontAwesomeIcon icon={faMobile}/></div>
                                        <Card.Body>
                                            <h2 className="service-title">Responsive Design</h2>
                                            <Card.Text>
                                                I will do  responsive design
                                            </Card.Text>
                                            <ul>
                                                <li>✔ CSS3</li>
                                                <li>✔ Multiple Device Responsive</li>
                                                <li>✔ Loading Fast </li>
                                                <li>✔ Performance Optimized </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="card">
                                        <div className="brand-icon"><FontAwesomeIcon icon={faNodeJs}/></div>
                                        <Card.Body>
                                            <h2 className="service-title">NodeJS Application</h2>
                                            <Card.Text>
                                                I will do develop NodeJS application
                                            </Card.Text>
                                            <ul>
                                                <li>✔ ExpressJS Frameword Standard</li>
                                                <li>✔ Rest API</li>
                                                <li>✔ Or EJS Template Engine </li>
                                                <li>✔ Code Formatting </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="card">
                                        <div className="brand-icon"><FontAwesomeIcon icon={faLaravel}/></div>
                                        <Card.Body>
                                            <h2 className="service-title">Laravel Application</h2>
                                            <Card.Text>
                                                I will develop laravel application
                                            </Card.Text>
                                            <ul>
                                                <li>✔ With Reactjs Scaffolding</li>
                                                <li>✔ Blade Template</li>
                                                <li>✔ Rest API </li>
                                                <li>✔ Authentication </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="card">
                                        <div className="brand-icon"><FontAwesomeIcon icon={faDatabase}/></div>
                                        <Card.Body>
                                            <h2 className="service-title">MongoDB Database</h2>
                                            <Card.Text>
                                                I will do setup mongodb database in application
                                            </Card.Text>
                                            <ul>
                                                <li>✔ Uses Mongoose Package</li>
                                                <li>✔ CRUD Operation</li>
                                                <li>✔ MongoDB Atlas </li>
                                                <li>✔ Efficiently Data Manage </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="card">
                                        <div className="brand-icon"><FontAwesomeIcon icon={faDatabase}/></div>
                                        <Card.Body>
                                            <h2 className="service-title">MySQL Database</h2>
                                            <Card.Text>
                                                I will do setup mysql database on application
                                            </Card.Text>
                                            <ul>
                                                <li>✔ Laravel MVC Pattern</li>
                                                <li>✔ RDBS System</li>
                                                <li>✔ CRUD Operation </li>
                                                <li>✔ Efficiently Data Manage </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Fade>
            </section>
        </Layout>
    );
};

export default Services;