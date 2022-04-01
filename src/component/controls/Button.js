import React, { Fragment, useState } from "react";

export default function Button(props) {
    return  <button className={"btn "+props.variant} type={props.type} onClick={props.onClick}>{props.children}</button>
}