import React, { useState } from "react";
import produce from "immer";
import Input, { TextArea } from "../controls/Input";
import Button from "../controls/Button";
import FormGroup from "../controls/FormGroup";

export default function StageGroup(props) {
    const [stages, setStages] = useState([]);

    const handleChange = (i, data) => {
        const newStages = produce(stages, draft => {
            draft[i] = data;
        });


        setStages(newStages);
        props.onChange({
            target: {
                name: props.name,
                value: newStages
            }
        });
    }

    const handleDelete = (i) => {
        const newStages = produce(stages, draft => {
            draft.splice(i, 1);
        });


        setStages(newStages);
        props.onChange({
            target: {
                name: props.name,
                value: newStages
            }
        });
    }

    const handleAddClick = () => {
        const newStages = produce(stages, draft => {
            draft.push({
                title: '',
                description: '',
                daysSuggest: '',
                daysVote: '',
            })
        });


        setStages(newStages);
        props.onChange({
            target: {
                name: props.name,
                value: newStages
            }
        });
    }

    return  <div className="form-group input-stages">
                <ul className="input-stages">
                    {stages.map((stage, i) =>
                        <StageInput
                        key={i}
                        data={stage}
                        onDelete={() => handleDelete(i)}
                        onChange={(data) => handleChange(i, data)}
                        validate
                        error={props.error?.[i]}/>
                    )}
                </ul>
                <Button variant="outline" type="button" onClick={handleAddClick}>Добавить этап</Button>
            </div>
}

export function StageInput(props) {
    const handleChange = (name, event) => {
        const data = {
            ...props.data,
            [name]: event.target.value,
        }
        props.onChange(data);
    }

    return <li className="stage">
                <div className="stage-head">
                    <h2>Этап</h2>
                    <Button variant="outline close" type="button" onClick={props.onDelete}><span className="material-icons">close</span></Button>
                </div>
                <div className="stage-body">
                    <div className="form-group">
                        <Input type = "text" label = "Название этапа"
                            onChange={(event) => handleChange("title", event)}
                            value={props.data.title} 
                            error={props.error?.errState.title}/>
                    </div>
                    <div className="form-group">
                        <TextArea label = "Название этапа"
                            onChange={(event) => handleChange("description", event)}
                            value={props.data.description}
                            error={props.error?.errState.description}/>
                    </div>
                    <h3>Продолжительность фазы предложение идей</h3>
                    <div className="form-group">
                        <Input className="number" type = "number" label = "Количество дней"
                            onChange={(event) => handleChange("daysSuggest", event)}
                            value={props.data.daysSuggest}
                            error={props.error?.errState.daysSuggest}/>
                    </div>
                    <h3>Продолжительность фазы оценивания идей</h3>
                    <div className="form-group">
                        <Input className="number" type = "number" label = "Количество дней"
                            onChange={(event) => handleChange("daysVote", event)}
                            value={props.data.daysVote}
                            error={props.error?.errState.daysVote} />
                        {props.validate&&<span className="error">{props.error?.msg}</span>}
                    </div>
                </div>
            </li>
}