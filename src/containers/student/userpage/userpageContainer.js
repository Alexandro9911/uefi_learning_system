import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setEmail} from "../../../store/auth/actions";
import {setUserGroups,setUserPractice,setUserTests} from "../../../store/userpage/actions";
import UserNavs from "../../../components/navs/StudentNavs";
import {
    Switch,
    Route
} from "react-router-dom";
import JoinGroup from "../../../components/student/userpage/joinGroup";
import PracticePageContainer from "../practicepage/practicePageContainer";
import {setStudentsPractice} from "../../../store/practice_student/actions";
import AboutPracticePageContainer from "../practicepage/AboutPracticePageContainer";
import EmulatorContainer from "../../emulator/emulatorContainer";
import MainBar from "../../../components/student/userpage/mainBar";
import TestPage from "../../../components/student/testPage/testPage";
import TestPageContainer from "../testpage/testPageContainer";

class UserpageContainer extends Component {
    constructor(props) {
        super(props);

        this.selectPractice = this.selectPractice.bind(this);
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
        this.selectPractice();
       this.props.setUserGroups(array);
// select tests
    }

    async selectPractice(){
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/selectStudentPractice.php", {
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
            this.props.setListPractice(JSON.parse(JSON.stringify(answ)));
    }

    render() {
        if(this.props.emulator_status){
            return (
                <Switch>
                    <Route path={'/user_page/join_group'}>
                        <JoinGroup myId={this.props.id} userGroups={this.props.userGroups}/>
                    </Route>
                    <Route path={'/user_page/practice_page'}>
                        <PracticePageContainer/>
                    </Route>
                    <Route path={'/user_page/test_page'}>
                        <TestPageContainer/>
                    </Route>
                    <Route path={'/user_page/emulator'}>
                        <EmulatorContainer/>
                    </Route>
                    <Route path={'/user_page/practice_page/about_task'}>
                        <AboutPracticePageContainer/>
                    </Route>
                </Switch>
            )
        } else {
            return (
                <div className="grid-container-user">
                    <MainBar
                        emulator_status={this.props.emulator_status}
                        fio={this.props.fio}
                    />
                    <Switch>
                        <Route path={'/user_page/practice_page/about_task'}>
                            <AboutPracticePageContainer/>
                        </Route>
                        <Route path={'/user_page/practice_page'}>
                            <PracticePageContainer/>
                        </Route>
                        <Route path={'/user_page/join_group'}>
                            <JoinGroup myId={this.props.id} userGroups={this.props.userGroups}/>
                        </Route>
                        <Route path={'/user_page/emulator'}>
                            <EmulatorContainer/>
                        </Route>
                    </Switch>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        id: state.auth.id,
        fio: state.auth.fio,
        userGroups:  state.useractivity.groups,
        userTests: state.useractivity.tests,
        userPractice: state.useractivity.practice,
        emulator_status: state.useractivity.emulator_status
        // emul
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(setEmail, dispatch),
        setUserGroups: bindActionCreators(setUserGroups, dispatch),
        setUserPractice: bindActionCreators(setUserPractice,dispatch),
        setUserTests: bindActionCreators(setUserTests,dispatch),
        setListPractice: bindActionCreators(setStudentsPractice,dispatch)

        // emul
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserpageContainer);