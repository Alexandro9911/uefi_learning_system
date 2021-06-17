import React from "react";
import DynamicSelect from "../../Elements/dynamicSelect";
import EmulatorFormContainer from "../../../containers/teacher/emulatorFormContainer";
import GroupSelect from "../../Elements/groupSelect";
import ListQuest from "../../Elements/listQuest";
import TeacherTestPage from "./teacherTestPage";

export default class TestCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.onClickOpen = this.onClickOpen.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeQuantQuest = this.changeQuantQuest.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }



    onClickClose() {
        this.props.closeForm()
    }

    onClickOpen() {
        this.props.openForm()
    }

    changeTheme(e){
        this.props.setThemeTest(e.target.value);
    }

    async onClickSubmit(e){
        let test = {
            questions: JSON.stringify(this.props.current_test),
            theme: this.props.theme_test,
            group: this.props.for_group_test
        }

        let quest_no_answ = this.props.current_test;
        for(let i = 0; i < quest_no_answ.length; i++){
            quest_no_answ[i]['answ'] = ""
        }

        let answ = "";
        let resp = await fetch("http://localhost/uefi_learning_system/createTest.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                test: JSON.stringify(test),
                for_user: JSON.stringify(quest_no_answ),
                len: this.props.quant_quest,
                myId: this.props.myId
            })
        })
            .then(response => response.text())
            .then(result => answ = result)
        if(answ === 'success'){
            alert("Тест сохранен");
            this.props.closeForm();
        } else {
            alert(answ);
        }
    }

    changeQuantQuest(e){
        let q = +e.target.value;
        this.props.setQuantQuest(+e.target.value);
        let test = [];
        for(let i = 0; i < q; i++){
            test.push({
                num: i,
                quest: "",
                answ: ""
            });
        }
        this.props.setCurrentTest(test);
    }

    render() {
        if (this.props.form_create_ena) {
            return (
                <div>
                    <div className="btn btn-outline-primary" onClick={this.onClickClose}>
                        Создать тест -
                    </div>
                    <br/>
                    <div className="modal_create_practice">
                        <h5>Создание теста</h5>
                        <div className="dropdown-divider"/>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Выберите группу, для которой предназначается тест:
                            </label>
                            <GroupSelect
                                groups={this.props.groups}
                                for_group_test={this.props.for_group_test}
                                setGroup={this.props.setForGroupTest}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Тема</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Тема"
                                   onChange={this.changeTheme}
                                   value={this.props.theme_test}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Количество вопросов</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Тема"
                                   onChange={this.changeQuantQuest}
                                   value={this.props.quant_quest}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Создание вопросов</label>
                            <ListQuest
                            quantity={this.props.quant_quest}
                            curr_selection={this.props.curr_selection}
                            current_test={this.props.current_test}
                            setCurrSelection={this.props.setCurrSelection}
                            />
                        </div>
                        <br/>
                        <div className="flex_simple">
                            <div className="btn btn-outline-success" onClick={this.onClickSubmit}>Сохранить</div>
                            <div className="btn btn-outline-danger" onClick={this.onClickClose}>Отмена</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="btn btn-outline-primary" onClick={this.onClickOpen}>
                        Создать тест +
                    </div>
                </div>
            )
        }
    }
}