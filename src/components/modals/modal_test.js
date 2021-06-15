import React from "react";

export default class Modal_test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.ena_tests && this.props.group_id === this.props.selected) {
            if(this.props.group_tests) {
                return (
                    <div>list</div>
                )
            } else {
                return (
                    <div>пусто</div>
                )
            }
        } else {
            return (<div></div>)
        }
    }
}