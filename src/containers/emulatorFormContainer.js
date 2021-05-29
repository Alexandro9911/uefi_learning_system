import React from "react";
import EmulatorFormCreate from "../components/EmulatorFormCreate/emulatorFormCreate";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    setDynamicMotherBoard,
    setDynamicCPU,
    setDynamicDDR,
    setDynamicHDD,
    setCpu,
    setDDR,
    setHDD,
    setMotherBoard,
    setQuantityDDR,
    setQuantityHdd,
    setCpuInputEnabled,
    setCpuInputDisabled} from "../store/emulatorCreate/actions";

class EmulatorFormContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <EmulatorFormCreate
                motherboard={this.props.motherboard}
                cpu={this.props.cpu}
                quantity_hdd={this.props.quantity_hdd}
                listHdd={this.props.listHdd}
                quantity_ddr={this.props.quantity_ddr}
                listDdr={this.props.listDdr}
                dynamicMotherboardList={this.props.dynamicMotherboardList}
                dynamicCPUList={this.props.dynamicCPUList}
                dynamicHDDList={this.props.dynamicHDDList}
                dynamicDDRList={this.props.dynamicDDRList}

                setDynamicMotherBoard={this.props.setDynamicMotherBoard}
                setDynamicCPU={this.props.setDynamicCPU}
                setQuantityHdd={this.props.setQuantityHdd}
                setQuantityDDR={this.props.setQuantityDDR}
                setDynamicHDD={this.props.setDynamicHDD}
                setDynamicDDR={this.props.setDynamicDDR}
                setMotherBoard={this.props.setMotherBoard}
                setHDD={this.props.setHDD}
                setCpu={this.props.setCpu}
                setDDR={this.props.setDDR}

                status={this.props.status}
                ena_cpu_input={this.props.ena_cpu_input}

                setCpuInputEnabled={this.props.setCpuInputEnabled}
                setCpuInputDisabled={this.props.setCpuInputDisabled}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        motherboard: state.emulatorform.motherboard,
        cpu: state.emulatorform.cpu,
        quantity_hdd: state.emulatorform.quantity_hdd,
        listHdd: state.emulatorform.listHdd,
        quantity_ddr: state.emulatorform.quantity_ddr,
        listDdr: state.emulatorform.listDdr,
        ena_cpu_input: state.emulatorform.ena_cpu_input,

        dynamicMotherboardList: state.emulatorform.dynamicMotherboardList,
        dynamicCPUList: state.emulatorform.dynamicCPUList,
        dynamicHDDList: state.emulatorform.dynamicHDDList,
        dynamicDDRList: state.emulatorform.dynamicHDDList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDynamicMotherBoard: bindActionCreators(setDynamicMotherBoard, dispatch),
        setDynamicCPU: bindActionCreators(setDynamicCPU, dispatch),
        setQuantityHdd: bindActionCreators(setQuantityHdd,dispatch),
        setQuantityDDR: bindActionCreators(setQuantityDDR,dispatch),
        setDynamicHDD: bindActionCreators(setDynamicHDD,dispatch),
        setDynamicDDR: bindActionCreators(setDynamicDDR,dispatch),

        setMotherBoard: bindActionCreators(setMotherBoard,dispatch),
        setHDD: bindActionCreators(setHDD,dispatch),
        setCpu: bindActionCreators(setCpu,dispatch),
        setDDR: bindActionCreators(setDDR,dispatch),

        setCpuInputEnabled: bindActionCreators(setCpuInputEnabled,dispatch),
        setCpuInputDisabled: bindActionCreators(setCpuInputDisabled,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmulatorFormContainer);

