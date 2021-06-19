import React from "react";
import Modal_tasks from "../../modals/modal_tasks";
import {connect} from "react-redux";
import {actionEnaListRes, setCurrentTasksGroup} from "../../../store/groupspractice/actions";
import {bindActionCreators} from "redux";
import EmulatorResultContainer from "../../../containers/emulator/emulatorResultContainer";
import {
    actionResultsPage,
    initPracticeResults,
    setListResults,
    setPracticeResult
} from "../../../store/practiceResults/actions";
import ListPracticeRes from "./listPracticeRes";
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
        if(this.props.ena_list_res){
            return (
                <ListPracticeRes
                    actionEnaListRes={this.props.actionEnaListRes}
                    list_results={this.props.list_results}
                    actionResultsPage={this.props.actionResultsPage}
                    setPracticeResult={this.props.setPracticeResult}
                />
            )
        } else {
            const groups = this.props.listGroups;
            let q = groups.length;
            if (q > 0) {
                const items = groups.map((group, i) =>
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
                            setListResults={this.props.setListResults}
                            actionEnaListRes={this.props.actionEnaListRes}
                        />
                    </div>);
                return (
                    <div>
                        <div>{items}</div>
                    </div>
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
}
const mapStateToProps =(state)=>{
    return{
        list_tasks_of_group: state.practicepage.list_tasks_of_group,
        list_results: state.practiceresult.listResults,
        ena_list_res: state.practicepage.ena_list_res
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setCurrListTasks: bindActionCreators(setCurrentTasksGroup,dispatch),
        setListResults: bindActionCreators(setListResults,dispatch),
        actionEnaListRes: bindActionCreators(actionEnaListRes,dispatch),
        actionResultsPage: bindActionCreators(actionResultsPage,dispatch),
        setPracticeResult: bindActionCreators(setPracticeResult,dispatch),

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(GroupsWithPractice)