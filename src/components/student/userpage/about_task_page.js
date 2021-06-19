import React from "react";
import {Link} from "react-router-dom";

export default class AboutTaskRage extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }


    async onClickHandler(e) {
        let emulator_str = this.props.practice.emulator_string;
        if(this.props.practice.was_started === '0') {
            this.props.initEmulator(emulator_str);
        } else {
            this.props.initEmulatorStarted(emulator_str);
        }
        this.props.setEmulatorStarted();
    }

    render() {
        return (
            <div className="join_page">
                <h6>Практическое задание</h6>
                <div className="dropdown-divider"/>
                <div>Название: {this.props.practice.theme}</div>
                <div>Текст задания:</div>
                <div>{this.props.practice.task}</div>
                <div>{this.props.practice.emulator_string}</div>
                <Link onClick={this.onClickHandler} to={'/user_page/emulator'}
                      className="btn btn-sm btn-outline-primary">Запустить эмулятор</Link>
            </div>
        )
    }
}