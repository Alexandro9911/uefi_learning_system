import React from "react";
export default class AiTweakerPage extends React.Component {
    constructor(props) {
        super(props);

        this.singleCoreRatioLimit = this.singleCoreRatioLimit.bind(this);
    }


    singleCoreRatioLimit(e){
        this.props.setMultiplayer(+e.target.value);

        let speed = +e.target.value * +this.props.emulator_object.cpu.bus_speed
        let max_freq = +this.props.emulator_object.cpu.max_freq * 1000;
        if(speed > max_freq){
            this.props.action(true);
            this.props.text("Превышена максимальная частота процессора!");
        }
            this.props.setCPUfreq(Math.floor(speed * 100) / 100);

            // Math.floor(num * 100) / 100
            let x = speed / 1000;
            x = Math.floor(x * 100) / 100
            let temperature = ((((x * (-18.859)) / Math.log(Math.abs((11.963 * x)) + 1.0E-5)) *
                (-11.335)) / Math.log(Math.abs((((x * x) - 23.6686) * x)) + 1.0E-5))
            this.props.setCPUtemperature(Math.floor(temperature * 100) / 100);
            x = Math.floor(temperature * 100) / 100


            let speed_fan_counted = (((((2855993.5481 * (x - (-0.120))) ^ 0.3965)
                - (55.915 - x)) - (((16.6165 / x) ^ (-3.181)) -
                ((-18.193) - x))) - 37.9835);
            speed_fan_counted = speed_fan_counted / 100000
            if (speed_fan_counted > +this.props.emulator_object.listFan[0].max_rpm) {
                speed_fan_counted = +this.props.emulator_object.listFan[0].max_rpm
            }
            this.props.setCPUfanSpeed(Math.floor(speed_fan_counted * 100) / 100);

    }

    render() {
        return (
            <div>
                <div className="container_bios">
                    <h5 className="text-colored">Target CPU Turbo-Mode Frequency: {this.props.cpu_speed} MHz</h5>
                    <h5 className="text-colored">Target DRAM Frequency: 2186 MHz</h5>
                    <h5 className="text-colored">Target Cache Frequency: 2997 MHz</h5>

                    <div className="grid_layout">
                        <h5>Ai Overclock tuner</h5>
                        <select className="modal-select">
                            <option selected={true}>[AUTO]</option>
                            <option>[MANUAL]</option>
                        </select>
                        <h5>CPU core ratio</h5>
                        <select className="modal-select">
                            <option selected={true}>[AUTO]</option>
                            <option>[PER CORE]</option>
                        </select>
                    </div>
                    <div className="grid_layout">
                        <h5>Core ratio limit</h5>
                        <input className="modal-inputs"
                               value={this.props.multiplayer}
                            onChange={this.singleCoreRatioLimit}
                        />
                    </div>
                    <div className="grid_layout">
                        <h5>1-core ratio limit</h5>
                        <input className="modal-inputs"
                               value={this.props.multiplayer}
                        />
                        <h5>2-core ratio limit</h5>
                        <input className="modal-inputs"
                               value={this.props.multiplayer}/>
                        <h5>3-core ratio limit</h5>
                        <input className="modal-inputs"
                               value={this.props.multiplayer}
                        />
                        <h5>4-core ratio limit</h5>
                        <input className="modal-inputs"
                               value={this.props.multiplayer}
                        />
                    </div>
                    <br/>
                    <div className="grid_layout">
                        <h5>DRAM odd Ratio Mode</h5>
                        <select className="modal-select">
                            <option selected={true}>[Enabled]</option>
                            <option>[Enabeled]</option>
                        </select>
                        <h5>Frequency DRAM</h5>
                        <select className="modal-select">
                            <option selected={true}>[DDR4-2186MHZ]</option>
                            <option>[Enabeled]</option>
                        </select>
                        <h5>CPU core ratio</h5>
                        <select className="modal-select">
                            <option selected={true}>[Per core]</option>
                            <option>[Enabeled]</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}