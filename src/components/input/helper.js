// validator HOC for input components
import React from "react";

function validator(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            value: "",
            error: false,
            errorMessage: "",
        };
        }
    
        validate = (e) => {
        const { value } = e.target;
        const { validate } = this.props;
        const { error, errorMessage } = validate(value);
        this.setState({ value, error, errorMessage });
        };
    
        render() {
        const { value, error, errorMessage } = this.state;  
        return (
            <WrappedComponent
            {...this.props}
            value={value}
            error={error}
            errorMessage={errorMessage}
            onChange={this.validate}
            />
        );
        }
    };
}

export default validator;