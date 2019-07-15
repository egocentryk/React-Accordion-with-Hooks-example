import React, { useState, useRef } from 'react';
import Icon from './Icon';

import './Accordion.css';

const Accordion = props => {

    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("accordion__icon");

    const content = useRef(null);

    const toggle = () => {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === "active" ? "accordion__icon" : "accordion__icon rotate");
    }

    return (
        <>
            <div className="accordion__section">
                <button className={`accordion ${active}`} onClick={toggle}>
                    <p className="accordion__title">{props.title}</p>
                    <Icon className={`${rotate}`} width={10} fill={"#000"} />
                </button>
                <div ref={content} style={{maxHeight: `${height}`}} className="accordion__content">
                    <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
                </div>
            </div>
        </>
    )
}

export default Accordion;