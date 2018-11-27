import React, { Component } from 'react';
import {Container, Card, Input,Button} from 'reactstrap';
import './auth.css';
import logo from '../../images/logo.png';
import fb from '../../images/fb.png';

class Auth extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card className = "logincard">
                        <img src={logo} alt="" className = "logo"/>
                        <form>
                            <Input type="email" className = "form" placeholder = "Phone number,Username, or Email"/>
                            <Input type="password" className = "form" placeholder = "Password"/>
                            <Button color = "primary" className = "submit"><b>Log in</b></Button>
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

export default Auth;