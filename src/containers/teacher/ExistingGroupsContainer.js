import React from "react";
import FormGroupCreate from "../../components/teacher/teacherpage/groupCreateForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addGroup, clearForm, setDescr, setTitle, setToken} from "../../store/groups/actions";
import GroupList from "../../components/teacher/teacherpage/groupList";

class ExistingGroupsContainer extends React.Component {

    render() {
        return (
            <GroupList
                ovner={this.props.ovner}
                groups={this.props.groups}
                clearForm={this.props.clearForm}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.groupcreate.title,
        token: state.groupcreate.token,
        descr: state.groupcreate.descr,
        ovner: state.auth.id,
        groups: Object.values(state.listgroups.groups)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitle: bindActionCreators(setTitle, dispatch),
        setToken: bindActionCreators(setToken,dispatch),
        setDescr: bindActionCreators(setDescr,dispatch),
        clearForm: bindActionCreators(clearForm,dispatch),
        addGroup: bindActionCreators(addGroup,dispatch)
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ExistingGroupsContainer)