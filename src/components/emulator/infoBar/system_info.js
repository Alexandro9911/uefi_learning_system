import React, {Component} from 'react';

class SystemInfo extends Component {
    constructor(props) {
        super(props);

        this.countMem = this.countMem.bind(this);
        this.getCPUspeed = this.getCPUspeed.bind(this);
    }

    countMem(list){
        let total = 0;
        let len = Object.values(list).length;
        let ddrs = Object.values(list);
        for(let i = 0; i < len; i++){
            total+= +ddrs[i].mem
        }
        return total * 1024
    }

    getCPUspeed(str,base_freq){
        let arr =  str.split("#");
        let mult = +arr[0];
        let d = +base_freq * mult;
        return parseInt(d, 10);
    }

    render() {
        let totalMem = this.countMem(this.props.emulator.listDdr);
        let speed = this.getCPUspeed(this.props.emulator.cpu.multiplayer_by_core,
            this.props.emulator.cpu.bus_speed)

        return (
            <div className="text-muted text-light">
                <div>BIOS version: 8801</div>
                <div>{this.props.emulator.cpu.system_name} Speed: {speed} MHz</div>
                <div>Total Memory: {totalMem} MB</div>
            </div>
        );
    }
}

export default SystemInfo;