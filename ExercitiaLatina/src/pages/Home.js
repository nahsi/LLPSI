import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render = () => {
        return (
            <div className="Home">
                <Link to="/chapters">Capitula</Link>
            </div>
        );
    }
}
