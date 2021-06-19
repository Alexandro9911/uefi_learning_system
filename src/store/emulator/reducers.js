import {
    INIT_EMULATOR_STORE,
    CHANGE_TO_ADVANCED_MODE,
    CHANGE_TO_EZ_MODE,
    SET_TIME_SYSTEM,
    SET_DATE_SYSTEM,
    SET_BOOT_PRIORITY,
    SET_PAGE,
    SET_PAGE_ADVANCED_ACCORDION,
    CHANGE_AI_MODE,
    CHANGE_MULTIPLAYER,
    CHANGE_MULTIPLAYER_TO,
    CHANGE_MULTIPLAYER_ARR,
    SET_CURR_INDEX,
    ACTION_MODAL_WARNING,
    SET_DRAM_ODD_RATIO_MODE,
    SET_DRAM_FREQ_VALUE,
    SET_TIMING_DDR,
    SET_MANUAL_FAN_MODE,
    SET_FAN_GLOBAL_MODE,
    INIT_EMULATOR_STARTED
} from "./actions";

const initialState = {
    emulator_object: {}, //  это начальные значения


    temperature_cpu : 0, //  тут идут значения которые устанавливает пользователь в ходе работы.
    temperature_mb: 0,

    cpu_speed: 0,
    bus_speed: 0,

    max_cpu_freq: 0,
    max_cpu_temp: 0,
    multiplayer_str: '',
    multiplayer_mode: false,
    multiplayer_array: [],
    multiplayer_to: '',
    multiplayer: 0,
    ai_mode: '',

    voltage_cpu: 0,
    voltage_low: 0,
    voltage_mid: 0,
    voltage_hight: 0,

    boot_priority_str: '',

    raid_ena: false,
    ratio_limit_mode: '',
    min_mult:0,
    max_mult:0,
    quantity_cores: 0,
    state_cores: [],
    voltage_by_cores: [],
    curr_date: '',
    curr_time: '',

    cpu_fan_speed: 0,
    simple_fan_speed: 0,
    cpu_fan_mode: '',
    fan_global_mode: 'auto',
    manual_fan_speed: 'optimal',

    dram_odd_ratio_mode: 'auto',
    dram_freq_value: 0,
    dram_freq_values_arr: [2186,2204,2486,2686],
    list_ddr:[],

    total_mem: 0,
    max_rpm: 0,
    advanced_mode: false,  // значения для управления окнами ( системные)
    current_select: 'main',
    page_advanced_accordion: 'none',

    alert_warning: false,
    text_alert_warning: '',
    curr_index: -1
}

export const emulatorRegucer = (state = initialState, action) =>{
    switch (action.type) {
        case INIT_EMULATOR_STARTED: {
            return {
                ...JSON.parse(action.payload)
            }
        }
        case INIT_EMULATOR_STORE: {
            let emul_obj = JSON.parse(action.payload);
            let mult_mode = true // когда процессор залочен будет false
            let bus_speed = +emul_obj.cpu.bus_speed;
            let ratio_limit_mode = 'auto'
            let mult = emul_obj.cpu.multiplayer_current;
            let speed = countSpeed(+mult,+bus_speed);
            let temperature_cpu = countTemperature(speed);
            let speedFan = countSpeedFan(temperature_cpu,emul_obj.listFan[0].max_rpm);
            let total_mem = countMem(emul_obj.listDdr);
            let mult_arr = getArray(emul_obj.cpu.multiplayer_by_core)
            return {
                ...state,
                emulator_object: emul_obj,
                bus_speed: +bus_speed,
                temperature_cpu: temperature_cpu,
                temperature_mb: 27,
                cpu_speed: speed,
                max_cpu_freq: +emul_obj.cpu.max_freq * 1000,
                max_cpu_temp: +emul_obj.cpu.max_temperature,
                multiplayer_mode: mult_mode,
                multiplayer_array: mult_arr,
                multiplayer: emul_obj.cpu.multiplayer_current,
                ratio_limit_mode: ratio_limit_mode,
                cpu_fan_speed: speedFan,
                simple_fan_speed: 1000,
                voltage_cpu: 1.29,
                voltage_low: 3.01,
                voltage_mid: 5.01,
                voltage_hight: 12.02,
                max_rpm: emul_obj.listFan[0].max_rpm,
                boot_priority_str: emul_obj.boot_priority_str,
                raid_ena: emul_obj.ena_raid,
                cpu_fan_mode: 'auto',
                min_mult: +emul_obj.cpu.multiplayer_min,
                max_mult: +emul_obj.cpu.multiplayer_max,
                total_mem: total_mem,
                dram_freq_value: 2186,
                list_ddr: emul_obj.listDdr,
                curr_time: emul_obj.system_time,
                curr_date: emul_obj.system_date,
                quantity_cores: +emul_obj.cpu.quantity_core,
                multiplayer_to: 'auto',
                ai_mode: 'auto',
                cpu_global_mode: 'auto',
                manual_fan_speed: 'optimal'
            }
        }

        case SET_TIMING_DDR:{
            let arr = state.list_ddr;
            arr[action.payload.index][action.payload.type_val] = action.payload.value;
            return {
                ...state,
                list_ddr: arr
            }
        }
        case SET_MANUAL_FAN_MODE: {
            let speed0 = 0
            let speed1 = 0
            const min_fan_0 = +state.emulator_object.listFan[0].min_rpm;
            const max_fan_0 = +state.emulator_object.listFan[0].max_rpm;

            const min_fan_1 = +state.emulator_object.listFan[1].min_rpm;
            const max_fan_1 = +state.emulator_object.listFan[1].max_rpm;

            let interval0 = max_fan_0 - min_fan_1 / 3;
            let interval1 = max_fan_1 - min_fan_1 / 3;

            if(action.payload === 'fast'){
                speed0 = max_fan_0;
                speed1 = max_fan_1;
            }
            if(action.payload === 'slow'){
                speed0 = min_fan_0;
                speed1 = min_fan_1;
            }
            if(action.payload === 'optimal'){
                speed0 = interval0;
                speed1 =  interval1
            }
            return {
                ...state,
                manual_fan_speed: action.payload,
                cpu_fan_speed: speed0,
                simple_fan_speed: speed1
            }
        }

        case SET_FAN_GLOBAL_MODE: {
            let speed0 = 0;
            let speed1 = 0;

            const min_fan_0 = +state.emulator_object.listFan[0].min_rpm;
            const max_fan_0 = +state.emulator_object.listFan[0].max_rpm;

            const min_fan_1 = +state.emulator_object.listFan[1].min_rpm;
            const max_fan_1 = +state.emulator_object.listFan[1].max_rpm;

            let interval0 = max_fan_0 - min_fan_1 / 3;
            let interval1 = max_fan_1 - min_fan_1 / 3;

            if(action.payload === 'auto'){
                speed0 = countSpeedFan(state.temperature_cpu,max_fan_0);
                speed1 = countSpeedFan(state.temperature_cpu,max_fan_1);
            } else {
                speed0 = min_fan_0 + interval0;
                speed1 = min_fan_1 + interval1;
            }
            return {
                ...state,
                simple_fan_speed: speed1,
                cpu_fan_speed: speed0
            }
        }
        case SET_DRAM_FREQ_VALUE:
            return {
                ...state,
                dram_freq_value: +action.payload
            }
        case SET_DRAM_ODD_RATIO_MODE:
            return {
                ...state,
                dram_odd_ratio_mode: action.payload
            }
        case ACTION_MODAL_WARNING:{
            let stat = true;
            let text = ''
            if(action.payload === false){
                stat = false
            }
            return {
                ...state,
                alert_warning: stat,
                text_alert_warning: ''
            }
        }
        case SET_CURR_INDEX:
            return {
                ...state,
                curr_index: action.payload
            }
        case CHANGE_MULTIPLAYER_ARR:{
            let speed = countSpeed(action.payload[0], state.bus_speed)
            let temp = countTemperature(speed)
            let fan = state.cpu_fan_speed
            if(state.fan_global_mode === 'auto') {
                 fan = countSpeedFan(temp, state.max_rpm)
            }
            let warn = false
            let text_warn = ''
            if(temp > state.max_cpu_temp){
                warn = true
                text_warn= 'Достигнут температурный максимум. Системе угрожает опастность перегреваа!'
            }
            if(speed > state.max_cpu_freq){
                warn = true
                text_warn= 'Достигнуто предельное значение частоты. Система не стабильна!!'
            }
            return {
                ...state,
                multiplayer_array: action.payload,
                cpu_speed: speed,
                temperature_cpu: temp,
                cpu_fan_speed: fan,
                alert_warning: warn,
                text_alert_warning: text_warn
            }
        }
        case CHANGE_MULTIPLAYER_TO:
            return {
                ...state,
                multiplayer_to: action.payload
            }
        case CHANGE_MULTIPLAYER:
            let speed = countSpeed(+action.payload, state.bus_speed)
            let temp = countTemperature(speed)
            let fan = state.cpu_fan_speed
            if(state.fan_global_mode === 'auto') {
                fan = countSpeedFan(temp, state.max_rpm)
            } else {
                fan = state.cpu_fan_speed
            }
            let warn = false
            let text_warn = ''
            if(temp > state.max_cpu_temp){
                warn = true
                text_warn= 'Достигнут температурный максимум. Системе угрожает опастность перегреваа!'
            }
            if(speed > state.max_cpu_freq){
                warn = true
                text_warn= 'Достигнуто предельное значение частоты. Система не стабильна!!'
            }
            return {
                ...state,
                multiplayer: action.payload,
                cpu_speed: speed,
                temperature_cpu: temp,
                cpu_fan_speed: fan,
                alert_warning: warn,
                text_alert_warning: text_warn
            }
        case CHANGE_AI_MODE:
            return {
                ...state,
                ai_mode: action.payload
            }
        case CHANGE_TO_ADVANCED_MODE:
            return  {
                ...state,
                advanced_mode: action.payload
            }
        case CHANGE_TO_EZ_MODE:
            return  {
                ...state,
                advanced_mode: action.payload
            }
        case SET_DATE_SYSTEM:
            return {
                ...state,
                emulator_object: action.payload
            }
        case SET_TIME_SYSTEM:
            return {
                ...state,
                emulator_object: action.payload
            }
        case SET_PAGE_ADVANCED_ACCORDION:
            return {
                ...state,
                page_advanced_accordion: action.payload
            }
        case SET_PAGE:
            return  {
                ...state,
                current_select: action.payload
            }
        case SET_BOOT_PRIORITY:
            return {
                ...state,
                boot_priority_str: action.payload
            }
    }
    return  state
}

function getArray(str){
    let arr = str.split('#');
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
    }
    return arr
}

function countMem(list){
    let total = 0;
    let len = Object.values(list).length;
    let ddrs = Object.values(list);
    for (let i = 0; i < len; i++) {
        total += +ddrs[i].mem
    }
    return total * 1024
}

function countSpeed(mult,bus){
    return Math.floor((mult * bus) * 100) / 100
}

function countTemperature(a){
    let x = Math.floor(a / 1000 * 100) / 100
    let temperature = ((((x * (-18.859)) / Math.log(Math.abs((11.963 * x)) + 1.0E-5)) *
        (-11.335)) / Math.log(Math.abs((((x * x) - 23.6686) * x)) + 1.0E-5))
    return (Math.floor(temperature * 100) / 100) ;
}

function countSpeedFan(x,max){
    let speed_fan_counted = (((((2855993.5481*(x-(-0.120)))^0.3965)
        -(55.915-x))-(((16.6165/x)^(-3.181))-
        ((-18.193)-x)))-37.9835);
    speed_fan_counted = speed_fan_counted /100000
    if (speed_fan_counted > +max) {
        speed_fan_counted = +max
    }
    return (Math.floor(speed_fan_counted * 100) / 100);
}