import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { useLocation } from 'react-router';
import Blogs from '../components/Blog/Blogs';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';
import BlogSkeleton from '../Skeleton/BlogSkeleton';


const Search = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    document.title = 'Blog | Jagadish Chakma | MEARN Stack Web Developer';

    const query = new URLSearchParams(useLocation().search);
    const search = query.get('q');
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/post/search/'+search, {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            // setPosts(data);
            console.log(data);
        })
    }, [search]);


    
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

export default Search;