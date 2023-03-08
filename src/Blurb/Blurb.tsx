import React from "react";
import './Blurb.css';

interface BlurbProps {
    heading: string;
    subtitle: string;
    image: string;
    isWhite?: boolean;
}

function Blurb({heading, subtitle, image, isWhite}: BlurbProps) {
    return (
        <div className={`box${isWhite? '-white' : ''}`}>
            <h2 className={`header${isWhite? '-white' : ''}`}>{heading}</h2>
            <p className={`subtitle${isWhite? '-white' : ''}`}>{subtitle}</p>
                <ul className="links">
                    <li>Learn more {'>'}</li>
                    <li>Buy {'>'}</li>
                </ul>
            <img className="image" src={`/${image}`} alt=""/>
        </div>
    )
}

export {Blurb};