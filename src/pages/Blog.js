import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Blogs from '../components/Blog/Blogs';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';
import BlogSkeleton from '../Skeleton/BlogSkeleton';


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    document.title = 'Blog | Jagadish Chakma | MEARN Stack Web Developer';
    useEffect(() => {
        setLoading(true);
        fetch('https://intense-shelf-11310.herokuapp.com/post', {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setPosts(data);
        })
    }, []);
    return (
        <Layout>
            <BreadCrumb path="Blogs"/>
            <section className="content blog blog-section">
                <Fade bottom>
                    <Container fluid={true}>
                
                        <div className="blogs">
                            <Row>
                                <Col lg={8} md={8} sm={12} xs={12}>
                                    <Row>
                                        {
                                            loading ? <BlogSkeleton/> :  posts.map(post => <Blogs post={post}/>) 
                                        }
                                    </Row>
                                </Col>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <BlogSidebar/>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Fade>
            </section>
        </Layout>
    );
};

export default Blog;