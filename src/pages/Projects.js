import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';

const Projects = () => {
    document.title = 'Projects | Jagadish Chakma | MEARN Stack Web Developer';
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
                                                <h6 className="project-title">Shopdrop Online Shopping</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>A single-page-website with fully responsive and interactive UI</li>
                                                    <li>Customer can order product with add to cart interative UI, and can see her order details</li>
                                                    <li>Admin can manage product with CRUD operation</li>
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
                                                    <li><a href="https://github.com/jagadishchakma/shopdrop-client" target="_blank" rel="noreferrer">Client: <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="https://github.com/jagadishchakma/shopdrop-server" target="_blank" rel="noreferrer">Server: <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="https://shopdrop.bodhidhara.com" target="_blank" rel="noreferrer">Live: <FontAwesomeIcon icon={faLink}/></a></li>
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
                                                <h6 className="project-title">Saifurs Coaching Service</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>A online teaching platform with students classroom authenticated.</li>
                                                    <li>New students can enroll with her class based like PSC, JSCC, SSC and HSC.</li>
                                                    <li>Payment stripe added on visa card</li>
                                                    <li>Admin can change status students admission active, on goin, done.</li>
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
                                                    <li><a href="https://github.com/jagadishchakma/saifurs-coacing-client" rel="noreferrer" target="_blank">Client Side: <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="https://github.com/jagadishchakma/saifurs-coaching-server" rel="noreferrer" target="_blank">Server Side: <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    <li><a href="https://saifurs.bodhidhara.com" rel="noreferrer" target="_blank">Live: <FontAwesomeIcon icon={faLink}/></a></li>
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
                                                <h6 className="project-title">Cooking Monstar</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>A different cooking items simple interactive design. </li>
                                                    <li>Users can search with different cooking name and show result below seriously.</li>
                                                    <li>Site is uses a online free cooking API and integratin using JavaScript fetch.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JavaScript</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="https://github.com/jagadishchakma/cooking-monstar " rel="noreferrer">Client <FontAwesomeIcon icon={faGithub}/></a></li>
            
                                                    <li><a href="https://jagadishchakma.github.io/cooking-monstar/index.html" rel="noreferrer" target="_blank">Live <FontAwesomeIcon icon={faLink}/></a></li>
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
                                                <h6 className="project-title">Fancy Slider</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>Simple JavaScript making slider application</li>
                                                    <li>Search a name like forest, mountain or other and you can make a slider via selected items</li>
                                                    <li>Users can change slider animation speed.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JavaScript</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="https://github.com/jagadishchakma/fancy-slider" rel="noreferrer" target="_blank">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    
                                                    <li><a href="https://jagadishchakma.github.io/fancy-slider/index.html" rel="noreferrer" target="_blank">Live <FontAwesomeIcon icon={faLink}/></a></li>
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
                                                <h6 className="project-title">Bodhidhara Online Newspaper</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>A online newspaper site, fully responsive and interactive design.</li>
                                                    <li>Readers can add comment and like on specific news.</li>
                                                    <li>Users info authenticated.</li>
                                                    <li>Admin panel added.</li>
                                                    <li>And users can find most recent, popular news.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JavaScript</li>
                                                    <li>jQuery</li>
                                                    <li>PHP</li>
                                                    <li>MySQL</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="https://github.com/jagadishchakma/bodhidhara-site-demo" rel="noreferrer" target="_blank">Code <FontAwesomeIcon icon={faGithub}/></a></li>
                                                    
                                                    <li><a href="https://bdhidhara.com" rel="noreferrer" target="_blank">Live <FontAwesomeIcon icon={faLink}/></a></li>
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
                                                <h6 className="project-title">Sports League</h6>
                                            </div>
                                            <div>
                                                <ul className="project-feature">
                                                    <li>A world class football league site.</li>
                                                    <li>You could find some information about world leagues.</li>
                                                    <li>Getting data from world league online API</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-use-lang">
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>JavaScript</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="project-link">
                                                    <li><a href="https://github.com/jagadishchakma/sports-league" rel="noreferrer" target="_blank">Client <FontAwesomeIcon icon={faGithub}/></a></li>
                                            
                                                    <li><a href="https://zealous-wiles-9872a0.netlify.app/"  rel="noreferrer" target="_blank">Live <FontAwesomeIcon icon={faLink}/></a></li>
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