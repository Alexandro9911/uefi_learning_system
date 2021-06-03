import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import {Link} from "react-router-dom";
import Modal_dowloading from "../modals/modal_dowloading";
import {bindActionCreators} from "redux";
import {
    hideCreatePractice,
    hideModalDownloading,
    showCreatePractice,
    showModalDownloading
} from "../../store/modals/actions";
import {
    changeTaskString,
    setDateFrom,
    setDateTo,
    setForGroupPractice,
    setTheme
} from "../../store/practiceCreate/actions";
import {connect} from "react-redux";
import {setEmulatorClosed} from "../../store/userpage/actions";


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.props.setEmulatorClosed()
    }
    render() {
        if (this.props.emulator_status) {
            return (
                <div>
                    <Modal_dowloading
                        modal_downloading_status={this.props.modal_downloading_status}
                        showModalDownloading={this.props.showModalDownloading}
                        hideModalDownloading={this.props.hideModalDownloading}
                    />
                    <div className="navbar_back">
                        <div className="navbar_btn_container">
                            <Link to={'/user_page/practice_page'} onClick={this.onClickHandler} className="btn btn-outline-dark">Теория</Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Modal_dowloading
                        modal_downloading_status={this.props.modal_downloading_status}
                        showModalDownloading={this.props.showModalDownloading}
                        hideModalDownloading={this.props.hideModalDownloading}
                    />
                    <div className="navbar_back">
                        <div className="navbar_btn_container">
                            <Link to={'/'} className="btn btn-outline-dark">Вход</Link>
                            <Link to={'/registration_page'} className="btn btn-outline-dark">Регистрация</Link>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        modal_downloading_status: state.modals.modal_downloading,
        emulator_status: state.useractivity.emulator_status
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        showModalDownloading: bindActionCreators(showModalDownloading,dispatch),
        hideModalDownloading: bindActionCreators(hideModalDownloading,dispatch),
        setEmulatorClosed: bindActionCreators(setEmulatorClosed,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);