import React from "react";
import DynamicSelectMotherboard from "../../Elements/dynamicSelectMotherboard";
import DynamicSelectCpu from "../../Elements/dynamicSelectCpu";
import DynamicInputQuantity from "../../Elements/dynamicInputQuantity";
import DynamicSelectMemory from "../../Elements/dynamicSelectMemory";
import EmulatorFormContainer from "../../../containers/teacher/emulatorFormContainer";
import MarksCriteriaForm from "./MarksCriteriaForm";

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

                setDynamicHDD={this.props.setDynamicHDD}
                // мб еще для блокировки и определения следующих компонентов
                />
                <DynamicSelectCpu
                    cpu={this.props.cpu}
                    board={this.props.motherboard}
                    listCPU={this.props.dynamicCPUList}
                    setCpu={this.props.setCpu}
                    ena_cpu_input={this.props.ena_cpu_input}
                    status={this.props.status}
                    setDynamicDDR={this.props.setDynamicDDR}
                />
                {/*Блок для носителей информации */}
                <br/>
                <h6>Носители информации</h6>
                <DynamicInputQuantity
                    status={this.props.status}
                    motherboard={this.props.motherboard}
                    setQuantityHDD={this.props.setQuantityHdd}
                    quantity_hdd={this.props.quantity_hdd}

                    setDynamicHDD={this.props.setDynamicHDD}
                    dynamicHDDList={this.props.dynamicHDDList}

                    setSelectsDisabled={this.props.setSelectsDisabled}
                    setSelectsEnabled={this.props.setSelectsEnabled}
                    ena_create_selects = {this.props.ena_create_selects}
                    listHdd={this.props.listHdd}
                    setHDD={this.props.setHDD}
                    mode={0}
                />
                <DynamicSelectMemory id={1}
                    setSelectsDisabled={this.props.setSelectsDisabled}
                    setSelectsEnabled={this.props.setSelectsEnabled}
                    ena_create_selects = {this.props.ena_create_selects}

                    status={this.props.status}
                    dynamicList={this.props.dynamicHDDList}
                    quantity={this.props.quantity_hdd}
                    list={this.props.listHdd}
                    set={this.props.setHDD}
                    mode={0}
                />
                {/*Блок для оперативной памяти*/}
                <br/>
                <h6>Оперативная память</h6>
                <DynamicInputQuantity
                    status={this.props.status}
                    motherboard={this.props.motherboard}
                    setQuantityHDD={this.props.setQuantityDDR}
                    quantity_hdd={this.props.quantity_ddr}

                    setDynamicHDD={this.props.setDynamicDDR}
                    dynamicHDDList={this.props.dynamicDDRList}

                    setSelectsDisabled={this.props.setSelectsDDRdisabled}
                    setSelectsEnabled={this.props.setSelectsDDRenabled}
                    ena_create_selects = {this.props.ena_create_ddr_selects}
                    listHdd={this.props.listDdr}
                    setHDD={this.props.setDDR}
                    mode={1}
                />
                <DynamicSelectMemory id={2}
                    setSelectsDisabled={this.props.setSelectsDDRdisabled}
                    setSelectsEnabled={this.props.setSelectsDDRenabled}
                    ena_create_selects = {this.props.ena_create_ddr_selects}

                    status={this.props.status}
                    dynamicList={this.props.dynamicDDRList}
                    quantity={this.props.quantity_ddr}
                    list={this.props.listDdr}
                    set={this.props.setDDR}
                    mode={1}
                />
                <br/>
                <div className="dropdown-divider"/>
                <MarksCriteriaForm/>
            </div>
        )
    }
}