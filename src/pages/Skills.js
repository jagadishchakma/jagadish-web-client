import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';
import SkillsProgress from '../components/Skills/SkillsProgress';

const Skills = () => {
    return (
        <Layout>
            <BreadCrumb path="Skills"/>
            <section className="content skill-section">
               <Fade bottom>
                    <Container fluid={true}>
                        <div className="skill-progress">
                            <SkillsProgress/>
                        </div>
                    </Container>
                    </Fade>
            </section>
        </Layout>
    );
};

export default Skills;