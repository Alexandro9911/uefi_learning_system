import React from "react";

export default class Modal_tasks extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickResults = this.onClickResults.bind(this);
    }

    onClickHandler(e) {
        this.props.hide();
    }

    shortTask(task){
        let newStr = "";
        if(task.length < 45){
            return task
        } else {
            for (let i = 0; i < 45; i++) {
                newStr += task[i];
            }
            newStr = newStr + "..."
            return newStr;
        }
    }

    getDeadlines(date_from,date_to){
        if(date_from === null && date_to === null){
            return 'Неограничено'
        } else {
            if( date_to !== null && date_from === null){
                return 'Выполнить до '+date_to
            } else {
                return 'Выполнить с '+date_from +' по '+date_to;
            }
        }
    }

    async onClickResults(e){
        let index = e.target.value;
        let task = this.props.list[+index];

        let practice_id = task.id;
        let group_id = task.for_group;
        let emulator_id = task.emulator_id;
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/selectPracticeResultsGroup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                 practice_id: practice_id,
                 group_id: group_id,
                 emulator_id: emulator_id
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
            this.props.setListResults(JSON.stringify(answ));
            this.props.actionEnaListRes(true);
    }

    render() {
        if (+this.props.curr === +this.props.index && this.props.status) {
            const tasks = this.props.list;
            let len = Object.values(tasks).length
            if (len > 0) {
                const items = tasks.map((task, i) =>
                    <div key={i} className="card">
                        <div className="card-body">
                            <div>{task.theme}</div>
                            <div>{this.shortTask(task.task)}</div>
                            <div>Сроки выполнения: {this.getDeadlines(task.date_from, task.date_to)}</div>
                            <button className="btn btn-sm btn-outline-dark" value={i} onClick={this.onClickResults}>Результаты группы</button>
                        </div>
                    </div>
                );
                return (
                    <div>
                        <br/>
                        <div>{items}</div>
                        <div className="dropdown-divider"/>
                        <div className="flex_btn">
                            <button className="btn btn-sm btn-outline-dark" onClick={this.onClickHandler}>Скрыть</button>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <br/>
                        <div className="card card-body">
                            У этой группы нет заданий.
                        </div>
                        <br/>
                        <button className="btn btn-sm btn-outline-dark" onClick={this.onClickHandler}>Скрыть</button>
                    </div>
                );
            }
        } else {
            return (<div></div>);
        }
    }
}