import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router';
import Blogs from '../components/Blog/Blogs';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';
import Spinner from '../Spinner/Spinner';

const Category = () => {
    const [posts, setPosts] = useState([]);
   
    const [loading, setLoading] = useState(false);
    const {category} = useParams();
    useEffect(() => {
        setLoading(true);
        fetch('https://intense-shelf-11310.herokuapp.com/post/category/'+category, {
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
    }, [category]);
    document.title = category + 'Posts By Jagadish Chakma';
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
                                        loading ? <Spinner/> : posts.length > 0 ?  posts.map(post => <Blogs post={post}/>) :  <h1 className="text-center text-danger p-5">OOPS Sory! Not Have Post Yet!</h1>
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

export default Category;