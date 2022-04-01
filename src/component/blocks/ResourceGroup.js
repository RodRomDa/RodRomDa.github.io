import React, { useState } from "react";
import produce from "immer";
import Input from "../controls/Input";
import Button from "../controls/Button";

export default function ResourceGroup(props) {
    const [res, setRes] = useState([]);

    const handleChange = (i, data) => {
        const newRes = produce(res, draft => {
            draft[i] = data;
        });
        setRes(newRes);
        props.onChange({
            target: {
                name: props.name,
                value: newRes
            }
        });
    }

    const handleDelete = (i) => {
        const newRes = produce(res, draft => {
            draft.splice(i, 1);
        });
        setRes(newRes);
        props.onChange({
            target: {
                name: props.name,
                value: newRes
            }
        });
    }

    const handleAddClick = () => {
        const newRes = produce(res, draft => {
            draft.push({
                name: '',
                link: ''
            })
        });
        setRes(newRes);
        props.onChange({
            target: {
                name: props.name,
                value: newRes
            }
        });
    }

    return  <div className="form-group resources">
                <ul className="resource-links">
                    {res.map((resource, i) =>
                     <ResourceLinkInput
                        key={i}
                        name = {resource.name}
                        link = {resource.link}
                        onChange={(data) => handleChange(i, data)}
                        onDelete={() => handleDelete(i)}
                        error = {props.error?.errState?.[i]} 
                        />
                    )}
                    {props.validate&&props.error&&<span className="error">{props.error?.msg}</span>}
                </ul>
                <Button variant="outline" type="button" onClick={handleAddClick}>Добавить ресурс</Button>
            </div>
}

export function ResourceLinkInput(props) {

    const handleChangeName = (event) => {
        const data = {
            name: event.target.value,
            link: props.link
        }
        props.onChange(data);
    }

    const handleChangeLink = (event) => {
        const data = {
            name: props.name,
            link: event.target.value
        }
        props.onChange(data);
    }

    return <li className="link">
                <Input type = "text" label = "Название" value={props.name} onChange={handleChangeName} error={props.error?.name}/>
                <Input type = "text" label = "Ссылка" value={props.link} onChange={handleChangeLink} error={props.error?.link}/>
                <Button variant="outline close" type="button" onClick={props.onDelete}><span className="material-icons">close</span></Button>
            </li>
}