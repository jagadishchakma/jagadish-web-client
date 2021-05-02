import React from 'react';
import { Container } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import SkillsProgress from '../Skills/SkillsProgress';

const HomeSkill = () => {
    
    return (
        <section className="content home-skill">
            <Container fluid="true">
                <h2 className="section-title text-center">My Skills <sup className="badge badge-danger">More</sup> </h2>
                <Slide bottom>   
                    <SkillsProgress/>
                </Slide> 
            </Container>
        </section>
    );
};

export default HomeSkill;