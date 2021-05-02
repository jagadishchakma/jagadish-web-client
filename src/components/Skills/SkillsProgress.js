import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SkillBar from 'react-skillbars';
import Progress from '../progress/Progress';


const skills = [
    {
      "type": "HTML",
      "level": 95
    },
    {
      "type": "CSS",
      "level": 85
    },
    {
      "type": "Javascript",
      "level": 90
    },
    {
      "type": "Bootstrap",
      "level": 95
    },
    {
      "type": "ReactJS",
      "level": 80
    },
    {
      "type": "React Bootstrap",
      "level": 90
    },
    {
      "type": "NodeJS",
      "level": 70
    },
    {
      "type": "MongoDB",
      "level": 80
    }
  ]
  
const SkillsProgress = () => {

    return (
        <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
                <h4 className="text-center">Programming Skills</h4>
                <SkillBar skills={skills} animationDelay={100}/>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <Progress/>
            </Col> 
        </Row>
         
    );
};

export default SkillsProgress;