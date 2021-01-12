import React from "react";
import data from "../data.js";
import ExerciseContainer from "../components/ExerciseContainer.js";

export default class Exercise extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showAnswers: false, checkAnswers: false }
    }

    getChapterId = () => {
        return parseInt(this.props.match.params.chapter) - 1;
    }

    getExerciseId = () => {
        return parseInt(this.props.match.params.exercise) - 1;
    }

    getChapterData = (chapterId) => {
        let chapterData = require("../chapters/" + data[chapterId].file);
        return chapterData;
    }

    getExerciseData = (chapterId, exerciseId) => {
        let chapterData = require("../chapters/" + data[chapterId].file);
        return chapterData.exercises[exerciseId];
    }

    handleBtnClick = () => {
        this.setState({ showAnswers: false, checkAnswers: false });
    }

    handleShowAnswersSwitch = () => {
        this.setState({ showAnswers: !this.state.showAnswers })
    }

    handleCheckAnswersSwitch = () => {
        this.setState({ checkAnswers: !this.state.checkAnswers });
    }

    render = () => {

        const chapterId = this.getChapterId();
        const exerciseId = this.getExerciseId();

        return (
            <div className="Exercise">
                <ExerciseContainer chapterId={chapterId} exerciseId={exerciseId} chapterData={this.getChapterData(chapterId)} exerciseData={this.getExerciseData(chapterId, exerciseId)} showAnswers={this.state.showAnswers} checkAnswers={this.state.checkAnswers} handleShowAnswersSwitch={this.handleShowAnswersSwitch} handleCheckAnswersSwitch={this.handleCheckAnswersSwitch} handleBtnClick={this.handleBtnClick} />
            </div>
        );
    }
}
