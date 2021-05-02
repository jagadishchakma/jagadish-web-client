import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faMap, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';
import Loading from '../Spinner/Loading';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('jagadishemail', 'template_9tartsh', e.target, 'user_RUKLyvd3AXosO1AupTnpP')
          .then((result) => {
              console.log(result.text);
              setLoading(false);
              setSuccess(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <Layout>
            <BreadCrumb path="Projects"/>
            <section className="content contact-section">
                <Fade bottom>
                    <Container>
                        <div className="path-title">
                            <h3 className="path-name"><span>Contact Me</span> or</h3>
                            <h3 className="path-line"><span className="badge-left"></span><span className="badg-right"></span></h3>
                            <h3 className="path-badge">Send Message</h3>
                        </div>
                        <div className="contacts">
                            <div className="contact-me">
                                <Row>
                                    <Col lg="6" md="6" sm="12" xs={12}>
                                        <div className="digital-media">
                                            <div className="medium">
                                                <h4> <span className="contact-icon"><FontAwesomeIcon icon={faMap}/></span> Current Adress:</h4>
                                                <h6>Rangamati Sadar, Chittagong Divission, Bangladesh</h6>
                                            </div>
                                            <div className="medium">
                                                <h4> <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope}/></span> Send Mail:</h4>
                                                <h6>jagadishchakma401@gmail.com</h6>
                                            </div>
                                            <div className="medium">
                                                <h4> <span className="contact-icon"><FontAwesomeIcon icon={faPhoneSquare}/></span> Call Me:</h4>
                                                <h6>+8801608755518</h6>
                                            </div>
                                            <div className="medium">
                                                <h4> <span className="contact-icon"><FontAwesomeIcon icon={faGlobe}/></span> Website:</h4>
                                                <h6>https://jagadish.bodhidhara.com</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" xs={12}>
                                       <div className="send-message">
                                            <h4 className="text-center text-primary">Message</h4>
                                            <form onSubmit={sendEmail}>
                                                <div class="form-floating mb-3">
                                                    <label for="floatingInput">Name</label>
                                                    <input type="text" className="form-control" id="floatingInput" name="name" placeholder="Write Your Name......"/>
                                                    
                                                </div>
                                                <div className="form-floating">
                                                    <label for="floatingPassword">Title</label>
                                                    <input type="text" className="form-control" id="floatingPassword" name="title" placeholder="Write Your Title......"/>
                        
                                                </div>
                                                <div className="form-floating">
                                                    <label for="floatingPassword">Email</label>
                                                    <input type="email" className="form-control" id="floatingPassword" name="email" placeholder="Write Your Title......"/>
                        
                                                </div>
                                                <div class="form-floating">
                                                    <label for="floatingTextarea2">Message</label>
                                                    <textarea className="form-control" placeholder="Leave a message here" name="message" id="floatingTextarea2"></textarea>
            
                                                </div>
                                                <button type="submit" className="btn btn-info btn-block mt-2">{loading ? <Loading/> : success ? "You Message Successefully Send. Reply Soon" : "Send Message" }</button>
                                            </form>
                                       </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="social-media">
                                <h4>Connect TO</h4>
                                <ul>
                                    <li><a href=""> <i className="linkdin"><FontAwesomeIcon icon={faLinkedin}/></i> </a></li>
                                    <li><a href=""><i className="github"><FontAwesomeIcon icon={faGithub}/></i> </a></li>
                                    <li><a href=""><i className="twitter"><FontAwesomeIcon icon={faTwitter}/></i> </a></li>
                                    <li><a href=""><i className="facebook"><FontAwesomeIcon icon={faFacebook}/></i> </a></li>
                                    <li><a href=""><i className="youtube"><FontAwesomeIcon icon={faYoutube}/></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </Fade>
            </section>
        </Layout>
    );
};

export default Contact;