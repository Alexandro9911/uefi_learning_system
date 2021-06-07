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
                        <div className="flex_simple">
                            <ProgressBar min={0} max={100} current={this.props.temperature_cpu} mode={0}  id={'temp1'} text={'CPU'}/>
                        </div>
                        <div className="flex_simple">
                            <ProgressBar min={0} max={100} current={this.props.temperature_mb} mode={0} id={'temp2'} text={'MB'}/>
                        </div>
                    </div>
                    <div>
                        <div>Voltage</div>
                        <div className="flex_simple">
                            <ProgressBar min={0} max={100} current={this.props.temperature_cpu} mode={1} id={'vol1'} text={'CPU'}/>
                            <ProgressBar min={0} max={100} current={this.props.temperature_mb} mode={1} id={'vol2'} text={'5 V'}/>
                        </div>
                        <div className="flex_simple">
                            <ProgressBar min={0} max={100} current={this.props.temperature_cpu} mode={1} id={'vol3'} text={'3.3 V'}/>
                            <ProgressBar min={0} max={100} current={this.props.temperature_mb} mode={1} id={'vol4'} text={'12 V'}/>
                        </div>
                    </div>
                    <div>
                        <div>Fan speed</div>
                        <div className="flex_simple">
                            <ProgressBar min={0} max={1800} current={this.props.cpu_fan_speed} mode={2} id={'fan1'} text={'CPU fan'}/>
                            {/*<ProgressBar min={0} max={100} current={this.props.temperature_mb} mode={2} id={'fan2'} text={'PWR fan'}/>*/}
                        </div>
                        <div className="flex_simple">
                            {/*<ProgressBar min={0} max={0} current={0} mode={2} id={'fan3'} text={'N/A'}/>*/}
                            {/*<ProgressBar min={0} max={0} current={0} mode={2} id={'fan4'} text={'N/A'}/>*/}
                        </div>
                    </div>
                    {/*<button className="simple-button" onClick={this.onClickMinus}>- 10</button>*/}
                    {/*<button className="simple-button" onClick={this.onClickPlus}>+ 10</button>*/}
                </div>
            </div>
        )
    }
}