import React, { Component } from 'react';
import "./styles.scss";
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminLoginPage from '../AdminLoginPage/AdminLoginPage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { authenticated: state.adminauthenticated }
}
const mapDispatchToProps = dispatch => {
    return {
      authenticate: () => dispatch({ type: 'ADMINAUTH' }),
      deauthenticate: () => dispatch({ type: 'ADMINDEAUTH' })
    }
  }

class AdminPage extends Component {
    state = {};

    componentWillMount(){
        fetch(
            "http://localhost:9000/admin", 
            {method: 'GET'}
        )
        .then(res => {
            if (res.status === 403) {
                this.props.deauthenticate()
            } if (res.status === 200){
                this.props.authenticate()
            }
        })
    }

    render() {
        return this.props.authenticated ? (
            <>
            <AdminHeader />
            <h1>Sucessful Login!</h1>
            </>
        ) : (
            <>
            <AdminHeader />
            <AdminLoginPage/>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
