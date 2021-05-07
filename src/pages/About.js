import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ProfileInfo from '../components/About/ProfileInfo';
import ProfileSummery from '../components/About/ProfileSummery';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';


const About = () => {
    document.title = 'About Jagadish Chakma | MEARN Stack Web Developer';
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
                                <Col lg={6} md={6} sm={6} xs={12}>
                                    <div className="profile">
                                        <img src="https://jagadishchakma.github.io/creativity-web-developer-jagadish/images/jagadish2.png" alt="" width="400"/>
                                    </div>
                                    <ProfileInfo/>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={12}>
                                    <ProfileSummery/>
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