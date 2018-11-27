import React, { Component } from 'react';
import Header from './components/header/Header';
import Post from './components/post/Post';
import {connect} from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import {compose } from 'redux';
import './App.css';
import  ReactLoading from 'react-loading';

class App extends Component {

  
  render() {
    let posts = [];
    let loading;
    if(this.props.data) {

      for(var i= 0; i<this.props.data.length; i++) {
        posts.push(
          <Post key = {i} comment = {this.props.data[i]}/>
        );
        }
    }
      loading = (<ReactLoading type = {"spin"} color={"grey"} className = "animation" />);
  
    return (
     <div>
       <Header />
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

export default compose(firebaseConnect(['Posts']),connect(mapStateToProps))(App);
