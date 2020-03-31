import React, { Component } from 'react';
import SVG from "react-inlinesvg";
import user from "../../assets/user.svg";
import "./styles.scss";
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return state
}
const mapDispatchToProps = dispatch => {
    return {
      authenticate: () => dispatch({ type: 'ADMINAUTH' }),
    }
  }

class AdminLoginForm extends Component {
    state = {
        email: "",
        password: "",
    };
    onSubmit = async e => {
        e.preventDefault();
        await fetch(
          "http://localhost:9000/admin",
            {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
              },
            }
        )
        .then(res => {
            if (res.status === 403) {
                document.getElementById("errormessage").style.display = "flex";
                document.getElementById("formcontainer").style.height = "425px";
            } if (res.status === 200) {
                this.props.authenticate()
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
                    <p className="logintitle">ADMIN LOGIN</p>
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
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginForm);
