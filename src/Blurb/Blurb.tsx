import React from "react";
import './Blurb.css';

function Blurb({heading, subtitle}: {heading: string, subtitle: string }) {
    return (
        <div className="container">
            <h1 className="header">{heading}</h1>
            <p className="subtitle">{subtitle}</p>
                <ul className="links">
                    <li>Learn more {'>'}</li>
                    <li>Buy {'>'}</li>
                </ul>
        </div>
    )
}

export default Blurb;