import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

class JoinGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="join_page">
                <h4>Вступить в группу</h4>
                <h6 className="text-muted" >Для того чтобы вступить в группу нужно иметь токен этой группы.
                    Токен знает создатель группы.</h6>
                <form>
                    <div className="card card-body w-50">
                    <div className="row g-3">
                        <div className="col-sm">
                            <input type="text" className="form-control" placeholder="aB1C-D1E2-f3G4" aria-label="State"/>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-outline-dark">Вступить</button>
                        </div>
                    </div>
                    </div>
                </form>
                <div>

                </div>
            </div>
        );
    }
}

export default JoinGroup;