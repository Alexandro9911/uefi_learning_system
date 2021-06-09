import React from "react";

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        const elem = document.getElementById(this.props.id);
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

    componentDidMount() {
        const elem = document.getElementById(this.props.id);
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

    // mode 0 - temperature
    // mode 1 - voltage
    // mode 2 - fan speed
    render() {
        switch (this.props.mode) {
            case 0 :
                return (
                    <div>
                        <div className="flex_progress_label">
                            <div>{this.props.text}</div>
                            <div className="text-muted">
                                {this.props.current} °C / {this.props.current * 9 / 5 + 32} °F
                            </div>
                        </div>
                        <div className="line_progress_wrapper">
                            <div className="line_progress_entity" id={this.props.id}/>
                        </div>
                    </div>

                )
            case 1:
                return (
                    <div>
                        <div className="flex_progress_label">
                            <div>{this.props.text}</div>
                            <div className="text-muted">
                                {this.props.current} V
                            </div>
                        </div>
                        <div className="line_progress_wrapper">
                            <div className="line_progress_entity" id={this.props.id}/>
                        </div>
                    </div>

                )
            case 2:
                return (
                    <div>
                        <div className="flex_progress_label">
                            <div>{this.props.text}</div>
                            <div className="text-muted">
                                {this.props.current} RPM
                            </div>
                        </div>
                        <div className="line_progress_wrapper">
                            <div className="line_progress_entity" id={this.props.id}/>
                        </div>
                    </div>

                )
        }
    }
}