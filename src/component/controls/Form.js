import React, { useState } from "react";
import produce from "immer";

function Form(props) {

    const values = React.Children.map(props.children, child => child?.props.name).reduce((a, v) => ({
        ...a,
        [v] : null
    }), {});

    const [data, setData] = useState(values);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target?.type === 'checkbox' ? target.checked : 
                      target?.type === 'file' ? target.files : target.value;
        const name = target.name;

        const newData = produce(data, draft => {
            draft[name] = value;
        });
    
        setData(newData);

        if (typeof props.onChange === "function") { 
            props.onChange(name, newData);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        props.onSubmit?.(data);
    }

    const renderChildren = () => {
        return React.Children.map(props.children, child =>
            (React.isValidElement(child)) ?
            React.cloneElement(child, {
                onChange: handleInputChange,
                error: props.error?.[child.props?.name],
            })
            : child);
    }

    return  <form className={"form " + props?.className ?? ''} onSubmit={handleSubmit}>
                {props.validate&&<span className="error">{props.error?.main}</span>}
                {renderChildren()}
            </form>
}

export default Form;