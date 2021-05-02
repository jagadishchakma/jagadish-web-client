import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const NavMenu = (props) => {
    const bg = props.bg || "light";
    const history = useHistory();
    window.addEventListener("scroll", function(){
        var scroll = window.scrollY;
        if(scroll > 80){
            document.getElementById('nav').style.cssText = "position: fixed; top: 0; left: 0; right: 0; z-index: 90; background-color: #f8f9fa; transition: 1s";
        }else{
            document.getElementById('nav').style.cssText = "position: sticky;";
        }
    });

    const resumePage = () => {
        history.push('/resume')
    }
    return (
        <Navbar bg={bg} expand="lg" id="nav">
            <Container fluid={true}>
                <Navbar.Brand as={Link} to="/">Jagadish Chakma</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="cross"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/projects">PROJECTS</Nav.Link>
                        <Nav.Link as={Link} to="/skills">SKILLS</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">BLOG</Nav.Link>
                        <Nav.Link onClick={resumePage} className="resume btn btn-outline-danger" href="https://drive.google.com/uc?id=1JFSFYpta2XLAg9ewVZCRLusDjQmHLlri&export=download">RESUME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    );
};

export default NavMenu;