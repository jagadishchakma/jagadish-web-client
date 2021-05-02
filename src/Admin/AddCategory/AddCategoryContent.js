import React, { useEffect, useState } from 'react';
import Loading from '../../Spinner/Loading';
import Spinner from '../../Spinner/Spinner';

const AddCategoryContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState({});
    const [success, setSuccess] = useState(false);
    const [submit, setSubmit] = useState(false);
    const {toggle} = props;
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);
    // data retrieve form
    const handleInputChange = (e) => {
        const newCategory = {...category};
        newCategory[e.target.name] = e.target.value;
        setCategory(newCategory); 
        
    }

    // data form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSuccess(!success);
        fetch('https://intense-shelf-11310.herokuapp.com/category/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
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
                <h2 className="dash-brand">Add Category</h2>
                <form onSubmit={handleFormSubmit}> 
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handleInputChange} name="category" placeholder="Enter Category Name Here" required/>
                    </div>
            
                    {submit && <p className="alert alert-success">Success Category Insert</p> }
                    <button type="submit" className="btn btn-success">{success ? <Loading/> : 'Submit'}</button>
                </form>
            </div>
        }
        </>
    );
};

export default AddCategoryContent;