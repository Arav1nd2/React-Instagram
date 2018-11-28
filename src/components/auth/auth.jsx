import React, { Component } from 'react';
import {Container, Card, Input,Button} from 'reactstrap';
import { withFirebase } from 'react-redux-firebase'
import './auth.css';
import logo from '../../images/logo.png';
import fb from '../../images/fb.png';
import  {notify} from 'react-notify-toast';


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        }
        this.handleChange = (e) => {
            this.setState({
                [e.target.type] : e.target.value
            });
        }
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.firebase.login(this.state).then(() => {
                notify.show("Login Success!","success");
            }).catch((err) => {
                notify.show(err.message,"error");
            });
        
        }
    }


    render() {
        return (
            <div>
                <Container>
                    <Card className = "logincard">
                        <img src={logo} alt="" className = "logo"/>
                        <form onSubmit = {this.handleSubmit} action = "">
                            <Input type="email" className = "form" placeholder = "Phone number,Username, or Email" onChange = {this.handleChange}/>
                            <Input type="password" className = "form" placeholder = "Password" onChange = {this.handleChange}/>
                            <Button type = "submit" color = "primary" className = "submit"><b>Log in</b></Button>
                        </form>
                        <br/>
                        <Container className = 'line'>
                            <h6 className="timeline">Or</h6>
                        </Container>
                        <br/>
                            <span>
                                <img src={fb} alt="" width="15px" className = "fb"/>
                                 <div className="fbtext">Log in with Facebook</div> 
                            </span>
                        <br/><br/>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default withFirebase(Auth);