import React, {Component} from 'react';

class SystemInfo extends Component {
    constructor(props) {
        super(props);

    }


    render() {
       return (
            <div className="text-muted text-light">
                <div>BIOS version: 8801</div>
                <div>{this.props.system_name} Speed: {Math.floor(this.props.cpu_speed * 100) / 100} MHz</div>
                <div>Total Memory: {this.props.total_mem} MB</div>
            </div>
        );
    }
}

export default SystemInfo;