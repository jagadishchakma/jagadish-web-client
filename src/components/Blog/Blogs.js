import { faClock, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Blogs = (props) => {
    const {_id, title, thumbnail, date, category} = props.post;
    const history = useHistory();
    const readPost = (id) => {
        history.push('/blog/post/'+id);
    }
    return (
        <Fragment>
            <Col lg={4} md={6} sm={6} xs={12}>
                <Card className="blog-box" onClick={() => readPost(_id)}>
                    <Card.Header className="blog-header">
                        <Card.Img variant="top" src={thumbnail} />
                    </Card.Header>
                    <Card.Body>
                        <h6 className="blog-title">{title}</h6>
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"><i className="folder-open"><FontAwesomeIcon icon={faFolderOpen}/></i> {category}</div>
                        <div className="blog-publish-date"> <i className="clock"><FontAwesomeIcon icon={faClock}/></i> {date}</div>
                    </Card.Footer>
                </Card>
            </Col>
            
        </Fragment>
    );
};

export default Blogs;