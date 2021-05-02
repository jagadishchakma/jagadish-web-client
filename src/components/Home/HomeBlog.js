import { faClock, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Spinner from '../../Spinner/Spinner';

const HomeBlog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://intense-shelf-11310.herokuapp.com/post/limit', {
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

    const history = useHistory();
    const readPost = (id) => {
        history.push('/blog/post/'+id);
    }
    return (
        <section className="content home-blog blog">
            <Container fluid={true}>
                <h2 className="section-title text-center">My Blogs <sup className="badge badge-danger">More</sup> </h2>
                <Row>
                    {
                        loading ? <Spinner/> :  posts.map(post => {
                            return (
                                <Col lg={4} md={6} sm={6} xs={12}>
                                    <Card className="blog-box home-blog" onClick={() => readPost(post._id)}>
                                        <Card.Header className="home-blog-header">
                                            <Card.Img variant="top" src={post.thumbnail} />
                                        </Card.Header>
                                        <Card.Body>
                                            <h6 className="blog-title">{post.title}</h6>
                                        </Card.Body>
                                        <Card.Footer className="blog-footer">
                                            <div className="blog-category"><i className="folder-open"><FontAwesomeIcon icon={faFolderOpen}/></i> {post.category}</div>
                                            <div className="blog-publish-date"> <i className="clock"><FontAwesomeIcon icon={faClock}/></i> {post.date}</div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        }) 
                    }
                </Row>
            </Container>
        </section>
    );
};

export default HomeBlog;