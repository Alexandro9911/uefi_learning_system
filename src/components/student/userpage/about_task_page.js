import React from "react";
import {Link} from "react-router-dom";

export default class AboutTaskRage extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    //
    // theme(pin):'Второе практич…ние '
    // for_group(pin):'1'
    // group_id(pin):'1'
    // group_descr(pin):'Тест'
    // group_title(pin):'Группа 3530901…курс'
    // ovner_middlename(pin):'Петрович'
    // ovner_firstname(pin):'Петр'
    // ovner_lastname(pin):'Петров'
    // task(pin):'Проверить работу'
    // date_from(pin):null
    // date_to(pin):null
    // emulator_id(pin):'2'

    async onClickHandler(e) {
        let emulator_str = this.props.practice.emulator_string;
        this.props.initEmulator(emulator_str);
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