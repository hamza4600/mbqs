import Portal from "components/portal";
import useScrollLock from "Hooks/useScrollock";
import { forwardRef, memo, useEffect, useRef } from "react";
import { ModelOne, ModelTwo } from "./structure";

const Model = memo(forwardRef(
    function Model(props, ref) {
        const {
            children,
            lockScroll = false,
        } = props;
        const innerRef = useRef();
        const [locked, setLocked] = useScrollLock(false || lockScroll, (innerRef || ref));

        useEffect(() => {

            if (lockScroll && locked) {
                setLocked(true);
            } else {
                setLocked(false);
            }
            return () => {
                setLocked(false);
            }
        }, [lockScroll, locked, setLocked]);

        return (
            <div ref={ref || innerRef} {...props}>
                <Portal
                    id="model_"
                >
                    {children}
                </Portal>
            </div>
        )
    }
));

export default Model;

Model.Outer = ModelOne; // for full screen model component
Model.Inner  = ModelTwo;