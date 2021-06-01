import React from "react";
import Modal_tasks from "../../modals/modal_tasks";
import {connect} from "react-redux";
import {setCurrentTasksGroup} from "../../../store/groupspractice/actions";
import {bindActionCreators} from "redux";
class GroupsWithPractice extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            curr_index: 0
        }
        this.onClickGroup = this.onClickGroup.bind(this);
    }

   async onClickGroup(e){

       let answ = '';
       let resp = await fetch("http://localhost/uefi_learning_system/selectPracticeForGroup.php", {
           method: "POST",
           headers: {
               "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
           },
           body: new URLSearchParams({
               for_group: e.target.value
           })
       })
           .then(response => response.json())
           .then(result => answ = result)
        this.props.setCurrListTasks(JSON.parse(JSON.stringify(answ)));
        this.props.setIndex(e.target.value);
        this.props.showTasks();
    }

    render() {
        const groups = this.props.listGroups;
        let q = groups.length;
        if(q > 0) {
            const items = groups.map((group,i) =>
                <div key={i} className="group_card">
                    <b>Группа: {group.title}</b>
                    <div>Токен: {group.token}</div>
                    <div>Описание: {group.descr}</div>
                    <button value={group.id} onClick={this.onClickGroup} className="btn btn-sm btn-outline-primary">
                        Отобразить задания группы
                    </button>
                    <Modal_tasks
                        status={this.props.modal_tasks}
                        index={group.id}
                        curr={this.props.index_group}
                        hide={this.props.hideTasks}
                        list={this.props.list_tasks_of_group}
                    />
                </div>);
            return (
                <div>{items}</div>
            )
        } else {
            return (
                <div className="join_page">
                    <h6> no groups</h6>
                </div>
            )
        }
    }
}
const mapStateToProps =(state)=>{
    return{
        list_tasks_of_group: state.practicepage.list_tasks_of_group
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setCurrListTasks: bindActionCreators(setCurrentTasksGroup,dispatch)
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(GroupsWithPractice)