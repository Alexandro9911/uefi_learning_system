import React from "react";
import {connect} from "react-redux";
import DdrElement from "../../../../Elements/ddrElement";
import {bindActionCreators} from "redux";
import {setTimingDdr} from "../../../../../store/emulator/actions";

class DdrSettings extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandlerOpen = this.onClickHandlerOpen.bind(this);
        this.onClickHandlerClose = this.onClickHandlerClose.bind(this);
    }

    onClickHandlerOpen() {
        this.props.setPageAdvancedAccordion('none')
        this.props.setPageAdvancedAccordion('ddr');
    }

    onClickHandlerClose(){
        this.props.setPageAdvancedAccordion('none')
    }

    render() {
        if(this.props.page_advanced_accordion === 'ddr'){

            let ddrs = this.props.list_ddr;

            const items = ddrs.map((ddr,i)=>
            <div>
                <DdrElement
                    ddr={ddr}
                    index={i}
                    setTiming={this.props.setTiming}
                />
            </div>
            )

            return(
                <div>
                    <div className="button_adv_item" onClick={this.onClickHandlerClose}>
                        <h5>RAM settings v</h5>
                    </div>
                    <div>
                        <br/>
                        <h5 className="text-muted">List of DRAM:</h5>
                        <div>{items}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="button_adv_item" onClick={this.onClickHandlerOpen}>
                    <h5>RAM settings ></h5></div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dram_freq_value: state.emulator.dram_freq_value,
        list_ddr: state.emulator.list_ddr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTiming: bindActionCreators(setTimingDdr,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DdrSettings)