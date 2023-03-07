import React from "react";
import './Blurb.css';

function Blurb({heading, subtitle, isWhite}: {heading: string, subtitle: string, isWhite: boolean}) {
    return (
        <div className={`container${isWhite? '-white' : ''}`}>
            <h2 className={`header${isWhite? '-white' : ''}`}>{heading}</h2>
            <p className={`subtitle${isWhite? '-white' : ''}`}>{subtitle}</p>
                <ul className="links">
                    <li>Learn more {'>'}</li>
                    <li>Buy {'>'}</li>
                </ul>
            <img className="image" src="/logo192.png" alt="image"/>
        </div>
    )
}

export default Blurb;