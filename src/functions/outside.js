import React from 'react';

function outisdeClick(WrapperComponent, callback) {
    function HOC(props) {

        const { outSide } = props;
        const ref = React.useRef(null);
        React.useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    outSide && typeof outSide === "function" && outSide();
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [outSide, ref]);
        return <div
            style={{ position: "relative" }}
            ref={ref}
        >
            <WrapperComponent {...props} />
        </div>;
    }
    return HOC;
}

export default outisdeClick;