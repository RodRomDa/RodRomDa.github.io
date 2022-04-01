import React, { Fragment, useState } from "react";
import default_idea from '../../img/default_idea.jpg';

export default function Image(props) {
    const [loaded, setLoaded] = useState(false);

    const handleImageLoaded = () => {
        setLoaded(true);
    }

    const imageStyle = !loaded ? { display: "none" } : {};

    return <Fragment>
                {!loaded && <img className = {props.className} src={default_idea} />} 
                <img className = {props.className} src ={props.src} style={imageStyle} onLoad={handleImageLoaded} />
           </Fragment>
}