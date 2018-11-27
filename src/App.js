import React, { Component } from 'react';
import Postpage from './components/Postpage';
import {connect } from 'react-redux';
import Auth from './components/auth/auth';

class App extends Component {
  
  render() {
  
    return (
     <div>
       {this.props.loginState ? <Postpage /> : <Auth/>}
     </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      loginState : !state.firebase.auth.isEmpty
    }
}

export default connect(mapStateToProps)(App);
