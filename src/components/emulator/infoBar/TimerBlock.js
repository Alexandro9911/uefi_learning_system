import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class TimerBlock extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.showModalDateTime()
    }

    render() {
        return (
            <div className="timer_block" onClick={this.onClickHandler}>
                <h1 className="large_letters">
                    {this.props.time}
                </h1>
                <h4>{this.props.date} Monday</h4>
            </div>
        );
    }
}

export default TimerBlock;