import React from "react";
import Dropdown from '../controls/Dropdown';
import Checkbox from '../controls/Checkbox';
import FormGroup from "../controls/FormGroup";
import Button from "../controls/Button";
import Input from "../controls/Input";

export default function Home(props) {
    
    return  <main>
                <h1>Заголовок 1</h1>
                <h2>Заголовок 2</h2>
                <h3>Заголовок 3</h3>
                <p>Длительное время наш офис не мог похвастаться достойными условиями труда для наших сотрудников. Но настал период, когда нам нужно обновится. Мы ждём ваших идей и предложений по улучшению условий работы в офисе для достижения высокой производительности.</p>
                <div className="form-group" style={{maxWidth: "350px"}}>
                    <Input label="Label" type="text"/>
                    <Input label="Label" type="password"/>
   
                </div>
                <FormGroup>
                    <Button variant="solid">Simple Button</Button>
                    <Button variant="solid"><i className="far fa-paper-plane"></i>Simple Button</Button>
                    <Button variant="outline">Outline Button</Button>
                </FormGroup>
                <div className="form-group" style={{backgroundColor: "#2B2743"}}>
                    <Button variant="dark-outline">Simple Button</Button>
                </div>
                <div className="form-group">
                <Dropdown title="Подпись"
                options={
                    [
                    { value: "2", label: "Some item" },
                    { value: "3", label: "Dropdown" },
                    { value: "4", label: "Очень важный пункт меню" }
                    ]
                } 
                onChange={(selected)  => {console.log("Selected:"+selected);}}/>

                <Checkbox label="Текст здесь" checked />
                </div>
            </main>
}