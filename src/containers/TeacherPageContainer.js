import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setAuthBad, setAuthSuccess, setEmail, setPassw} from "../store/auth/actions";
import {showModalDownloading,hideModalDownloading} from "../store/modals/actions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TeachersNavs from "../components/navs/TeacherNavs";
import GroupsPage from "../components/teacherpage/teachergroups";
import {initList} from "../store/groups/actions";
import TeacherTestPage from "../components/teacherTestpage/teacherTestPage";
import TeacherPracticePage from "../components/TeacherPracticePage/TeacherPracticePage";
import Modal_dowloading from "../components/modals/modal_dowloading";

class TeacherPageContainer extends Component {
    constructor(props) {
        super(props);

    }

    showFio() {
        return this.props.fio;
    }


    render() {
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
                        <TeacherTestPage/>
                    </Route>
                    <Route path={'/teacher_page/practice'}>
                        <TeacherPracticePage/>
                    </Route>
                </Switch>
            </div>
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
        groups: state.listgroups.groups,
        modal_downloading_status: state.modals.modal_downloading
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
        hideModalDownloading: bindActionCreators(hideModalDownloading,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPageContainer);