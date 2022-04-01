import React, { Fragment, useEffect, useRef, useState } from "react";

export default function Input(props) {
    if(props?.type === 'file') {
        return <label className="btn solid" onClick={props.onClick} >{props.label}
                    <input onChange={props.onChange} className="hidden" name={props.name} type={props.type} accept={props.accept} multiple={props.multiple}/>
               </label>
               
    }
    return  <label className={"inp " + (props.dark ? "dark " : "") + (props.error ? "error " : "") + (props.className ?? "")} onClick={props.onClick}>
                <input className="input" name={props.name} type={props.type} placeholder=" " onChange={props.onChange} value={props.value}/>
                <span className="label">{props.label}</span>
            </label>
}

export function TextArea(props) {
    const minLines = props.minRows ?? 1;

    const [lines, setLines] = useState(minLines);

    const handleChange = (event) => {
        const val = event.target.value;
        const linesCount = val.split("\n").length;
        setLines(Math.max(linesCount, minLines));

        props.onChange(event);
    }

    return  <label className={"inp " + (props.dark ? "dark " : "") + (props.error ? "error" : "")}>
                <textarea className="input" placeholder=" "
                 rows={lines}
                 name={props.name}
                 onChange={handleChange}
                 value={props.value}/>
                <span className="label">{props.label}</span>
            </label>
}