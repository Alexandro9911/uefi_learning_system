import React from "react";

export default class EmulatorFormCreate extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <h6>Создание образа эмулятора:</h6>
                <h6>Выбор материнской платы</h6>
                <h6>Выбор процессора</h6>
                <h6>Выбор количества носителей информации</h6>
                <h6>Выбор количества плашек оперативной памяти</h6>
                <h6>Выбор оперативной памяти</h6>
            </div>
        )
    }
}