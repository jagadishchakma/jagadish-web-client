import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>{props.path}</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadCrumb;