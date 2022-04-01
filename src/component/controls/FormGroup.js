import React, { useState } from "react";

export default function FormGroup(props) {

    const renderChildren = () => {
        return React.Children.map(props.children, child => {
          return React.cloneElement(child, {
            name: props.name,
            error: props.error,
            onChange: props.onChange,
          })
        })
    }

    return  <div className="form-group">
                {renderChildren()}
                {props.validate&&<span className="error">{props.error}</span>}
            </div>
}