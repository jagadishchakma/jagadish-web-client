import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BreadCrumb from '../components/Common/BreadCrumb';
import Layout from '../components/Common/Layout';
import Spinner from '../Spinner/Spinner';

const Post = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        setLoading(true);
        fetch('https://intense-shelf-11310.herokuapp.com/post/'+id, {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setPosts(data[0]);
        })
    }, [id]);
    return (
        <Layout>
            <BreadCrumb path="Blogs"/>
            <section className="content blog blog-section">
                <Fade bottom>
                    <Container fluid={true}>
                
                        <div className="blogs">
                            <Row>
                                <Col lg={8} md={8} sm={12} xs={12}>
                                    {
                                        loading ? <Spinner/> : <div>
                                        <img src={posts.thumbnail} alt={posts.title} width="98%"/>
                                        <h1>{posts.title}</h1>
                                        <div dangerouslySetInnerHTML={{__html: posts.description}}>
                                            
                                        </div>
                                    </div>
                                    }
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

export default Post;