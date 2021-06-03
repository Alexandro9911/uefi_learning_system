import React from "react";
import UserNavs from "../../navs/StudentNavs";

export default class MainBar extends React.Component {
    constructor(props) {
        super(props);
    }

    showFio() {
        return this.props.fio;
    }

    render() {
        if(this.props.emulator_status){
            return (<div></div>)
        }else {
            return (
                <div className="mainbar">
                    <h6>{this.showFio()}</h6>
                    <UserNavs/>
                </div>
            )
        }
    }
}