import React, { Component } from 'react';
import SVG from "react-inlinesvg";
import user from "../../assets/user.svg";
import "./styles.scss";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };
    onSubmit = async e => {
        console.log(this.state)
        e.preventDefault();
        await fetch(
          "http://localhost:9000/login",
            {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
              },
            }
        )
        .then(res => {
            if (res.status === 401) {
                document.getElementById("errormessage").style.display = "flex";
                document.getElementById("formcontainer").style.height = "425px";
            } if (res.status === 200) {
                window.location.assign("http://localhost:3000/");
            }
        }
        )
      }
    render() {
        return (
            <div className="formcontainer" id="formcontainer">
                <div className="loginheader">
                    <div className="usericon">
                        <SVG src={user} />
                    </div>
                    <p className="logintitle">LOGIN</p>
                </div>
                <div id="errormessage">
                    <p className="errormessagetext">Incorrect Email/Password!</p>
                </div>
                <div className="loginform">
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="emailinput">
                            <input type="email"  name="email" id="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value})} required />
                        </div>
                        <div className="passwordinput">
                            <input type="password" name="password" id="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value})} required />
                        </div>
                        <div className="submitinput">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
                <a className="forgotlogin" href="mailto:tvaasports@gmail.com?Subject=Forgot%20Password">Forgot your login?</a>
            </div>
        );
    }
}

export default LoginForm;
