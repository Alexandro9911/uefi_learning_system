import React from "react";

export default class MarksCriteriaForm extends React.Component {
    constructor(props) {
        super(props);

        this.onClickIntervalFreq = this.onClickIntervalFreq.bind(this);
        this.onClickIntervalTemp = this.onClickIntervalTemp.bind(this);
    }

    onClickIntervalFreq(e){
        e.preventDefault()
        this.props.setIntervalCpuFreq(JSON.parse(e.target.value));
    }

    onClickIntervalTemp(e){
        e.preventDefault()
        this.props.setIntervalTemp(JSON.parse(e.target.value));
    }

    getBool(str){
        if(str === 'true'){
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            <div>
                <h6>Критерии оценки</h6>
                <div className="small">(i) Изменение критерия оценки позволяют задать интервалы значений параметра системы,
                    и сопоставить каждому интервалу оценочную характеристику</div>
                <br/>
                <div>Интервал значения частоты процессора, достигнутый в ходе решения задания, который считается
                    оптимальным:</div>
                <div className="flex_interval">
                    <button className="critical_interval_part" value={'[0,1.99]'}
                            onClick={this.onClickIntervalFreq} >min - 2.0</button>
                    <button className="normal_interval_part" value={'[2.0,2.39]'}
                            onClick={this.onClickIntervalFreq}>2.0 - 2.4</button>
                    <button className="perfect_interval_part" value={'[2.4,2.79]'}
                            onClick={this.onClickIntervalFreq}>2.4 - 2.8</button>
                    <button className="normal_interval_part" value={'[2.8,3.09]'}
                            onClick={this.onClickIntervalFreq}>2.9 - 3.1</button>
                    <button className="critical_interval_part" value={'[3.1,3.5]'}
                            onClick={this.onClickIntervalFreq}>3.1 -max</button>
                </div>
                <div>Выбрано: [{this.props.interval_freq_cpu[0]} - {this.props.interval_freq_cpu[1]}]</div>
                <br/>
                <div>Интервал значения температуры процессора, достигнутый в ходе решения задания, который считается
                    оптимальным:</div>
                <div className="flex_interval">
                    <button className="perfect_interval_part" value={'[30,55]'}
                            onClick={this.onClickIntervalTemp}>30 - 55</button>
                    <button className="normal_interval_part" value={'[56,70]'}
                            onClick={this.onClickIntervalTemp}>56-70</button>
                    <button className="critical_interval_part" value={'[71,100]'}
                            onClick={this.onClickIntervalTemp}>71-100</button>
                </div>
                <div>Выбрано: [{this.props.interval_temp[0]} - {this.props.interval_temp[1]}]</div>
                <br/>
                <div>
                    <small>(i) Выбор требований к работе студента</small>
                </div>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Синхронизировать тайминги оперативной памяти
                </label>
                <select className="form-select" aria-label="Default select example"
                    onChange={ (event) =>
                        this.props.setSyncDDR(this.getBool(event.target.value)) } >
                        <option value={false}>Нет</option>
                        <option value={true}>Да</option>
                </select>
                <br/>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Создать RAID массив
                </label>
                <select className="form-select" aria-label="Default select example"
                        onChange={ (event) =>
                            this.props.setRaidCreated(this.getBool(event.target.value)) }>
                    <option value={false}>Нет</option>
                    <option value={true}>Да</option>
                </select>
                <br/>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Изменить дату и время
                </label>
                <select className="form-select" aria-label="Default select example"
                        onChange={ (event) =>
                            this.props.setDateTimeSetup(this.getBool(event.target.value)) }>
                    <option value={false}>Нет</option>
                    <option value={true}>Да</option>
                </select>
                <br/>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Изменять частоту системной шины
                </label>
                <select className="form-select" aria-label="Default select example"
                        onChange={ (event) =>
                            this.props.setBusFreqModifyed(this.getBool(event.target.value)) }>
                    <option value={false}>Нет</option>
                    <option value={true}>Да</option>
                </select>
                <br/>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Режим процессорного множителя
                </label>
                <select className="form-select" aria-label="Default select example"
                        onChange={ (event) =>
                            this.props.setModeMult(event.target.value) }>
                    <option value={'auto'}>[sync all]</option>
                    <option value={'per core'}>[per core]</option>
                </select>
                <br/>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Установить значения CPU core ratio limit:
                </label>
                <input type="text" className="form-control" placeholder="xx ..."
                       aria-label="First name"
                       value={this.props.req_mult}
                       onChange={(event) =>
                           this.props.setReqMult(+event.target.value) }
                />
                <br/>
            </div>
        )
    }
}