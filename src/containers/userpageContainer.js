import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setAuthBad, setAuthSuccess, setEmail, setPassw} from "../store/auth/actions";
import UserNavs from "../components/navs/StudentNavs";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import JoinGroup from "../components/userpage/joinGroup";
import {initList} from "../store/groups/actions";

class UserpageContainer extends Component {
    constructor(props) {
        super(props);

    }

    async componentDidMount() {
        let answ
        let resp = await fetch("http://localhost/uefi_learning_system/getStudentGroups.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                id : this.props.id
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
            // тут надо вытащить группы студента в которых он состоит.

    }

    showFio() {
        return this.props.fio;
    }

    render() {
        return (
            <div className="grid-container-user">
                <div className="mainbar">
                    <h6>{this.showFio()}</h6>
                    <UserNavs/>
                </div>
                <Switch>
                    <Route path={'/user_page/join_group'}>
                        <JoinGroup/>
                    </Route>
                </Switch>
            </div>
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
        groups: state.listgroups.groups
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(setEmail, dispatch),
        setPassw: bindActionCreators(setPassw, dispatch),
        setAuthSuccess: bindActionCreators(setAuthSuccess, dispatch),
        setAuthBad: bindActionCreators(setAuthBad, dispatch),
        initGroups: bindActionCreators(initList,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserpageContainer);