import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./components/navs/mainNavbar";
import RegistrationContainer from "./containers/RegistrationContainer";
import AuthContainer from "./containers/AuthContainer";
import UserpageContainer from "./containers/userpageContainer";
import JoinGroup from "./components/userpage/joinGroup";
import TeacherPageContainer from "./containers/TeacherPageContainer";
import GroupsPage from "./components/teacherpage/teachergroups";

function App() {
    return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path={"/registration_page"}>
                        <RegistrationContainer/>
                    </Route>
                    <Route path={'/userpage/join_group'}>
                        <JoinGroup/>
                    </Route>
                    <Route path={"/user_page"}>
                        <UserpageContainer/>
                    </Route>
                    <Route path={"/teacher_page"}>
                        <TeacherPageContainer/>
                    </Route>
                    <Route path={"/"}>
                        <AuthContainer/>
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
