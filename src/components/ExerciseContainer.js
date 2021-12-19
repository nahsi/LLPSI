import React from "react";
import Question from "../components/Question.js";
import data from "../data.js";
import Switch from "../components/Switch";
import { Link } from "react-router-dom";

export default class ExerciseContainer extends React.Component {
    render = () => {

        const chapterId = this.props.chapterId;
        const exerciseId = this.props.exerciseId;
        const chapterData = this.props.chapterData;
        const exerciseData = this.props.exerciseData;

        let questions = [];
        for (let i = 0; i < exerciseData["questions"].length; i++) {
            questions.push(<Question chapterId={chapterId} exerciseId={exerciseId} showAnswers={this.props.showAnswers} checkAnswers={this.props.checkAnswers} key={i} i={i} info={exerciseData.questions[i]} />);
        }

        let info = [];
        let split_ = exerciseData.info.split("\n");
        for (let i = 0; i < split_.length; i++) {
            info.push(<div key={i}>{split_[i]}</div>);
        }

        return (
            <div className="exercise-container">
                <div className="chapter-name-container">
                    {chapterId > 0 ? <Link onClick={this.props.handleBtnClick} to={"/chapter/" + (chapterId) + "/1"} className="prev-btn">{"<=="}</Link> : null}
                    <div className="chapter-name">{chapterData.name}</div>
                    {chapterId + 1 < data.length ? <Link onClick={this.props.handleBtnClick} to={"/chapter/" + (chapterId + 2) + "/1"} className="next-btn">{"==>"}</Link> : null}
                </div>
                <div className="exercise-name-container">
                    {exerciseId > 0 ? <Link onClick={this.props.handleBtnClick} to={"/chapter/" + (chapterId + 1) + "/" + exerciseId} className="prev-btn">{"<=="}</Link> : null}
                    <div className="exercise-name">{exerciseData.name}</div>
                    {exerciseId + 1 < chapterData.exercises.length ? <Link onClick={this.props.handleBtnClick} to={"/chapter/" + (chapterId + 1) + "/" + (exerciseId + 2)} className="next-btn">{"==>"}</Link> : null}
                </div>
                <div className="switch-container">
                    <span id="check-answers-switch" onClick={this.props.handleCheckAnswersSwitch} style={{ cursor: 'pointer' }} >
                        Check Answers&nbsp;
                    </span>
                    <Switch isOn={this.props.checkAnswers} onClick={this.props.handleCheckAnswersSwitch} labelledBy='check-answers-switch' />
                </div>
                <div className="switch-container">
                    <span id="show-answers-switch" onClick={this.props.handleShowAnswersSwitch} style={{ cursor: 'pointer' }} >
                        Show Answers&nbsp;
                    </span>
                    <Switch isOn={this.props.showAnswers} onClick={this.props.handleShowAnswersSwitch} labelledBy='show-answers-switch' />
                </div>
                <div className="info-container">{info}</div>
                <ul className="questions-container">{questions}</ul>
            </div>
        );
    }
}
