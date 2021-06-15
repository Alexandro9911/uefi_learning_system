import React from "react";

export default class ListQuest extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeAnswInTest = this.onChangeAnswInTest.bind(this);
        this.onChangeQuestInTest = this.onChangeQuestInTest.bind(this);
    }

    onChangeQuestInTest(e){

    }

    onChangeAnswInTest(e){

    }

    render() {
        let items = [];
        let test = []
        for(let i = 0; i < this.props.quantity; i++) {
            test.push({
                quest: "",
                anser: ""
            });
            items.push(
                <div className="group_card"
                     onMouseLeave={
                         function () {
                             this.props.setCurrSelection(null);
                         }.bind(this)}
                     onMouseEnter={
                         function () {
                             this.props.setCurrSelection(i);
                         }.bind(this)}>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Вопрос"
                           onChange={function (e){
                               this.props.current_test[i].quest = e.target.value
                           }.bind(this)}
                    />
                    <br/>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Ответ"
                           onChange={function (e){
                               this.props.current_test[i].answ = e.target.value
                           }.bind(this)}
                        // onChange={this.changeQuantQuest}
                        // value={this.props.quant_quest}
                    />
                </div>
            )
        }
        return (
           <div>{items}</div>
        )
    }
}