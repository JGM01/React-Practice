import React from "react";
import './MainTopic.css';

function MainTopic(): JSX.Element {
    return (
        <div className="container">
            <h1 className="head">Header.</h1>
            <p className="subtext">text, subtitles.</p>
            <ul className="links">
                <li>Learn more {'>'}</li>
                <li>Buy {'>'}</li>
            </ul>
        </div>
    );
}

export default MainTopic;