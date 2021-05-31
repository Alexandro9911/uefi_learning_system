import React from "react";
import {bindActionCreators} from "redux";
import {
    hideCreatePractice,
    hideModalDownloading,
    showCreatePractice,
    showModalDownloading
} from "../../store/modals/actions";
import ModalCreatePractice from "../modals/modal_practice";
import {connect} from "react-redux";
import {setForGroupPractice,changeTaskString, setTheme,setDateFrom,setDateTo} from "../../store/practiceCreate/actions";
import Modal_dowloading from "../modals/modal_dowloading";

class TeacherPracticePage extends React.Component {
    constructor(props) {
        super(props);

        this.onClickModal = this.onClickModal.bind(this);
    }

    onClickModal(){
        this.props.showModalPractice();
    }

    render() {
        return (
            <div className="join_page">
                <button className="btn btn-sm btn-outline-dark" onClick={this.onClickModal}>Создать практическое
                    задание
                </button>
                <ModalCreatePractice hideModalPractice={this.props.hideModalPractice}
                                     status={this.props.status}
                                     groups={this.props.groups}
                                     group_id={this.props.group_id}
                                     task_string={this.props.task_string}
                                     group_title={this.props.group_title}
                                     theme={this.props.theme}
                                     date_to={this.props.date_to}
                                     date_from={this.props.date_from}

                                     setGroup={this.props.setForGroupPractice}
                                     setTaskString={this.props.setTaskString}
                                     setDateTo={this.props.setDateTo}
                                     setTheme={this.props.setTheme}
                                     setDateFrom={this.props.setDateFrom}
                                     modal_downloading_status={this.props.modal_downloading_status}
                                     showModalDownloading={this.props.showModalDownloading}
                                     hideModalDownloading={this.props.hideModalDownloading}
                />
                <div>Here y can se your existing practice for groups</div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        status: state.modals.modal_practice,
        groups: state.listgroups.groups,
        group_id: state.practiceform.group_id,
        group_title: state.practiceform.group_title,
        task_string: state.practiceform.task_string,
        date_to: state.practiceform.date_to,
        theme: state.practiceform.theme,
        date_from: state.practiceform.date_from,
        modal_downloading_status: state.modals.modal_downloading
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        hideModalPractice: bindActionCreators(hideCreatePractice, dispatch),
        showModalPractice: bindActionCreators(showCreatePractice, dispatch),
        setForGroupPractice: bindActionCreators(setForGroupPractice,dispatch),
        setTaskString: bindActionCreators(changeTaskString,dispatch),
        setTheme: bindActionCreators(setTheme,dispatch),
        setDateTo: bindActionCreators(setDateTo,dispatch),
        setDateFrom: bindActionCreators(setDateFrom,dispatch),
        showModalDownloading: bindActionCreators(showModalDownloading,dispatch),
        hideModalDownloading: bindActionCreators(hideModalDownloading,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TeacherPracticePage);