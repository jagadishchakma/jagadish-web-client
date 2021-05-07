import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './BlogSkeleton.css';

const BlogSkeleton = () => {
    return (
        <Row>
            <Col xl={4} lg={6} md={6} sm={6} xs={12}>
                <Card className="blog-box-skeleton">
                    <Card.Header className="blog-header">
                        
                    </Card.Header>
                    <Card.Body className="blog-body">
                       
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"></div>
                        <div className="blog-publish-date"> </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xl={4} lg={6} md={6} sm={6} xs={12}>
                <Card className="blog-box-skeleton">
                    <Card.Header className="blog-header">
                        
                    </Card.Header>
                    <Card.Body className="blog-body">
                       
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"></div>
                        <div className="blog-publish-date"> </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xl={4} lg={6} md={6} sm={6} xs={12}>
                <Card className="blog-box-skeleton">
                    <Card.Header className="blog-header">
                        
                    </Card.Header>
                    <Card.Body className="blog-body">
                       
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"></div>
                        <div className="blog-publish-date"> </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xl={4} lg={6} md={6} sm={6} xs={12}>
                <Card className="blog-box-skeleton">
                    <Card.Header className="blog-header">
                        
                    </Card.Header>
                    <Card.Body className="blog-body">
                       
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"></div>
                        <div className="blog-publish-date"> </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xl={4} lg={6} md={6} sm={6} xs={12}>
                <Card className="blog-box-skeleton">
                    <Card.Header className="blog-header">
                        
                    </Card.Header>
                    <Card.Body className="blog-body">
                       
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"></div>
                        <div className="blog-publish-date"> </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xl={4} lg={6} md={6} sm={6} xs={12}>
                <Card className="blog-box-skeleton">
                    <Card.Header className="blog-header">
                        
                    </Card.Header>
                    <Card.Body className="blog-body">
                       
                    </Card.Body>
                    <Card.Footer className="blog-footer">
                        <div className="blog-category"></div>
                        <div className="blog-publish-date"> </div>
                    </Card.Footer>
                </Card>
            </Col> 
        </Row>
    );
};

export default BlogSkeleton;