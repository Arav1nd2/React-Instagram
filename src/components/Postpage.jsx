import React, { Component } from 'react';
import Header from './header/Header';
import Post from './post/Post';
import {connect} from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import {compose } from 'redux';
import './Postpage.css';
import  ReactLoading from 'react-loading';

class Postpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search : ""
        }
        this.onChange  = (e) => {
          this.setState({
            search : e.target.value
          });
          console.log(this.state.search);
        }
      }
        
    render() {
        let posts = [];
        let loading;
        if(this.props.data) {
    
          for(var i= 0; i<this.props.data.length; i++) {
            if(this.props.data[i].value.username.toLowerCase().includes(this.state.search.toLocaleLowerCase())) {
              posts.push(
                <Post key = {i} comment = {this.props.data[i]} postId = {i+1} />
              );  
            }
            }
        }
          loading = (<ReactLoading type = {"spin"} color={"grey"} className = "animation" />);
    
        return (
            <div>
               <Header search = {this.onChange} />
                 {this.props.data ? posts : loading}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data : state.firebase.ordered.Posts,
    }
    
  }

export default compose(firebaseConnect(['Posts']),connect(mapStateToProps))(Postpage);