import React from "react";
import EmulatorContainer from "../../../containers/emulator/emulatorContainer";

export default class PracticeResultTeacher extends React.Component{
    constructor(props) {
        super(props);
        this.countMark = this.countMark.bind(this);
        this.onEmulatorStart = this.onEmulatorStart.bind(this);
    }

    getWord(value){
        if(value){
            return 'Да'
        } else {
            return 'Нет'
        }
    }

    getResultDateTime(value) {
        switch (value) {
            case 'not setup':
                return 'Не выполнено'
            case 'not req':
                return 'Не заявлено'
            case 'setup':
                return 'Выполнено'
            case 'not matter':
                return 'Выполнено, но не требовалось'
        }
    }

    // match_date_time:"not setup"
    // match_bus_freq:"not req"
    // match_ratio_limit_mode:false
    countMark(o){
        let counter = 0;
        if(o.match_temp_interval){
            counter+=1;
        }
        if(o.match_freq_cpu_interval){
            counter+=1;
        }
        if(o.match_date_time === 'setup' || o.match_date_time === 'not req'){
            counter+=1;
        }
        if(o.match_bus_freq === 'setup' || o.match_bus_freq === 'not req'){
            counter+=1;
        }
        if(o.match_ratio_limit_mode){
            counter+=1;
        }
        if(counter <3){
            return 2
        }

        if(counter === 3){
            return 3
        }
        if(counter >3 && counter <=4) {
            return 4
        }
        if(counter === 5) {
            return 5
        }
    }

    onEmulatorStart(){
        this.props.actionResultsPage(false)
        let emul = this.props.result.emulator_string;
        this.props.initEmulatorStarted(emul);
        this.props.startEmulator()
    }

    render() {
        let result = JSON.parse(this.props.result.points);
        return (
            <div>
                <div className="btn btn-outline-primary" onClick={(event) =>
                {this.props.actionResultsPage(false)}
                }>Назад</div>
                <h5>Результаты выполнения практического задания</h5>
                <div className="wrapper">
                    <div>Значение температуры ЦП: <b>{result.temperature_cpu} °C</b></div>
                    <div className="flex_interval">
                        <button className="perfect_interval_part" value={'[30,55]'}>30 - 55</button>
                        <button className="normal_interval_part" value={'[56,70]'}>56-70</button>
                        <button className="critical_interval_part" value={'[71,100]'}>71-100</button>
                    </div>
                    <div>Соответствие заявленному интервалу: <b>{this.getWord(result.match_temp_interval)}</b></div>
                    <div className="dropdown-divider"/>
                    <div>Значение частоты ЦП: <b>{result.cpu_speed} MHz</b></div>
                    <div className="flex_interval">
                        <button className="critical_interval_part" value={'[0,1.99]'}>min - 2.0</button>
                        <button className="normal_interval_part" value={'[2.0,2.39]'}>2.0 - 2.4</button>
                        <button className="perfect_interval_part" value={'[2.4,2.79]'}>2.4 - 2.8</button>
                        <button className="normal_interval_part" value={'[2.8,3.09]'}>2.9 - 3.1</button>
                        <button className="critical_interval_part" value={'[3.1,3.5]'}>3.1 -max</button>
                    </div>
                    <div>Соответствие заявленному интервалу: <b>{this.getWord(result.match_freq_cpu_interval)}</b></div>
                    <div className="dropdown-divider"/>
                    <div>Требование установить дату и время: <b>{this.getResultDateTime(result.match_date_time)}</b></div>
                    <div>Требование не изменять частоту системной шины ЦП <b>{this.getResultDateTime(result.match_bus_freq)}</b></div>
                    <div>Установлен требуемый CPU core ratio limit: <b>{this.getWord(result.match_ratio_limit_mode)}</b></div>
                    <div className="dropdown-divider"/>
                    <br/>
                    <h6>Рекомендуемая оценка: {this.countMark(result)}</h6>
                    <small>(i) Оценка носит рекомендательный характер. Основное решение определения оценки принимает преподаватель</small>
                    <br/>
                    <div className="btn btn-outline-primary" onClick={this.onEmulatorStart}>Посмотреть решение в эмуляторе</div>
                </div>
            </div>
        )
    }
}