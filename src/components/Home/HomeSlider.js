import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <Container fluid={true}>
            <div className="topSlider text-center">
            <Slider {...settings} className="slider">
                <div>
                   <h1>Hi, My Name is Jagadish Chakma</h1>
                   <h2>MEARN Stack Web Developer</h2>
                   <p>Passionate, Dedicated, Learner a Proggrammer</p>
                </div>
            </Slider>
        </div>
            </Container>
    );
};

export default HomeSlider;