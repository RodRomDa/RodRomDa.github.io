import React, { useState } from "react";

export default function Dropdown (props) {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState(props.selected ?? '');

    const handleSelect = (option) => {
        setSelected(option.value);
    }
    const handleOpen = () => {
        setOpen(!isOpen);
    }

    const getSelected = () => {
        return props.options.find((opt) => opt.value === selected);
    }
 
    return <div className={"dropdown " + (isOpen ? "open" : "")} onClick={handleOpen}>
                <span>{
                    selected ?
                    getSelected().label :
                    props.title
                }</span>
                <ul className="list">
                    {props.options.map((option) =>
                        <li className={"option " + (selected === option.value ? "selected" : "")}
                            key={option.value}
                            onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>
                    )}
                </ul>
                <input className="hidden" name = {props.name} type="text" value={selected} onChange={props.onChange}/>
           </div>;
}

// export function Item(props) {
//     console.log(props);
//     return <li className={"option " + (props.selected ? "selected" : "")} key={props.value} data-value={props.value}>{props.children}</li>
// }