import React from "react";
import DynamicSelect from "../Elements/dynamicSelect";
import EmulatorFormContainer from "../../containers/teacher/emulatorFormContainer";
import {Link} from "react-router-dom";

export default class ModalCreatePractice extends React.Component {
    constructor(props) {
        super(props);

        this.hideModal = this.hideModal.bind(this);
        this.changeTaskString = this.changeTaskString.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeDateFrom = this.changeDateFrom.bind(this);
        this.changeDateTo = this.changeDateTo.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    hideModal() {
        this.props.hideModalPractice()
    }

    changeTaskString(e) {
        this.props.setTaskString(e.target.value);
    }

    changeTheme(e) {
        this.props.setTheme(e.target.value);
    }

    changeDateFrom(e) {
        this.props.setDateFrom(e.target.value);
    }

    changeDateTo(e) {
        this.props.setDateTo(e.target.value);
    }

    async onClickSave(e) {
        this.props.showModalDownloading();
        alert("Cейчас вы будете перенаправлены в эмулятор, для того чтобы внести правки в задание." +
            " После выхода из эмулятора задание автоматически сохранится и разошлется пользователям.")
        let emulator_params = {
            motherboard: this.props.motherboard,
            cpu: this.props.cpu,
            listHdd: this.props.listHdd,
            listDdr: this.props.listDdr
        }

        let about_ovner = {
            group_id: this.props.group_id,
            group_title: this.props.group_title,
            task_string: this.props.task_string,
            theme: this.props.theme,
            date_from: this.props.date_from,
            date_to: this.props.date_to,
            ovner_id: this.props.myid
        }

        let critetia = {
            interval_temp: this.props.interval_temp,
            interval_freq_cpu: this.props.interval_freq_cpu,
            sync_ddr: this.props.sync_ddr,
            raid_created: this.props.raid_created,
            date_time_setup: this.props.date_time_setup,
            bus_freq_modifyed: this.props.bus_freq_modifyed,
            mode_mult: this.props.mode_mult,
            req_mult: this.props.req_mult,
            req_mult_array: this.props.req_mult_array,
            state_cores: this.props.state_cores,
            boot_priority: this.props.boot_priority,
        }

        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/createEmulator.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                emulator_params: JSON.stringify(emulator_params),
                about_ovner: JSON.stringify(about_ovner),
                criteria: JSON.stringify(critetia)
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        //here some code with data about emulator to server
        // here some code to get response with settings for emulator from server
        let emul = JSON.parse(JSON.stringify(answ));

        // alert(answ);
        this.props.initEmulator(JSON.stringify(answ));
        this.props.hideModalDownloading();
        this.props.hideModalPractice();
        this.props.actionTeacherEmulator(true);
        this.props.setEmulatorStarted();
    }

    render() {
        if (this.props.status) {
            return (
                <div className="modal_create_practice">
                    <h5>Создание практического задания</h5>
                    <div className="dropdown-divider"/>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Выберите группу, для которой предназначается задание:
                            </label>
                            <DynamicSelect
                                groups={this.props.groups}
                                group_id={this.props.group_id}
                                group_title={this.props.group_title}
                                setGroup={this.props.setGroup}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Тема</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Тема"
                                   onChange={this.changeTheme}
                                   value={this.props.theme}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Текст задания</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                      value={this.props.task_string}
                                      onChange={this.changeTaskString}
                            />
                        </div>
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Выполнить задание
                                    с </label>
                                <input type="text" className="form-control" placeholder="Выполнение с ..."
                                       aria-label="First name"
                                       onChange={this.changeDateFrom}
                                       value={this.props.date_from}/>
                            </div>
                            <div className="col">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Выполнить задание
                                    по</label>
                                <input type="text" className="form-control" placeholder="Выполнить до ..."
                                       aria-label="Last name"
                                       onChange={this.changeDateTo}
                                       value={this.props.date_to}/>
                            </div>
                        </div>
                        <br/>
                        <div className="dropdown-divider"/>
                        <br/>
                        <EmulatorFormContainer status={this.props.status}/>
                    </form>
                    <div className="flex_perf">
                        <button onClick={this.hideModal} className="btn btn-sm btn-outline-danger">Закрыть</button>
                        <div  onClick={this.onClickSave} className="btn btn-sm btn-outline-success">
                            Coхранить
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}