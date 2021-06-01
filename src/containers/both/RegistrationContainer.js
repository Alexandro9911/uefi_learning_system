import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "../../components/registration/Registration";
import {connect} from "react-redux";
import {setEmail, setPassw,setRepPassw} from "../../store/registration/actions";
import {bindActionCreators} from "redux";

class RegistrationContainer extends Component {

    render() {
        return (
            <Registration email={this.props.email}
                          password={this.props.password}
                          repeatPassw={this.props.repeatPassw}
                          setEmail={this.props.setEmail}
                          setPassw={this.props.setPassw}
                          setRepPassw={this.props.setRepPassw}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassw: state.registration.repeatPassw,
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setEmail: bindActionCreators(setEmail,dispatch),
        setPassw: bindActionCreators(setPassw,dispatch),
        setRepPassw: bindActionCreators(setRepPassw,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegistrationContainer);