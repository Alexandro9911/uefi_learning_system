import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "../components/auth/Auth";
import {connect} from "react-redux";
import {setEmail, setPassw,setAuthSuccess,setAuthBad} from "../store/auth/actions";
import {bindActionCreators} from "redux";
import {initList} from "../store/groups/actions";

class AuthContainer extends Component {

    render() {
        return (
            <Auth email={this.props.email}
                  password={this.props.password}
                  fio={this.props.fio}
                  id={this.props.id}
                  link={this.props.link}
                  groups={this.props.groups}
                  setEmail={this.props.setEmail}
                  setPassw={this.props.setPassw}
                  setAuthSuccess={this.props.setAuthSuccess}
                  setAuthBad={this.props.setAuthBad}
                  initList={this.props.initList}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        id: state.auth.id,
        fio: state.auth.fio,
        auth: state.auth.auth,
        link: state.auth.link,
        groups: state.listgroups.groups
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(setEmail,dispatch),
        setPassw: bindActionCreators(setPassw,dispatch),
        setAuthSuccess: bindActionCreators(setAuthSuccess,dispatch),
        setAuthBad: bindActionCreators(setAuthBad,dispatch),
        initList: bindActionCreators(initList,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);