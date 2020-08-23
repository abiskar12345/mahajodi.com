import React, { Fragment,useState} from 'react'; 
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './register.css';

const responseFacebook= (response)=> {
  console.log(response)
};


const responseGoogle = (response) => {
  console.log(response);

};


class Login extends React.Component{
    render(){
        return(
        <div className="register-bdy">
        <div className="login-box">
             <h1>Login</h1>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username"/>
            </div>
          
            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password"/>
            </div>
          
            <input type="button" className="btn-register" value="Sign in"/>
         </div>

         <GoogleLogin
        clientId="knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={renderProps => (
          <button  className="btn-register"  icon="fa-google" onClick={renderProps.onClick} disabled={renderProps.disabled}>login with google</button>
        )}
         onSuccess={responseGoogle}
         isSignedIn={true}
         onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
         />
          <FacebookLogin
          appId="1088597931155576"
           autoLoad={true}
            fields="name,email,picture"
               callback={responseFacebook}
              cssClass="btn-register"
              icon="fa-facebook"
             />
          

         </div>
         


        )
    }


}

export default Login;