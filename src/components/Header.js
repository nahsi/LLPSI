import React from "react";
import { Link } from "react-router-dom";
import data from "../data.js";
export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showMenu: false };
    }

    showMenu = (ev) => {
        if (!this.state.showMenu) {
            this.setState({ showMenu: true }, () => {
                document.addEventListener('click', this.closeMenu);
            });
        } else {
            this.closeMenu();
        }
    }
    
    closeMenu = (ev) => {
        if (!ev || ev.target.id != "chapters-menu") {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render = () => {
        let dropDownItems = [];
        if (this.state.showMenu) {
            for (let i = 0; i < data.length; i++) {
                dropDownItems.push(<Link key={i} className="dropdown-item" to={"/chapter/" + (i + 1)}>{data[i].name.split(" ")[1]}</Link>)
            }
        }
        return (
            <nav className="Header">
                <Link className="home-btn" to="/">Home</Link>
                <Link className="chapters-btn" to="/chapters">Capitula</Link>
                <div id="chapters-menu" className="chapters-menu" onClick={this.showMenu}>
                    Index
                {this.state.showMenu ?
                        <div className="chapters-menu-container" >
                            {dropDownItems}
                        </div> : null}
                </div>
                <div className="github-btn" onClick={() => window.open('https://github.com/nktfh100/ExercitiaLatina','_blank')}>GitHub</div>
            </nav>
        );
    }
}
