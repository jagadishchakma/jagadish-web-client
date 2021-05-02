import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useEffect, useState } from 'react';
import Loading from '../../Spinner/Loading';
import Spinner from '../../Spinner/Spinner';

const AddCategoryContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({});
    const [success, setSuccess] = useState(false);
    const [submit, setSubmit] = useState(false);
    const {toggle} = props;

    // get category list
    useEffect(() => {
        setLoading(true);
        fetch('https://intense-shelf-11310.herokuapp.com/category', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            setLoading(false);
        })
    }, [])

    // data retrieve form
    const handleInputChange = (e) => {
        const newPost = {...post};
        newPost[e.target.name] = e.target.value;
        setPost(newPost);
    }
   
    // data form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSuccess(!success);
        fetch('https://intense-shelf-11310.herokuapp.com/post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(false);
            setSubmit(!submit);
            e.target.reset();
        })
    }
    
    // design
    const fullWidth = {
        width: '100%',
        marginTop: '70px',
    };
    const halfWidth= {
        marginLeft: '200px',
        marginTop: '70px',
    };
    return (
        <>
        {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                <h2 className="dash-brand">Add Post</h2>
                <form onSubmit={handleFormSubmit}> 
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handleInputChange} name="title" placeholder="Enter Title" required/>
                    </div>
                    <div className="form-group">
                        <select name="category" className="form-control" onChange={handleInputChange}>
                            {
                                categories.map(category => <option value={category.category}>{category.category}</option> )
                            }
                        </select>
                    </div>
                    <div className="from-group">
                        <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Hello from CKEditor 5!</p>"
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    const newPost = {...post};
                                    newPost["description"] = data;
                                    setPost(newPost);
                                } }
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" name="thumbnail" className="form-control" onChange={handleInputChange} placeholder="Image URL"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="date" className="form-control" onChange={handleInputChange} placeholder="23, march 2021"/>
                    </div>
            
                    {submit && <p className="alert alert-success">Success Post Insert</p> }
                    <button type="submit" className="btn btn-success">{success ? <Loading/> : 'Submit'}</button>
                </form>
            </div>
        }
        </>
    );
};

export default AddCategoryContent;