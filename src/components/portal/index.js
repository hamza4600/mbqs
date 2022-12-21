import { Component, forwardRef, memo } from 'react'
import ReactDOM from 'react-dom'

// for showing a dialog, we need to create a portal and render the dialog into it
class Port extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        // set attributes
        this.el.setAttribute('id', this.props);
        this.el.id = this.props.id;
        // pass all props to the portal
        this.el.props = this.props;
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {

        if (!this.el) return null;

        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

// const Portal = memo(props) => {
//     return <Port {...props} />
// }

const Portal = memo(forwardRef(
    function Portal(props, ref) {
        return (<Port {...props}>
            {props.children}
        </Port>)
    }
))

export default Portal;