import React from "react";
import {connect} from "react-redux";
import InfoBar from "../../components/emulator/infoBar/InfoBar";
import {bindActionCreators} from "redux";
import {changeToAdvancedMode, changeToEzMode,setDateSystem,setTimeSystem} from "../../store/emulator/actions";
import {showModalDateTime,hideModalDateTime} from "../../store/emulatorModals/actions";
import DateTimeModal from "../../components/emulator/emulatorModals/dateTimeModal";
import EzModePage from "../../components/emulator/ezmode/ezModePage";
import {actionTeacherEmulator, setEmulatorClosed} from "../../store/userpage/actions";
import {initPracticeResults} from "../../store/practiceResults/actions";

class InfoBarContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("info cont : " +JSON.stringify(this.props.emulator_object))
        return (
            <div>
                <DateTimeModal
                    hideModalDateTime={this.props.hideModalDateTime}
                    showModalDateTime={this.props.showModalDateTime}
                    modal_date_time={this.props.modal_date_time}
                    setSystemDate={this.props.setDateSystem}
                    setSystemTime={this.props.setTimeSystem}
                    emulator_object={this.props.emulator_object}
                />
                <InfoBar
                    system_date={this.props.emulator_object.system_date}
                    system_time={this.props.emulator_object.system_time}
                    emulator_object={this.props.emulator_object}
                    system_name={this.props.emulator_object.cpu.system_name}
                    toEzMode={this.props.toEzMode}
                    toAdvancedMode={this.props.toAdvancedMode}
                    hideModalDateTime={this.props.hideModalDateTime}
                    showModalDateTime={this.props.showModalDateTime}
                    modal_date_time={this.props.modal_date_time}
                    emulator_mode={this.props.emulator_mode}
                    total_mem={this.props.total_mem}
                    cpu_speed={this.props.cpu_speed}

                    // to exit procedure
                    emulator={this.props.emulator}
                    id={this.props.id}
                    practice={this.props.practice}
                    setEmulatorClosed={this.props.setEmulatorClosed}
                    initPracticeResult={this.props.initPracticeResult}
                    link={this.props.link}
                    teacher_emulator={this.props.teacher_emulator}
                    actionTeacherEmulator={this.props.actionTeacherEmulator}
                    group_id={this.props.group_id}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        emulator_object: state.emulator.emulator_object,
        modal_date_time: state.emulatormodals.modal_date_time,
        emulator_mode: state.emulator.advanced_mode,
        total_mem: state.emulator.total_mem,
        cpu_speed: state.emulator.cpu_speed,


        // to exit procedure
        emulator: state.emulator,
        id: state.auth.id,
        practice: state.studentpractice.selected_practice,
        link: state.auth.link,
        teacher_emulator: state.useractivity.teacher_emulator,
        group_id: state.practiceform.group_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toEzMode: bindActionCreators(changeToEzMode,dispatch),
        toAdvancedMode: bindActionCreators(changeToAdvancedMode,dispatch),
        hideModalDateTime: bindActionCreators(hideModalDateTime,dispatch),
        showModalDateTime: bindActionCreators(showModalDateTime,dispatch),
        setTimeSystem: bindActionCreators(setTimeSystem,dispatch),
        setDateSystem: bindActionCreators(setDateSystem,dispatch),

        // to exit procedure
        setEmulatorClosed: bindActionCreators(setEmulatorClosed,dispatch),
        initPracticeResult: bindActionCreators(initPracticeResults,dispatch),
        actionTeacherEmulator: bindActionCreators(actionTeacherEmulator,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoBarContainer);