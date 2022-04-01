import React, { useState } from "react";
import Input from "../controls/Input";
import FormGroup from "../controls/FormGroup";
import Button from "../controls/Button";
import Form from "../controls/Form";
import Checkbox from "../controls/Checkbox";
import { useAuth } from "../services/Auth";
import { useLocation, useNavigate } from "react-router-dom";

function LoginForm(props) {

    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    const [errors, setErrors] = useState({
        login: '',
        password: '',
    });

    const validate  = (data) => {
        let newErrors = {};
        let noErrors = true;

        if(!data.email) {
            newErrors.email = 'Поле не заполнено'
            noErrors = false;
        }
        if(!data.password) {
            newErrors.password = 'Поле не заполнено'
            noErrors = false;
        }
        
        setErrors(newErrors);

        return noErrors;
    }

    const handleChange  = (name, data) => {
       setErrors({
           ...errors,
           [name]: ''
       });
    }

    const handleSubmit  = (data) => {
        if(validate(data)) {
            auth.signin(data.email, () => {
                // Send them back to the page they tried to visit when they were
                // redirected to the login page. Use { replace: true } so we don't create
                // another entry in the history stack for the login page.  This means that
                // when they get to the protected page and click the back button, they
                // won't end up back on the login page, which is also really nice for the
                // user experience.
                navigate(from, { replace: true });
            });
        }
    }

    return  <Form className="login-form" onSubmit={handleSubmit} onChange={handleChange} validate error = {errors}>
                <FormGroup name="email" validate>
                    <Input type = "text" label = "Эл. почта" dark />
                </FormGroup>
                <FormGroup name="password" validate>
                    <Input type = "text" label = "Пароль" dark />
                </FormGroup>
                <FormGroup name="remember">
                        <Checkbox label = "Запомнить меня" dark />
                </FormGroup>
                <Button variant="dark-outline" type="submit">Войти</Button>
            </Form>
}

export default LoginForm;