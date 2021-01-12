import React from "react";
import { Link } from "react-router-dom";
import data from "../data.js";

export default class Chapters extends React.Component {
    render = () => {
        let chapters_ = []
        for (let i = 0; i < data.length; i++) {
            chapters_.push(<Link key={i} to={"/chapter/" + (data[i].id+1)} className="chapter-item">{data[i].name + " - " + (data[i].id+1)}</Link>)
        }
        return (
            <div className="Chapters">
                {chapters_}
                </div>
        );
    }
}
