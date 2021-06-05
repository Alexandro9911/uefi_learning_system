import React from "react";
import ProgressBar from "../../Elements/progressBar";

export default class MonitorMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickPlus = this.onClickPlus.bind(this);
        this.onClickMinus = this.onClickMinus.bind(this);
    }

    onClickPlus(){
        let curr = this.props.temperature_cpu;
        this.props.setTemp(curr+1);
    }

    onClickMinus() {
        let curr = this.props.temperature_cpu;
        this.props.setTemp(curr-1);
    }

    render() {
        return (
            <div className="second_focus">
                <div className="flex_monitor">
                    <div>
                        <div>Temperature</div>
                        <ProgressBar min={0} max={100} current={this.props.temperature_cpu} id={'temp1'} text={'CPU'}/>
                        <ProgressBar min={0} max={100} current={this.props.temperature_mb} id={'temp2'} text={'MB'}/>
                    </div>
                    <button className="simple-button" onClick={this.onClickMinus}>- 10</button>
                    <button className="simple-button" onClick={this.onClickPlus}>+ 10</button>
                </div>
            </div>
        )
    }
}