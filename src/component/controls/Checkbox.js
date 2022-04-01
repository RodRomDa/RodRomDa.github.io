import React, { useState } from "react";

export default function Checkbox(props) {

    return  <label className={"checkbox " + (props.dark ? "dark" : "")}>
                <input type="checkbox" name={props.name} onChange={props.onChange}/>
                {props.label}
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
            </label>
}