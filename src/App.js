import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./components/navs/mainNavbar";
import RegistrationContainer from "./containers/both/RegistrationContainer";
import AuthContainer from "./containers/both/AuthContainer";
import UserpageContainer from "./containers/student/userpage/userpageContainer";
import JoinGroup from "./components/student/userpage/joinGroup";
import TeacherPageContainer from "./containers/teacher/TeacherPageContainer";
import TeacherTestPage from "./components/teacher/teacherTestpage/teacherTestPage";
import TeacherPracticePage from "./components/teacher/TeacherPracticePage/TeacherPracticePage";
import PracticePageContainer from "./containers/student/practicepage/practicePageContainer";
import AboutPracticePageContainer from "./containers/student/practicepage/AboutPracticePageContainer";
import EmulatorPage from "./components/emulator/EmulatorPage";
import EmulatorContainer from "./containers/emulator/emulatorContainer";

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
                    <Route path={'/teacher_page/tests>'}>
                        <TeacherTestPage/>
                    </Route>
                    <Route path={'/teacher_page/practice>'}>
                        <TeacherPracticePage/>
                    </Route>
                    <Route path={'/user_page/practice_page'}>
                        <PracticePageContainer/>
                    </Route>
                    <Route path={'/user_page/practice_page/about_task'}>
                        <AboutPracticePageContainer/>
                    </Route>
                    <Route path={'/user_page/emulator'}>
                        <EmulatorContainer/>
                    </Route>
                    <Route path={"/"}>
                        <AuthContainer/>
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
