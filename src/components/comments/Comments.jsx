import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase'
import './Comments.css';
import * as moment from 'moment';
import heart from '../../images/heart.png';
import heart2 from '../../images/heart2.png';
import comment from '../../images/comment.png';
import {connect } from 'react-redux';
import {compose} from 'redux';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment : "",
            comments : this.props.data,
            likes : this.props.like,
            likeState : false,
            autofocus : false
        }
        this.handleChange = (e) => {
            this.setState({
                newComment : e.target.value
            });
        }
        this.handleSubmit = (e) => {
            e.preventDefault();
            let newCom = {
                username : this.props.userName,
                text : this.state.newComment
            }
            let oldCom = this.state.comments;
            oldCom.push(newCom);
            this.setState({
                newComment : "",
                comments : oldCom
            });
            this.props.firebase.set(`Posts/${this.props.postId}/comments/`,oldCom);
        }
        this.handlelike = () => {
            if(this.state.likeState) {
                this.props.firebase.set(`Posts/${this.props.postId}/likes/`,this.state.likes-1);
                this.setState({
                    likes : this.state.likes-1
                }); 
            }
            else {
                this.props.firebase.set(`Posts/${this.props.postId}/likes/`,this.state.likes+1,(err)=>{
                });
                this.setState({
                    likes : this.state.likes+1
                });    
            }
            this.setState({
                likeState : !this.state.likeState
            });

        }
    }
    render() {
        let i = 0;
        const comments = this.state.comments;
        const time = moment(this.props.time).startOf('hour').fromNow();
        var displayContent = comments.map( (comment) => {
            i = i+1;
            return (
                <div key = {i} className = "comment">
                    <b>{comment.username} </b>
                    {comment.text}
                </div>
            );
            
        });
        return (
            <div>
                    {this.state.likeState ? <img src= {heart2} alt="" width = "32px" height = "27px" onClick = {this.handlelike}/>:<img src= {heart} alt="" width = "30px" height = "30px" onClick = {this.handlelike}/>}
                    <img src= {comment} alt="" width = "28px" height = "28px" className = "commentButton" />
                    <p className = "l"><b>{this.state.likes} likes</b></p>
                 
                {displayContent} 
                <span className="time">{time.toUpperCase()}</span>
                <hr className="line2"/>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" className ="addComment" placeholder = "Add Comment...." value = {this.state.newComment} onChange = {this.handleChange} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userName : state.firebase.profile.displayName
})


export default  compose(withFirebase,connect(mapStateToProps))(Comments);