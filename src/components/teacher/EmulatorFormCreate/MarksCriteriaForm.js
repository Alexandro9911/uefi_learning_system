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
                    <div className="critical_interval_part"><div>min - 2.0</div></div>
                    <div className="normal_interval_part"> <div>2.0 - 2.4</div></div>
                    <div className="perfect_interval_part">  <div>2.4 - 2.8</div></div>
                    <div className="normal_interval_part"><div>2.9 - 3.1</div></div>
                    <div className="critical_interval_part"><div>3.1 -max</div></div>
                </div>
                <div>Интервал значения температуры процессора, достигнутый в ходе решения задания, который считается
                    оптимальным:</div>
                <div className="flex_interval">
                    <div className="perfect_interval_part"><div>30 - 55</div></div>
                    <div className="normal_interval_part"><div>56-70</div></div>
                    <div className="critical_interval_part"><div>71-100</div></div>
                </div>
                {/*<div>Интервал значения напряжения процессора, достигнутый в ходе решения задания, который считается*/}
                {/*    оптимальным:</div>*/}
                {/*<div className="flex_interval">*/}
                {/*    <div className="critical_interval_part"><div>min - 2.0</div></div>*/}
                {/*    <div className="normal_interval_part"><div>min - 2.0</div></div>*/}
                {/*    <div className="perfect_interval_part"><div>min - 2.0</div></div>*/}
                {/*    <div className="normal_interval_part"><div>min - 2.0</div></div>*/}
                {/*    <div className="critical_interval_part"><div>min - 2.0</div></div>*/}
                {/*</div>*/}


            </div>
        )
    }
}