import React from "react";
import DynamicSelectMotherboard from "../Elements/dynamicSelectMotherboard";
import DynamicSelectCpu from "../Elements/dynamicSelectCpu";

export default class EmulatorFormCreate extends React.Component {
    constructor(props) {
        super(props);

    }

    async componentDidMount(){
        let answ = '';
        let resp = await fetch("http://localhost/uefi_learning_system/selectMotherBoards.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                myid : this.props.id
            })
        })
            .then(response => response.json())
            .then(result => answ = result)
        let array= [];
        for(let i = 0; i <answ.length; i++){
            array.push(answ[i]);
        }
        this.props.setDynamicMotherBoard(array);
    }

    render() {
        return(
            <div>
                <b>Создание образа эмулятора</b>
                <br/>
                <DynamicSelectMotherboard
                motherboard={this.props.motherboard}
                dynamicMotherboardList={this.props.dynamicMotherboardList}
                setBoard={this.props.setMotherBoard}
                setDynamicCPU={this.props.setDynamicCPU}
                listCPU={this.props.dynamicCPUList}
                ena_cpu_input={this.props.ena_cpu_input}
                status={this.props.status}

                setCpuInputEnabled={this.props.setCpuInputEnabled}
                setCpuInputDisabled={this.props.setCpuInputDisabled}
                // мб еще для блокировки и определения следующих компонентов
                />
                <DynamicSelectCpu
                    cpu={this.props.cpu}
                    listCPU={this.props.dynamicCPUList}
                    setCpu={this.props.setCpu}
                    ena_cpu_input={this.props.ena_cpu_input}
                    status={this.props.status}
                />
                <h6>Выбор количества носителей информации</h6>
                <h6>Выбор количества плашек оперативной памяти</h6>
                <h6>Выбор оперативной памяти</h6>
            </div>
        )
    }
}