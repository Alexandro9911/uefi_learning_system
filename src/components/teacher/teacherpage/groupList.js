import React from "react";


export default class GroupList extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            list: []
        }
    }

    componentDidMount() {
        this.setState({list : this.props.groups});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        const groups = this.state.list;
        let q = groups.length;
        if(q > 0) {
            const items = groups.map((group,i) =>
                <div key={i} className="group_card">
                    <div>Группа: {group.title}</div>
                    <div>Токен: {group.token}</div>
                    <div>Описание: {group.descr}</div>
                    <div className="btn btn-sm btn-outline-danger">Удалить группу</div>
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