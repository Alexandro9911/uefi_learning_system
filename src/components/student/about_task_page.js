import React from "react";

export default class AboutTaskRage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="join_page">
                <h6>Конкретное практическое задание</h6>
                <div>Тема: {this.props.practice.theme}</div>
            </div>
        )
    }
}