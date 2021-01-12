import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "" };
    }

    replaceChars = (text) => { // for some reason some characters are not working
        text = text.replace("ō", "o");
        text = text.replace("ō", "o"); // ??
        text = text.replace("ā", "a");
        text = text.replace("ā", "a"); // ??
        text = text.replace("ē", "e");
        text = text.replace("ū", "u");
        text = text.replace("ī", "i");
        text = text.replace("ȳ", "y");
        text = text.replace("Ā", "A");
        text = text.replace("Ē", "E");
        text = text.replace("Ū", "U");
        text = text.replace("Ī", "I");
        text = text.replace("ÿ", "ȳ");
        text = text.replace("Ō", "O");
        return text;
    }

    isCorrect = (text, answer) => {
        let answer_ = answer.toLowerCase();
        let text_ = text.toLowerCase();
        if (text_.startsWith("... ")) {
            text_ = text_.replace("... ", "");
        }
        if (answer_.startsWith("... ")) {
            answer_ = answer_.replace("... ", "");
        }
        text_ = this.replaceChars(text_);
        answer_ = this.replaceChars(answer_);
        if (answer_.includes("|")) { // If there are 2 answers
            let answers__ = answer_.split("|");
            let answer_1 = answers__[0];
            let answer_2 = answers__[1];
            if (answer_1 == text_ || answer_2 == text_) {
                return true;
            }
            return false
        }
        return text_ == answer_;
    }

    handleChange = (ev) => {
        this.setState({ value: ev.target.value });
    }

    render = () => {
        let class_ = "";
        if (this.state.value != "") {
            if (this.props.checkAnswers && this.props.answer != undefined) {
                if (this.isCorrect(this.state.value, this.props.answer)) {
                    class_ = "correct";
                } else {
                    class_ = "wrong";
                }
            }
        }
        return (
            <div id={"input" + this.props.questionI + "-" + this.props.i} className="input-container">
                <input
                    className={class_}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    style={{ marginLeft: this.props.marginLeft }}
                    size={this.props.answer != undefined ? this.props.answer.length : this.state.value.length}
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                {this.props.showAnswers ? <div className="answer">{this.props.answer}</div> : null}
            </div>
        );
    }
}
