import React from "react";
import {bindActionCreators} from "redux";
import {
    hideCreatePractice,
    hideModalDownloading,
    showCreatePractice,
    showModalDownloading,
    showTasks,
    hideTasks,
    setIndex
} from "../../../store/modals/actions";
import ModalCreatePractice from "../../modals/modal_practice";
import {connect} from "react-redux";
import {setForGroupPractice,changeTaskString, setTheme,setDateFrom,setDateTo} from "../../../store/practiceCreate/actions";
import {
    setCpu, setCpuInputDisabled, setCpuInputEnabled, setDDR,
    setDynamicCPU, setDynamicDDR,
    setDynamicHDD,
    setDynamicMotherBoard, setHDD, setMotherBoard,
    setQuantityDDR,
    setQuantityHdd, setSelectsDDRdisabled, setSelectsDDRenabled, setSelectsDisabled, setSelectsEnabled
} from "../../../store/emulatorCreate/actions";
import GroupsWithPractice from "./GroupsWithPractice";
import {initEmulatorStore} from "../../../store/emulator/actions";
import {actionTeacherEmulator, setEmulatorStarted} from "../../../store/userpage/actions";
import EmulatorResultContainer from "../../../containers/emulator/emulatorResultContainer";
import {actionResultsPage} from "../../../store/practiceResults/actions";
import EmulatorContainer from "../../../containers/emulator/emulatorContainer";
import EmulatorPage from "../../emulator/EmulatorPage";

class TeacherPracticePage extends React.Component {
    constructor(props) {
        super(props);

        this.onClickModal = this.onClickModal.bind(this);
    }

    onClickModal(){
        this.props.showModalPractice();
    }


    render() {
        if(this.props.ena_results){
            return (
                    <EmulatorResultContainer
                        result={this.props.results}
                        actionResultsPage={this.props.actionResultsPage}
                    />
            )
        } else {
            if(this.props.emulator_status){
                return (
                    // <EmulatorPage
                    //     emulator_status={this.props.advanced_mode}
                    //     emulator_object={this.props.emulator_object}
                    //     modal_warning={this.props.modal_warning}
                    //     modal_warning_text={this.props.modal_warning_text}
                    //     actionModalWarning={this.props.actionModalWarning}
                    // />
                    <EmulatorContainer/>
                )
            } else {
                return (
                    <div className="join_page">
                        <button className="btn btn-sm btn-outline-dark" onClick={this.onClickModal}>Создать практическое
                            задание
                        </button>
                        <ModalCreatePractice hideModalPractice={this.props.hideModalPractice}
                                             status={this.props.status}
                                             groups={this.props.groups}
                                             group_id={this.props.group_id}
                                             task_string={this.props.task_string}
                                             group_title={this.props.group_title}
                                             theme={this.props.theme}
                                             date_to={this.props.date_to}
                                             date_from={this.props.date_from}

                                             setGroup={this.props.setForGroupPractice}
                                             setTaskString={this.props.setTaskString}
                                             setDateTo={this.props.setDateTo}
                                             setTheme={this.props.setTheme}
                                             setDateFrom={this.props.setDateFrom}
                                             modal_downloading_status={this.props.modal_downloading_status}
                                             showModalDownloading={this.props.showModalDownloading}
                                             hideModalDownloading={this.props.hideModalDownloading}
                                             myid={this.props.myid}
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

                                             ena_cpu_input={this.props.ena_cpu_input}

                                             setCpuInputEnabled={this.props.setCpuInputEnabled}
                                             setCpuInputDisabled={this.props.setCpuInputDisabled}

                                             setSelectsDisabled={this.props.setSelectsDisabled}
                                             setSelectsEnabled={this.props.setSelectsEnabled}
                                             ena_create_selects={this.props.ena_create_selects}

                                             setSelectsDDRdisabled={this.props.setSelectsDDRdisabled}
                                             setSelectsDDRenabled={this.props.setSelectsDDRenabled}
                                             ena_create_ddr_selects={this.props.ena_create_ddr_selects}

                                             interval_temp={this.props.interval_temp}
                                             interval_freq_cpu={this.props.interval_freq_cpu}
                                             sync_ddr={this.props.sync_ddr}
                                             raid_created={this.props.raid_created}
                                             date_time_setup={this.props.date_time_setup}
                                             bus_freq_modifyed={this.props.bus_freq_modifyed}
                                             mode_mult={this.props.mode_mult}
                                             req_mult={this.props.req_mult}
                                             req_mult_array={this.props.req_mult_array}
                                             state_cores={this.props.state_cores}
                                             boot_priority={this.props.boot_priority}
                                             initEmulator={this.props.initEmulator}
                                             setEmulatorStarted={this.props.setEmulatorStarted}
                                             actionTeacherEmulator={this.props.actionTeacherEmulator}
                        />
                        <br/>
                        <GroupsWithPractice
                            listGroups={this.props.listGroups}
                            modal_tasks={this.props.modal_tasks}
                            showTasks={this.props.showTasks}
                            hideTasks={this.props.hideTasks}
                            setIndex={this.props.setIndex}
                            index_group={this.props.index_group}
                        />
                    </div>
                );
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.modals.modal_practice,
        myid: state.auth.id,
        groups: state.listgroups.groups,
        group_id: state.practiceform.group_id,
        group_title: state.practiceform.group_title,
        task_string: state.practiceform.task_string,
        date_to: state.practiceform.date_to,
        theme: state.practiceform.theme,
        date_from: state.practiceform.date_from,
        motherboard: state.emulatorform.motherboard,
        cpu: state.emulatorform.cpu,
        quantity_hdd: state.emulatorform.quantity_hdd,
        listHdd: state.emulatorform.listHdd,
        quantity_ddr: state.emulatorform.quantity_ddr,
        listDdr: state.emulatorform.listDdr,
        ena_cpu_input: state.emulatorform.ena_cpu_input,

        ena_create_selects: state.emulatorform.ena_create_selects,
        ena_create_ddr_selects: state.emulatorform.ena_create_ddr_selects,

        dynamicMotherboardList: state.emulatorform.dynamicMotherboardList,
        dynamicCPUList: state.emulatorform.dynamicCPUList,
        dynamicHDDList: state.emulatorform.dynamicHDDList,
        dynamicDDRList: state.emulatorform.dynamicDDRList,
        modal_downloading_status: state.modals.modal_downloading,
        modal_tasks: state.modals.modal_tasks,
        index_group: state.modals.tasks_for_group,

        interval_temp: state.emulatorform.interval_temp,
        interval_freq_cpu: state.emulatorform.interval_freq_cpu,
        sync_ddr: state.emulatorform.sync_ddr,
        raid_created: state.emulatorform.raid_created,
        date_time_setup: state.emulatorform.date_time_setup,
        bus_freq_modifyed: state.emulatorform.bus_freq_modifyed,
        mode_mult: state.emulatorform.mode_mult,
        req_mult: state.emulatorform.req_mult,
        req_mult_array: state.emulatorform.req_mult_array,
        state_cores: state.emulatorform.state_cores,
        boot_priority: state.emulatorform.boot_priority,

        ena_results: state.practiceresult.ena_results,
        results: state.practiceresult.result,
        emulator_status: state.useractivity.emulator_status,

    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        hideModalPractice: bindActionCreators(hideCreatePractice, dispatch),
        showModalPractice: bindActionCreators(showCreatePractice, dispatch),
        setForGroupPractice: bindActionCreators(setForGroupPractice,dispatch),
        setTaskString: bindActionCreators(changeTaskString,dispatch),
        setTheme: bindActionCreators(setTheme,dispatch),
        setDateTo: bindActionCreators(setDateTo,dispatch),
        setDateFrom: bindActionCreators(setDateFrom,dispatch),
        showModalDownloading: bindActionCreators(showModalDownloading,dispatch),
        hideModalDownloading: bindActionCreators(hideModalDownloading,dispatch),
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
        setCpuInputDisabled: bindActionCreators(setCpuInputDisabled,dispatch),
        setSelectsDisabled: bindActionCreators(setSelectsDisabled,dispatch),
        setSelectsEnabled: bindActionCreators(setSelectsEnabled,dispatch),
        setSelectsDDRdisabled: bindActionCreators(setSelectsDDRdisabled, dispatch),
        setSelectsDDRenabled: bindActionCreators(setSelectsDDRenabled,dispatch),

        showTasks: bindActionCreators(showTasks,dispatch),
        hideTasks: bindActionCreators(hideTasks,dispatch),
        setIndex: bindActionCreators(setIndex,dispatch),
        initEmulator: bindActionCreators(initEmulatorStore,dispatch),
        setEmulatorStarted: bindActionCreators(setEmulatorStarted,dispatch),

        actionTeacherEmulator: bindActionCreators(actionTeacherEmulator,dispatch),
        actionResultsPage: bindActionCreators(actionResultsPage,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(TeacherPracticePage);