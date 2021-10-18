import firebase from "firebase/app";
import "firebase/auth";
import React, { Fragment, useState } from 'react';
import firebaseConfig from '../../firebaseConfig';
import Loading from "../../Spinner/Loading";
import CommentContent from './CommentContent';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Comment = ({id}) => {
    const [user, setUser] = useState("https://th.bing.com/th/id/OIP.0miyOJMoCeGLhaeCAYQiDwHaHa?w=191&h=191&c=7&o=5&pid=1.7");
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const localeProfile = JSON.parse(localStorage.getItem('jUser')) || {};
    const profile = localeProfile.photoURL || user;
    const handleCommentChange = (e) => {
        const newComment = {...comment};
        newComment['comment'] = e.target.value;
        setComment(newComment);
    }


    // comment submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(comment.comment !== null && comment.comment){
            const user = localStorage.getItem('jUser');
            // insert comment
            if(user){
                const {token} = JSON.parse(user);
                const userCommentInfo = {...comment, id, token};
                setLoading(true);
                fetch('https://intense-shelf-11310.herokuapp.com/comment', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(userCommentInfo)
                })
                .then(res => res.json())
                .then(data => {
                    setLoading(false);
                    setSuccess(!success);
                    e.target.reset();
                })

            }else{
                // signin user
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    const user = result.user;
                    const {displayName, email, photoURL} = user;
                    setLoading(true);
                    fetch('https://intense-shelf-11310.herokuapp.com/user/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({displayName, email, photoURL})
                    })
                    .then(res => res.json())
                    .then(data => {
                        setUser(data.photoURL);
                        localStorage.setItem('jUser', JSON.stringify(data));
                        setLoading(false);
                    })
                
                }).catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // var email = error.email;
                    // var credential = error.credential;
                });
            }
        }    
    }
    return (
        <Fragment>
            <div className="comment">
                <div className="user">
                    <div className="profile">
                        <img className="circle-rounded" src={profile} alt="user"/>
                    </div>
                    <div className="profile-title">
                        Leave a comment
                    </div>
                </div>
                <div className="comment-box">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <textarea name="comment" onChange={handleCommentChange} className="comment-field form-control" placeholder="Write a comment..."></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info float-right">{loading ? <Loading/> : 'Comment'}</button>
                        </div>
                    </form>
                </div>
            </div>
            <CommentContent id={id} success={success}/>
        </Fragment>
    );
};

export default Comment;