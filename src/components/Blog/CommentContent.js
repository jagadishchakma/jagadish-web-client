import React, { Fragment, useEffect, useState } from 'react';

const CommentContent = ({id, success}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('https://intense-shelf-11310.herokuapp.com/comment/'+id, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setComments(data);
            console.log(data);
        })
    },[id, success])
    
    return (
        <Fragment>
            <div className="comment-content">
                {
                    loading ? "ok" : comments.map(comment => {
                        return(
                            <>
                            <div className="comments">
                                <div className="comment-profile">
                                    <div>
                                        <img className="circle-rounded" src={comment.photoURL} alt={comment.displayName} width="50"/>
                                    </div>
                                    <div>
                                        <h4>Jagadish Chakma</h4>
                                    </div>
                                </div>
                                <div className="comment-text">
                                    <p>
                                        {comment.comment}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            </>
                        )
                    })
                }
            </div>
        </Fragment>
    );
};

export default CommentContent;