import React from "react";
import DynamicSelect from "../Elements/dynamicSelect";
import EmulatorFormContainer from "../../containers/emulatorFormContainer";

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

    hideModal(){
        this.props.hideModalPractice()
    }

    changeTaskString(e){
        this.props.setTaskString(e.target.value);
    }

    changeTheme(e){
        this.props.setTheme(e.target.value);
    }

    changeDateFrom(e){
        this.props.setDateFrom(e.target.value);
    }
    changeDateTo(e){
        this.props.setDateTo(e.target.value);
    }

   async onClickSave(e){
        this.props.showModalDownloading();

    }

    render() {
        if(this.props.status) {
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
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Выполнить задание с </label>
                                <input type="text" className="form-control" placeholder="Выполнение с ..."
                                       aria-label="First name"
                                onChange={this.changeDateFrom}
                                value={this.props.date_from}/>
                            </div>
                            <div className="col">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Выполнить задание по</label>
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
                        <button onClick={this.onClickSave} className="btn btn-sm btn-outline-success">Coхранить</button>
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}