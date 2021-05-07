import React, { useEffect, useState } from 'react';
import Loading from '../../Spinner/Loading';
import Spinner from '../../Spinner/Spinner';

const AddTagContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState({});
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
        const newTag = {...tag};
        newTag[e.target.name] = e.target.value;
        setTag(newTag); 
        
    }

    // data form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSuccess(!success);
        fetch('https://intense-shelf-11310.herokuapp.com/tag/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag)
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
                <h2 className="dash-brand">Add Tag</h2>
                <form onSubmit={handleFormSubmit}> 
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handleInputChange} name="tag" placeholder="Enter Tag Name Here" required/>
                    </div>
            
                    {submit && <p className="alert alert-success">Success Tag Insert</p> }
                    <button type="submit" className="btn btn-success">{success ? <Loading/> : 'Submit'}</button>
                </form>
            </div>
        }
        </>
    );
};

export default AddTagContent;