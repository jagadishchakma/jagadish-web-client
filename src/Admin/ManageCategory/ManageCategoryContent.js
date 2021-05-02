import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Spinner from '../../Spinner/Spinner';

const ManageCourseContent = (props) => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);
    const {toggle} = props;
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
    }, [update])
    const fullWidth = {
        width: '100%',
        marginTop: '70px',
    };
    const halfWidth= {
        marginLeft: '200px',
        marginTop: '70px',
    };
    // course delete
    const courseDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                setLoading(true);
              fetch('http://localhost:5000/category/'+id, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                setLoading(false);
                setUpdate(!update);  
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
              })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    return (
        <>
        {
            loading ? <Spinner/> : <div className="dashboard-content" style={toggle ? halfWidth : fullWidth} id="dash-content">
                <h2 className="dash-brand">Manage Category</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Categoy</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category => (
                                <tr key={category._id}>
                                    <td>{category.category}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger ml-2" onClick={() => courseDelete(category._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        }
        </>
    );
};

export default ManageCourseContent;