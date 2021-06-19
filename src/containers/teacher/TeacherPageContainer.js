import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setAuthBad, setAuthSuccess, setEmail, setPassw} from "../../store/auth/actions";
import {showModalDownloading,hideModalDownloading} from "../../store/modals/actions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TeachersNavs from "../../components/navs/TeacherNavs";
import GroupsPage from "../../components/teacher/teacherpage/teachergroups";
import {initList} from "../../store/groups/actions";
import TeacherTestPage from "../../components/teacher/teacherTestpage/teacherTestPage";
import TeacherPracticePage from "../../components/teacher/TeacherPracticePage/TeacherPracticePage";
import {setListGroupGractice} from "../../store/groupspractice/actions";
import TeacherTestPageContainer from "./teacherTestPageContainer";
import EmulatorContainer from "../emulator/emulatorContainer";

class TeacherPageContainer extends Component {
    constructor(props) {
        super(props);

    }

    showFio() {
        return this.props.fio;
    }

    async componentDidMount() {
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/getTeacherGroups.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                ovner: this.props.id
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let groups =JSON.parse(JSON.stringify(answ))
        this.props.setListGroupPractice(groups);
    }

    render() {
        if(this.props.emulator_status){
            return(
                <div>
                    <div className="grid-container-user">
                        <Switch>
                            <Route path={'/teacher_page/groups'}>
                                <GroupsPage/>
                            </Route>
                            <Route path={'/teacher_page/tests'}>
                                <TeacherTestPageContainer/>
                            </Route>
                            <Route path={'/teacher_page/practice'}>
                                <TeacherPracticePage
                                    listGroups={this.props.listGroups}
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
                )
        } else {
            return (
                <div>
                    <div className="grid-container-user">
                        <div className="mainbar">
                            <h6>{this.showFio()}</h6>
                            <TeachersNavs/>
                        </div>
                        <Switch>
                            <Route path={'/teacher_page/groups'}>
                                <GroupsPage/>
                            </Route>
                            <Route path={'/teacher_page/tests'}>
                                <TeacherTestPageContainer/>
                            </Route>
                            <Route path={'/teacher_page/practice'}>
                                <TeacherPracticePage
                                    listGroups={this.props.listGroups}
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        id: state.auth.id,
        fio: state.auth.fio,
        auth: state.auth.auth,
        groups: state.listgroups.groups,
        modal_downloading_status: state.modals.modal_downloading,
        listGroups: state.practicepage.listGroups,
        emulator_status: state.useractivity.emulator_status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(setEmail, dispatch),
        setPassw: bindActionCreators(setPassw, dispatch),
        setAuthSuccess: bindActionCreators(setAuthSuccess, dispatch),
        setAuthBad: bindActionCreators(setAuthBad, dispatch),
        initGroups: bindActionCreators(initList,dispatch),
        showModalDownloading: bindActionCreators(showModalDownloading,dispatch),
        hideModalDownloading: bindActionCreators(hideModalDownloading,dispatch),
        setListGroupPractice: bindActionCreators(setListGroupGractice,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPageContainer);