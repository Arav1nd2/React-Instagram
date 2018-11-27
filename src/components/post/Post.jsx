import React, { Component } from 'react';
import Comments from '../comments/Comments';
import { Card,Container,CardBody , CardTitle } from 'reactstrap';
import './Post.css';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like : false,
        }
        this.handlelike = () => {
            if(!this.state.like) {
                this.props.comment.value.likes = this.props.comment.value.likes + 1;
            }
            else {
                this.props.comment.value.likes = this.props.comment.value.likes - 1;
            }
            this.setState({
                like : !this.state.like
            });
        }
    }
    render() {
        const img = this.props.comment.value.thumbnailUrl;
        const userName = this.props.comment.value.username;
        const imgPost = this.props.comment.value.imageUrl;
        return (
            <div>
                <br/>
                <Container>
                    <Card className = "postCard" >
                        <CardBody className = "header">
                            <CardTitle>
                                <span>
                                    <img src={img} alt="" width = "50px" height = "50px" className = "profilepic"/>
                                    <b className = "profileName l">{userName}</b>
                                </span>                            
                            </CardTitle>
                        </CardBody>
                        <CardBody className = "postImage">
                            <img src= {imgPost} alt="" width = "100%" />
                        </CardBody>
                        <CardBody className = "comments">
                            <Comments postId = {this.props.postId} like = {this.props.comment.value.likes} data = {this.props.comment.value.comments} time ={this.props.comment.value.timestamp} />
                        </CardBody>
                    </Card>
                    <br/>
                </Container>
            </div>
        );
    }
}


export default Post;