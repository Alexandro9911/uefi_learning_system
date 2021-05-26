import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setAuthBad, setAuthSuccess, setEmail, setPassw} from "../store/auth/actions";
import {setUserGroups,setUserPractice,setUserTests} from "../store/userpage/actions";
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
// select groups
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/getStudentGroups.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                myid : this.props.id
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let array= [];
        for(let i = 0; i <answ.length; i++){
            array.push(answ[i]);
        }

       this.props.setUserGroups(array);
// select tests

// select practice
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
                        <JoinGroup myId={this.props.id} userGroups={this.props.userGroups}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        id: state.auth.id,
        fio: state.auth.fio,
        userGroups:  state.useractivity.groups,
        userTests: state.useractivity.tests,
        userPractice: state.useractivity.practice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(setEmail, dispatch),
        setUserGroups: bindActionCreators(setUserGroups, dispatch),
        setUserPractice: bindActionCreators(setUserPractice,dispatch),
        setUserTests: bindActionCreators(setUserTests,dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserpageContainer);