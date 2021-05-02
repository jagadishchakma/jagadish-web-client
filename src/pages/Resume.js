import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';

const Resume = () => {
    return (
        <Layout>
            <BreadCrumb path="Resume"></BreadCrumb>
            <section className="content project-section">
                <Fade bottom>
                    <Container>
                        <div className="my-resume">
                            <img src="http://img.bodhidhara.com/resume-jagadish-chakma.jpg" alt="jagadish-chakma-resume" width="100%" height="100%"/>
                        </div>
                    </Container>
                </Fade>
            </section>        
        </Layout>
    );
};

export default Resume;