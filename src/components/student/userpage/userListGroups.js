import React from "react";


export default class UserListGroups extends React.Component {

    render() {
        const groups = Object.values(this.props.userGroups);
        let q = groups.length;
        if(q > 0) {
            let items;
            items = Object.values(this.props.userGroups).map((group, i) =>
                <div key={i} className="group_card">
                    <div>Группа: {group.group_title}</div>
                    <div>Описание: {group.group_descr}</div>
                    <div>Владелец: {group.ovner_lastname} {group.ovner_firstname} {group.ovner_middlename}</div>
                    <button className="btn btn-sm border-danger">
                        <small>Покинуть группу</small>
                    </button>
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

