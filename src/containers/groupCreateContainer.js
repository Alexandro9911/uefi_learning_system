import React from "react";
import FormGroupCreate from "../components/teacherpage/groupCreateForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addGroup, clearForm, setDescr, setTitle, setToken} from "../store/groups/actions";

class GroupCreateContainer extends React.Component {

    render() {
        return (
            <FormGroupCreate
            title={this.props.title}
            token={this.props.token}
            descr={this.props.descr}
            ovner={this.props.ovner}
            groups={this.props.groups}
            addGroup={this.props.addGroup}
            setTitle={this.props.setTitle}
            setToken={this.props.setToken}
            setDescr={this.props.setDescr}
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
        groups: state.listgroups.groups
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

export default  connect(mapStateToProps,mapDispatchToProps)(GroupCreateContainer)