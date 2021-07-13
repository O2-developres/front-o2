import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './LoginButton'
import Header from './Header';
import Footer from './Footer';
import { Card } from 'react-bootstrap';
import '../Login.css';

class Login extends React.Component {
  render() {
    return(
     <>
           <Header/>

           <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          
            <LoginButton/>
         
        </Card.Body>
      </Card>
            
          <Footer/>
      </>
    )
  }
}

export default Login;