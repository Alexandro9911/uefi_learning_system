import React from "react";

export default class MarksCriteriaForm extends React.Component {
    constructor(props) {
        super(props);
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
                    <div className="critical_interval_part"/>
                    <div className="normal_interval_part"/>
                    <div className="perfect_interval_part"/>
                    <div className="normal_interval_part"/>
                    <div className="critical_interval_part"/>
                </div>
                <div>Интервал значения температуры процессора, достигнутый в ходе решения задания, который считается
                    оптимальным:</div>
                <div className="flex_interval">
                    <div className="critical_interval_part"/>
                    <div className="normal_interval_part"/>
                    <div className="perfect_interval_part"/>
                    <div className="normal_interval_part"/>
                    <div className="critical_interval_part"/>
                </div>
                <div>Интервал значения частоты процессора, достигнутый в ходе решения задания, который считается
                    оптимальным:</div>
                <div className="flex_interval">
                    <div className="critical_interval_part"/>
                    <div className="normal_interval_part"/>
                    <div className="perfect_interval_part"/>
                    <div className="normal_interval_part"/>
                    <div className="critical_interval_part"/>
                </div>
            </div>
        )
    }
}