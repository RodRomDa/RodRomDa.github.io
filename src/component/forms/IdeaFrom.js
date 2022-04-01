import Form from "../controls/Form";
import FormGroup from "../controls/FormGroup";
import Button from "../controls/Button";
import Input, { TextArea } from "../controls/Input";
import ImageGroup from "../blocks/ImageGroup";
import ResourceGroup from "../blocks/ResourceGroup";
import produce from "immer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function IdeaForm(props) {
    let navigate = useNavigate();

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        resources: '',
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
        
        if(
            data.resources?.reduce((isNotFilled, res) => isNotFilled||!res.name||!res.link, false)
        ) {
            let errState = data.resources.map((res) => {
                return {
                    name: !res.name,
                    link: !res.link
                }
            })
            newErrors.resources = {
                msg: 'Не все поля заполнены',
                errState: errState,
            }
            noErrors = false;
        }
        
        setErrors(newErrors);

        return noErrors;
    }

    const handleChange  = (name, data) => {
        const updatedErrors = produce(errors, draft => {
            draft[name] = '';

            //More complex logic:
            // if(!!draft[name]) {
            //     if(name == 'resources') {
            //         console.log(data);
            //         if(data.resources.reduce?.((isFilled, res) => isFilled&&(!res.name||!res.link))) {
            //             let errState = data.resources.map((res) => {
            //                 return {
            //                     name: !res.name,
            //                     link: !res.link
            //                 }
            //             })
            //             draft[name].errState = errState;
            //         } else draft[name] = '';                    
            //     } else draft[name] = '';
            // }
        });
        setErrors(updatedErrors);
     }

    const handleSubmit = (data) => {
        console.log(data);
        if(validate(data)) {
            navigate(-1)
        }
    }

    return <Form class="idea" onSubmit={handleSubmit} onChange={handleChange} error = {errors}>
                <FormGroup name="title" validate >
                    <Input type = "text" label = "Название идеи" />
                </FormGroup>
                <FormGroup name="description" validate >
                    <TextArea label = "Описание идеи" />
                </FormGroup>
                
                <ImageGroup name="photos" />

                <ResourceGroup name="resources" validate />

                <div className="btn-group">
                    <Button variant="solid" type="submit"><i className="far fa-paper-plane"></i>Отправить</Button>
                </div>
            </Form>
}