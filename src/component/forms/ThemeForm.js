import Form from "../controls/Form";
import FormGroup from "../controls/FormGroup";
import Button from "../controls/Button";
import Input, { TextArea } from "../controls/Input";
import ImageGroup from "../blocks/ImageGroup";
import produce from "immer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StageGroup from "../blocks/StageGroup";

export default function ThemeForm(props) {
    let navigate = useNavigate();

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        stages: '',
    });

    const validate  = (data) => {
        let newErrors = {};
        let noErrors = true;

        if(!data.title) {
            newErrors.title = 'Поле не заполнено'
            noErrors = false;
        }
        if(!data.description) {
            newErrors.description = 'Поле не заполнено'
            noErrors = false;
        }


        const stageErr = data.stages?.map((stage) => {
                let errState = {
                    title: !stage.title,
                    description: !stage.description,
                    daysSuggest: (stage.daysSuggest === ''),
                    daysVote: (stage.daysVote === '')
                }

                if(!stage.title ||
                   !stage.description ||
                   (stage.daysSuggest === '') ||
                   (stage.daysVote === '')) {

                    noErrors = false;
                    return {
                        msg: 'Не все поля заполнены',
                        errState: errState,
                    }
                } else {
                    return null
                }
        });

        newErrors.stages = stageErr;
        
        setErrors(newErrors);

        return noErrors;
    }

    const handleChange  = (name, data) => {
        const updatedErrors = produce(errors, draft => {
            if((name === 'stages')&&!!draft[name]) {
                const stageErr = data.stages?.map((stage) => {
                    let errState = {
                        title: !stage.title,
                        description: !stage.description,
                        daysSuggest: (stage.daysSuggest === ''),
                        daysVote: (stage.daysVote === '')
                    }
    
                    if(!stage.title ||
                       !stage.description ||
                       (stage.daysSuggest === '') ||
                       (stage.daysVote === '')) {
                        return {
                            msg: 'Не все поля заполнены',
                            errState: errState,
                        }
                    } else {
                        return null
                    }
                });
                console.log(stageErr);

                const all_null = stageErr.every(function(stage) { return stage === null; });
                if(all_null) {
                    draft[name] = '';
                } else draft[name] = stageErr;
                
            } else draft[name] = '';
        });

        setErrors(updatedErrors);
     }

    const handleSubmit = (data) => {
        console.log(data);
        if(validate(data)) {
            navigate(-1)
        }
    }

    return <Form class="theme" onSubmit={handleSubmit} onChange={handleChange} error = {errors}>
                <FormGroup name="title" validate >
                    <Input type = "text" label = "Название тематики" />
                </FormGroup>
                <FormGroup name="description" validate >
                    <TextArea label = "Описание тематики" />
                </FormGroup>
                
                <ImageGroup name="photos" />

                <StageGroup name="stages" />

                <div className="btn-group">
                    <Button variant="solid" type="submit"><span className="material-icons">add</span>Создать</Button>
                </div>
            </Form>
}