import React from "react";
import GroupCreateContainer from "../../../containers/teacher/groupCreateContainer";
import ExistingGroupsContainer from "../../../containers/teacher/ExistingGroupsContainer";

export default class GroupsPage extends React.Component {

    render() {
        return (
            <div className="join_page">
                <GroupCreateContainer/>
                <ExistingGroupsContainer/>
            </div>
        )
    }
}