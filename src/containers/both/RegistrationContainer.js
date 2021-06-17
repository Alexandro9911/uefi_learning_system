import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "../../components/registration/Registration";
import {connect} from "react-redux";
import {setEmail, setPassw,setRepPassw,setLastName,setMidName,setName,setWhoIam} from "../../store/registration/actions";
import {bindActionCreators} from "redux";

class RegistrationContainer extends Component {

    render() {
        return (
            <Registration email={this.props.email}
                          password={this.props.password}
                          repeatPassw={this.props.repeatPassw}
                          name={this.props.name}
                          middle_name={this.props.middle_name}
                          last_name={this.props.last_name}
                          who_i_am={this.props.who_i_am}

                          setName={this.props.setName}
                          setLastName={this.props.setLastName}
                          setMiddleName={this.props.setMidName}
                          setWhoIam={this.props.setWhoIam}
                          setEmail={this.props.setEmail}
                          setPassw={this.props.setPassw}
                          setRepPassw={this.props.setRepPassw}

            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.registration.name,
        last_name: state.registration.last_name,
        middle_name: state.registration.middle_name,
        who_i_am: state.registration.who_i_am,
        email: state.registration.email,
        password: state.registration.password,
        repeatPassw: state.registration.repeatPassw,
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setEmail: bindActionCreators(setEmail,dispatch),
        setPassw: bindActionCreators(setPassw,dispatch),
        setRepPassw: bindActionCreators(setRepPassw,dispatch),
        setName: bindActionCreators(setName,dispatch),
        setWhoIam: bindActionCreators(setWhoIam,dispatch),
        setMidName: bindActionCreators(setMidName,dispatch),
        setLastName: bindActionCreators(setLastName,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegistrationContainer);