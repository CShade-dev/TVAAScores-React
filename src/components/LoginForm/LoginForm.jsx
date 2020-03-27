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
                document.getElementById("errormessage").hidden = false;
            } else {
                window.location.replace("http://localhost/");
            }
        }
        )
      }
    render() {
        return (
            <div className="formcontainer">
                <div className="loginheader">
                    <div className="usericon">
                        <SVG src={user} />
                    </div>
                    <p className="logintitle">LOGIN</p>
                </div>
                <div className="loginform">
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="emailinput">
                            <label>Email:</label>
                            <input type="email"  name="email" id="email" onChange={e => this.setState({ email: e.target.value})} required />
                        </div>
                        <div className="passwordinput">
                            <label>Password:</label>
                            <input type="password" name="password" id="password" onChange={e => this.setState({ password: e.target.value})} required />
                        </div>
                        <div className="submitinput">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
