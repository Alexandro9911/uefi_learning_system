import React from "react";
export default class MonitorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container_bios">
                <div className="grid_layout">
                    <h5>CPU temperature</h5>
                    <h5>{this.props.temperature_cpu} C</h5>
                    <h5>MB temperature</h5>
                    <h5>{this.props.temperature_mb} C</h5>
                    <h5>CPU fan speed</h5>
                    <h5>{this.props.cpu_fan_speed} RPM</h5>
                    <h5>CPU voltage</h5>
                    <h5>{this.props.voltage_cpu} V</h5>
                    <h5>3.3 V</h5>
                    <h5>{this.props.voltage_low} V</h5>
                    <h5>5.0 V</h5>
                    <h5>{this.props.voltage_mid} V</h5>
                    <h5>12 V</h5>
                    <h5>{this.props.voltage_height} V</h5>
                </div>
            </div>
        )
    }
}