import React from "react";


export default class GroupList extends React.Component {

    render() {
        const groups = this.props.groups;
        let q = groups.length;
        if(q > 0) {
            const items = groups.map((group,i) =>
                <div key={i} className="card card-body">
                    <div>Группа: {group.title}</div>
                    <div>Токен: {group.token}</div>
                    <div>Описание: {group.descr}</div>
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