import React from "react";
import {connect} from "react-redux";

export default class DateTimeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            month:'',
            year: '',

            sec: '',
            min: '',
            hour: '',
        }
        this.onClickHandler = this.onClickHandler.bind(this);

        this.onDayChange = this.onDayChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.onSecChange = this.onSecChange.bind(this);
        this.onMinChange = this.onMinChange.bind(this);
        this.onHourChange = this.onHourChange.bind(this);
        this.onCloseHandler = this.onCloseHandler.bind(this);
    }

    onDayChange(e){
        this.setState({day: e.target.value});
    }
    onMonthChange(e){
        this.setState({month: e.target.value});
    }
    onYearChange(e){
        this.setState({year: e.target.value});
    }

    onSecChange(e){
        this.setState({sec: e.target.value});
    }
    onMinChange(e){
        this.setState({min: e.target.value});
    }
    onHourChange(e){
        this.setState({hour: e.target.value});
    }


    onClickHandler() {
        let system_date = this.state.day +'-'+this.state.month+'-'+this.state.year
        let system_time = this.state.hour+':'+this.state.min;
        let obj = this.props.emulator_object
        obj.system_date = system_date;
        obj.system_time = system_time
        this.props.setSystemDate(obj);
        this.props.hideModalDateTime();
    }

    onCloseHandler() {
        this.props.hideModalDateTime();
    }

    render() {
        if(this.props.modal_date_time) {
            return (
                <div className='modal_date_time'>
                    <h4 className="text-center">System date time</h4>
                    <br/>
                    <form>
                        <div className="info_flex">
                            <h5>Time:</h5>
                            <input className="modal-inputs" value={this.state.hour} onChange={this.onHourChange}/>
                            <input className="modal-inputs" value={this.state.min} onChange={this.onMinChange}/>
                            <input className="modal-inputs" value={this.state.sec} onChange={this.onSecChange}/>
                            <h5>Hours/Minutes/Seconds</h5>
                        </div>
                        <br/>
                        <div className="info_flex">
                            <h5>Date:</h5>
                            <input className="modal-inputs" value={this.state.day} onChange={this.onDayChange}/>
                            <input className="modal-inputs" value={this.state.month} onChange={this.onMonthChange}/>
                            <input className="modal-inputs" value={this.state.year} onChange={this.onYearChange}/>
                            <h5>Day/Month/Year</h5>
                        </div>
                        <br/>
                        <div className="flex_btn">
                            <button className="simple-button" onClick={this.onClickHandler}>Сохранить</button>
                            <button className="simple-button" onClick={this.onCloseHandler}>Закрыть</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}