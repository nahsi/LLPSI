import React from "react";
import { Link } from "react-router-dom";
import data from "../data.js";

export default class Chapter extends React.Component {
    render = () => {
        let chapterId = parseInt(this.props.match.params.chapter) - 1;
        let chapterData = require("../chapters/" + data[chapterId].file);

        let exercises_ = []
        for (let i = 0; i < chapterData.exercises.length; i++) {
            exercises_.push(<Link key={i} to={"/chapter/" + (chapterData.id + 1) + "/" + (i + 1)} className="exercise-item">{chapterData.exercises[i].name}</Link>)
        }

        return (
            <div className="Chapter">
                <div className="chapter-name-container">
                    {chapterId > 0 ? <Link to={"/chapter/" + (chapterId)} className="prev-btn">{"<=="}</Link> : null}
                    <div className="chapter-name">{chapterData.name + " - " + (chapterData.id + 1)}</div>
                    {chapterId + 1 < data.length ? <Link to={"/chapter/" + (chapterId + 2)} className="next-btn">{"==>"}</Link> : null}
                </div>
                <div className="exercises-container">
                    {exercises_}
                </div>
            </div>
        );
    }
}
