import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const HomeProject = () => {
    return (
        <Fade bottom>
             <section className="content recent-projects projects">
                <Container>
                    <h2 className="section-title text-center">Recent Projects <sup className="badge badge-danger"><Link to="/projects">More</Link></sup> </h2>
                    <div className="project">
                        <div className="project-info">
                            <div className="project-details">
                               <div>
                                   Featured Project
                               </div>
                               <div>
                                   <h4 className="project-name">Shopdrop Online Ecommerce</h4>
                               </div>
                               <div>
                                   <p className="project-summery">
                                    A online ecommerce site where users can buy a product. Features are available add to cart, review ordres, authenticated social login using firebase.
                                    And admin can CRUD operation on products management.
                                   </p>
                               </div>
                               <div>
                                   <ul className="project-use-lang">
                                       <li>HTML</li>
                                       <li>CSS</li>
                                       <li>MongoDB</li>
                                       <li>React</li>
                                       <li>Express</li>
                                       <li>Firebase</li>
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
                        <div className="project-image">
                            <div className="project-thumb">
                                <img id="thumb" src="http://img.bodhidhara.com/project1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>


                    <div className="project">
                        <div className="project-info">
                            <div className="project-details">
                               <div>
                                   Featured Project
                               </div>
                               <div>
                                   <h4 className="project-name">Bodhidhara Online Newspaper</h4>
                               </div>
                               <div>
                                   <p className="project-summery">
                                        A online newspaper digital versin site. Daily news published, update and users statistics dashboard. Users can comment and like on news and authenticated.
                                   </p>
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
                        <div className="project-image">
                            <div className="project-thumb">
                                <img id="thumb" src="http://img.bodhidhara.com/project5.png" alt=""/>
                            </div>
                        </div>
                    </div>


                    <div className="project">
                        <div className="project-info">
                            <div className="project-details">
                               <div>
                                   Featured Project
                               </div>
                               <div>
                                   <h4 className="project-name">Saifurs Coaching Service</h4>
                               </div>
                               <div>
                                   <p className="project-summery">
                                     A online digitalize coaching center. User can admission on coaching center based on her class like PSC, JSC, SSC and HSC. Payment stripe integration on visa card.
                                   </p>
                               </div>
                               <div>
                                   <ul className="project-use-lang">
                                       <li>HTML</li>
                                       <li>CSS</li>
                                       <li>MongoDB</li>
                                       <li>React</li>
                                       <li>Express</li>
                                       <li>Firebase</li>
                                   </ul>
                               </div>
                               <div>
                                   <ul className="project-link">
                                       <li><a href="https://github.com/jagadishchakma/saifurs-coacing-client">Client Side: <FontAwesomeIcon icon={faGithub}/></a></li>
                                       <li><a href="https://github.com/jagadishchakma/saifurs-coaching-server" rel="norefere">Server Side: <FontAwesomeIcon icon={faGithub}/></a></li>
                                       <li><a href="https://saifurs.bodhidhara.com">Live: <FontAwesomeIcon icon={faLink}/></a></li>
                                   </ul>
                               </div>
                            </div>
                        </div>
                        <div className="project-image">
                            <div className="project-thumb">
                                <img id="thumb" src="http://img.bodhidhara.com/project2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
    );
};

export default HomeProject;