import React from "react";
import ProgressBar from "../../Elements/progressBar";

export default class MonitorMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickPlus = this.onClickPlus.bind(this);
        this.onClickMinus = this.onClickMinus.bind(this);
    }
    componentDidMount() {
        this.props.setTemp(30);
    }

    onClickPlus(){
        let curr = this.props.temperature;
        this.props.setTemp(curr+10);
    }

    onClickMinus() {
        let curr = this.props.temperature;
        this.props.setTemp(curr-10);
    }

    render() {
        return (
            <div className="second_focus">
                <div className="flex_monitor">
                    <button className="simple-button" onClick={this.onClickMinus}>- 10</button>
                    <button className="simple-button" onClick={this.onClickPlus}>+ 10</button>
                    <ProgressBar min={0} max={100} current={this.props.temperature} id={'temp'}/>
                </div>
            </div>
        )
    }
}