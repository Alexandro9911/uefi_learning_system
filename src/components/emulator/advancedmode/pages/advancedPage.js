import React from "react";
import PowerManagement from "./toAdvancedPage/powerManagement";
import BootTools from "./toAdvancedPage/bootTools";
import CpuSettings from "./toAdvancedPage/cpuSettings";
import MemorySettings from "./toAdvancedPage/memorySettings";
export default class AdvancedPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container_bios">
                <div>Advanced page</div>
                <PowerManagement
                    page_advanced_accordion={this.props.page_advanced_accordion}
                    setPageAdvancedAccordion={this.props.setPageAdvancedAccordion}
                />
                <BootTools
                    page_advanced_accordion={this.props.page_advanced_accordion}
                    setPageAdvancedAccordion={this.props.setPageAdvancedAccordion}
                />
                <CpuSettings
                    page_advanced_accordion={this.props.page_advanced_accordion}
                    setPageAdvancedAccordion={this.props.setPageAdvancedAccordion}
                />
                <MemorySettings
                    page_advanced_accordion={this.props.page_advanced_accordion}
                    setPageAdvancedAccordion={this.props.setPageAdvancedAccordion}
                />
            </div>

        )
    }
}