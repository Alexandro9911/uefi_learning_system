import React from "react";

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        const elem = document.getElementById("temp");
        let min = this.props.min;
        let max = this.props.max;
        let curr = min + this.props.current;
        let w = curr;
        if (w >= 90) {
            elem.style.background = "#e01313"
        } else {
            elem.style.background = "#39e013"
        }
        w = (+curr * 100) / +max;
        if (w <= max && w >= min) {
            w = (+curr * 100) / +max;
            elem.style.width = w + '%';
        }
    }

    render() {
        return (
            <div className="line_progress_wrapper">
                <div className="line_progress_entity" id='temp'/>
            </div>
        )
    }
}