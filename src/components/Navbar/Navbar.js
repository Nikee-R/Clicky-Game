import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav>
        <ul>
            <li className="brand animated lightSpeedIn">
                <a href="/cicky-game/">{props.title}</a>
            </li>

            <li id="ci">{props.correctIncorrect}</li>

            <li id="score">Score: {props.score}</li>

            <li id="topScore">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Navbar;