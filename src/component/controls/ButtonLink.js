import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ButtonLink(props) {
    return  <Link className="btn simple" to={props.link}>{props.children}</Link>
}