import React from "react";
import DateTimeModal from "../../emulatorModals/dateTimeModal";
export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.setDate = this.setDate.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    setTime(){
        this.props.showModalDateTime();
    }

    setDate(){
        this.props.showModalDateTime();
    }

    render() {
        let curr_date = this.props.emulator_object.system_date;
        let curr_time = this.props.emulator_object.system_time;

        let cpu_system_name = this.props.emulator_object.cpu.system_name
        return (
            <div className='container_bios'>
                <h5 className="text-colored">BIOS information</h5>
                <div className='grid_layout text-muted text-light'>
                    <h5>BIOS version</h5><h5>0610 x64</h5>
                    <h5>Build date</h5><h5>03/23/2017</h5>
                    <h5>ME Firmware version</h5><h5>11.6.0.1126</h5>
                    <h5>PCH stepping</h5><h5>AO</h5>
                </div>
                <br/>
                <h5 className='text-colored'>Processor information</h5>
                <div className='grid_layout text-muted text-light'>
                    <h5>Brand string</h5><h5>{cpu_system_name}</h5>
                    <h5>Frequency</h5><h5>{this.props.cpu_speed}</h5>
                </div>
                <div className='grid_layout text-muted text-light'>
                    <h5>Total Memory</h5><h5>{this.props.total_mem}</h5>
                    <h5>Memory Frequency</h5><h5>2187 MHz</h5>
                </div>
                <br/>
                <div className="grid_layout text-light" onClick={this.setDate}>
                    <h5>System date</h5><h5>{curr_date}</h5>
                </div>
                <div className="grid_layout text-light" onClick={this.setTime}>
                    <h5>System time</h5><h5>{curr_time}</h5>
                </div>
                <br/>
            </div>
        )
    }
}