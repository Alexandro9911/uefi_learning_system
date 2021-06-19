import React from "react";
import TimerBlock from "./TimerBlock";
import SystemInfo from "./system_info";
import EzModePage from "../ezmode/ezModePage";
import {initPracticeResults} from "../../../store/practiceResults/actions";

export default class InfoBar extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeModeHandler = this.onChangeModeHandler.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
        this.onClickExit = this.onClickExit.bind(this);
    }

    onChangeModeHandler(e) {
        e.preventDefault();
        if(this.props.emulator_mode){
            this.props.toEzMode()
        } else {
            this.props.toAdvancedMode()
        }
    }

    titleHandler() {
        if(this.props.emulator_mode){
            return 'to Ez mode'
        } else {
            return 'to Advanced mode'
        }
    }

   async onClickExit(e){
        if(this.props.link === '/user_page') {
            let emul_str = JSON.stringify(this.props.emulator);

            this.props.setEmulatorClosed()

            let group_id = +this.props.practice.group_id;
            let practice_id = +this.props.practice.id;
            let emulator_id = +this.props.practice.emulator_id;

            let answ = ''
            let resp = await fetch("http://localhost/uefi_learning_system/getEmulResult.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams({
                    myId: this.props.id,
                    group_id: group_id,
                    practice_id: practice_id,
                    emulator_id: emulator_id,
                    emul_str: emul_str
                })
            })
                .then(response => response.json())
                .then(result => answ = result)
            this.props.initPracticeResult(JSON.stringify(answ));
        } else {
            if(this.props.teacher_emulator){
                alert('done?');

                let answ1 = '';
                let resp1 = await fetch("http://localhost/uefi_learning_system/finallizeCreating.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: new URLSearchParams({
                        group_id: this.props.group_id,
                        practice_id: this.props.emulator_object.practice_id,
                        emulator_params: JSON.stringify(this.props.emulator),
                    })
                })
                    .then(response => response.text())
                    .then(result => answ1 = result)
                if (answ1 === "success") {
                } else {
                    alert("some error");
                }
                this.props.setEmulatorClosed();
                this.props.actionTeacherEmulator(false);
            }else {
                this.props.setEmulatorClosed()
            }
        }
    }


    render() {
        let name = this.titleHandler()
        console.log("em info bar : " +JSON.stringify(this.props.emulator_object))
        return (
            <div className='top_bar_emulator'>
                <TimerBlock
                    time={this.props.system_time}
                    date={this.props.system_date}
                    hideModalDateTime={this.props.hideModalDateTime}
                    showModalDateTime={this.props.showModalDateTime}
                    modal_date_time={this.props.modal_date_time}
                />
                <div>
                    <SystemInfo system_name={this.props.system_name}
                                total_mem={this.props.total_mem}
                                cpu_speed={this.props.cpu_speed}
                    />
                </div>
                <div>
                    <div className="simple-button" onClick={this.onChangeModeHandler}>{name}</div>
                    <br/>
                    <div  onClick={this.onClickExit} className="simple-button">save and exit</div>
                </div>
            </div>
        )
    }
}