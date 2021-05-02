import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';

const About = () => {
    return (
        <Layout>
            <BreadCrumb path="About"/>
            <section className="content about-section">
                <Fade bottom>
                    <Container>
                        <div className="path-title">
                            <h3 className="path-name"><span>Passionate, Dedicated</span> Learner</h3>
                            <h3 className="path-line"><span className="badge-left"></span><span className="badg-right"></span></h3>
                            <h3 className="path-badge">Programmer</h3>
                        </div>
                        <div className="about">
                            <Row>
                                <Col lg={4} md={4} sm={4} xs={12}>
                                    <div className="profile">
                                        <img src="https://jagadishchakma.github.io/creativity-web-developer-jagadish/images/jagadish2.png" alt="" width="100%" height=""/>
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={8} xs={12}>
                                    <div className="profile-info">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, deleniti minus? A, veritatis. Veritatis distinctio sapiente reprehenderit, ipsum a excepturi ipsa iure, quod quibusdam eos minima nemo, cupiditate consequuntur obcaecati.</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, deleniti minus? A, veritatis. Veritatis distinctio sapiente reprehenderit, ipsum a excepturi ipsa iure, quod quibusdam eos minima nemo, cupiditate consequuntur obcaecati.</p>
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

export default About;