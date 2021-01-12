import React from "react";
import Input from "./Input";

export default class Question extends React.Component {
    render = () => {
        // replace # with input
        let text_ = [];
        let split_ = this.props.info.q.split("#");
        let inputCount = 0;
        let key_ = 0;
        for (let i = 0; i < split_.length; i++) {
            text_.push(<div key={key_}>{split_[i]}</div>)
            if (i != split_.length - 1) {
                key_++;
                text_.push(<Input showAnswers={this.props.showAnswers} checkAnswers={this.props.checkAnswers} key={this.props.chapterId + "_" + this.props.exerciseId + "_" + key_} i={inputCount} questionI={this.props.i} answer={this.props.info.a[inputCount]} marginLeft={split_[i].endsWith(" ") ? "6px" : "2px"} />);
                inputCount++;
            }
            key_++;
        }
        if (inputCount == 0) {
            text_.push(<Input showAnswers={this.props.showAnswers} checkAnswers={this.props.checkAnswers} key={text_.length} i={0} questionI={this.props.i} answer={this.props.info.a[0]} marginLeft="10px" />);
        }
        return (
            <li id={"question-" + this.props.i} className="question-container">
                {text_}
            </li>
        );
    }
}
