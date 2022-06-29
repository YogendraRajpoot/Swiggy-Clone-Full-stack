import React from 'react';

const FeaturesSection = (props) => {
    return (
        <div className="fesec">
            <div className="fesec-img">
                <img className="fesec-imgtag" src={props.img} style={{ aspectRatio: "auto", width: props.width }} />
            </div>
            <div className="fesec-heading">
                {props.heading}
            </div>
            <div className="fesec-text">
                {props.textcon}
            </div>
        </div>
    )
}
export default FeaturesSection;