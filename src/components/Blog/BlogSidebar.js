import React from 'react';
import { Col, Row } from 'react-bootstrap';

const BlogSidebar = () => {
    return (
        <aside className="blog-sidebar">
            <div className="blog-search">
                <form>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="form-group">
                                <input type="search" className="form-control" placheholder="Search here..."/>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="form-group">
                                <button type="Submit" className="btn btn-info">Search...</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className="blog-categories">
                <h4>Categories: </h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
                    <li>Laravel</li>
                </ul>
            </div>
            <div className="blog-tags">
                <h4>Tags:</h4>
                <ul>
                    <li>Sidebar</li>
                    <li>Context API</li>
                    <li>Laravel</li>
                    <li>DevShop</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
                    <li>Laravel</li>
                    <li>Sidebar</li>
                    <li>Context API</li>
                    <li>Laravel</li>
                    <li>DevShop</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
                    <li>Laravel</li>
                    <li>Sidebar</li>
                    <li>Context API</li>
                    <li>Laravel</li>
                    <li>DevShop</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
                    <li>Laravel</li>
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebar;