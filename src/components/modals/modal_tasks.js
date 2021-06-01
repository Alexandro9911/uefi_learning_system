import React from "react";

export default class Modal_tasks extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
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


    render() {
        if (+this.props.curr === +this.props.index && this.props.status) {
            const tasks = this.props.list;
            let len = Object.values(tasks).length
            if (len > 0) {
                const items = tasks.map((task, i) =>
                    <div key={i}>
                        <div>{task.theme}</div>
                        <div>{this.shortTask(task.task)}</div>
                        <div>Сроки выполнения: {this.getDeadlines(task.date_from, task.date_to)}</div>
                    </div>
                );
                return (
                    <div className="task_card">
                        <div>{items}</div>
                        <div className="dropdown-divider"/>
                        <div className="flex_btn">
                            <button className="btn btn-sm btn-outline-dark" onClick={this.onClickHandler}>Скрыть</button>
                            <button className="btn btn-sm btn-outline-dark" onClick={this.onClickHandler}>Результаты группы</button>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="task_card">
                        У этой группы нет заданий.
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