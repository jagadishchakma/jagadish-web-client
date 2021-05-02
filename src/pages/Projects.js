import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';

const Projects = () => {
    return (
        <Layout>
            <BreadCrumb path="Projects"/>
            <section className="content project-section">
                <Fade bottom>
                    <Container>
                        <div className="path-title">
                            <h3 className="path-name"><span>Some Of</span> My Projects</h3>
                            <h3 className="path-line"><span className="badge-left"></span><span className="badg-right"></span></h3>
                            <h3 className="path-badge">06 Projects</h3>
                        </div>
                        <div className="projects-all">
                            <Row>
                                <Col lg={4} md={6} sm={12} xsm={12}>
                                    <div className="projects-all-list">
                                        <div className="projects-all-images">
                                            <img src="http://img.bodhidhara.com/project1.png" alt="" width="100%" height="200"/>
                                        </div>
                                        <div className="project-all-details">
                                            <div>
                                                <h6 className="project-title">Shopdrop Online Ecommerce</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>React Bootstrap</li>
                                                    <li>React</li>
                                                    <li>Express</li>
                                                    <li>Mongodb</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Server <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Live <FontAwesomeIcon icon={faLink}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} sm={12} xsm={12}>
                                    <div className="projects-all-list project-spacial">
                                        <div className="projects-all-images">
                                            <img src="http://img.bodhidhara.com/project2.png" alt="" width="100%" height="200"/>
                                        </div>
                                        <div className="project-all-details">
                                            <div>
                                                <h6 className="project-title">Shopdrop Online Ecommerce</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>React Bootstrap</li>
                                                    <li>React</li>
                                                    <li>Express</li>
                                                    <li>Mongodb</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Server <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Live <FontAwesomeIcon icon={faLink}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                                <Col lg={4} md={6} sm={12} xsm={12}>
                                    <div className="projects-all-list">
                                        <div className="projects-all-images">
                                            <img src="http://img.bodhidhara.com/project3.png" alt="" width="100%" height="200"/>
                                        </div>
                                        <div className="project-all-details">
                                            <div>
                                                <h6 className="project-title">Shopdrop Online Ecommerce</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>React Bootstrap</li>
                                                    <li>React</li>
                                                    <li>Express</li>
                                                    <li>Mongodb</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Server <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Live <FontAwesomeIcon icon={faLink}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                                <Col lg={4} md={6} sm={12} xsm={12}>
                                    <div className="projects-all-list">
                                        <div className="projects-all-images">
                                            <img src="http://img.bodhidhara.com/project4.png" alt="" width="100%" height="200"/>
                                        </div>
                                        <div className="project-all-details">
                                            <div>
                                                <h6 className="project-title">Shopdrop Online Ecommerce</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>React Bootstrap</li>
                                                    <li>React</li>
                                                    <li>Express</li>
                                                    <li>Mongodb</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Server <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Live <FontAwesomeIcon icon={faLink}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>


                                <Col lg={4} md={6} sm={12} xsm={12}>
                                    <div className="projects-all-list">
                                        <div className="projects-all-images">
                                            <img src="http://img.bodhidhara.com/project5.png" alt="" width="100%" height="200"/>
                                        </div>
                                        <div className="project-all-details">
                                            <div>
                                                <h6 className="project-title">Shopdrop Online Ecommerce</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>React Bootstrap</li>
                                                    <li>React</li>
                                                    <li>Express</li>
                                                    <li>Mongodb</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Server <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Live <FontAwesomeIcon icon={faLink}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} sm={12} xsm={12}>
                                    <div className="projects-all-list">
                                        <div className="projects-all-images">
                                            <img src="http://img.bodhidhara.com/project6.png" alt="" width="100%" height="200"/>
                                        </div>
                                        <div className="project-all-details">
                                            <div>
                                                <h6 className="project-title">Shopdrop Online Ecommerce</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                    <li>Online Shopping Cart</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>React Bootstrap</li>
                                                    <li>React</li>
                                                    <li>Express</li>
                                                    <li>Mongodb</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Server <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="">Live <FontAwesomeIcon icon={faLink}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Fade>
            </section>
        </Layout>
    );
};

export default Projects;