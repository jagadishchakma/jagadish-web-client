import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SidebarSkeleton from '../../Skeleton/SidebarSkeleton';


const BlogSidebar = () => {
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    // Get Categories
    useEffect(() => {
        fetch('https://intense-shelf-11310.herokuapp.com/category', {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => setCategories(data))
    });

    // Get Tags
    useEffect(() => {
        setLoading(true);
        fetch('https://intense-shelf-11310.herokuapp.com/tag', {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setTags(data);
            setLoading(false);
        })
    }, []);
    return (
        loading ? <SidebarSkeleton/> : 
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
                    {
                        categories.map(category => <li><Link to={`/blog/${category.category}`}>{category.category}</Link></li> )
                    }
                </ul>
            </div>
            <div className="blog-tags">
                <h4>Tags:</h4>
                <ul>
                    {
                        tags.map(tag => <li><Link to={`/blog/${tag.tag}`}>{tag.tag}</Link></li> )
                    }
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebar;