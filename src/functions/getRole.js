import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const getUserRole = (props) => (WrappedComponent) => {
    // const detail = props;

    function HOC(props) {
        // redux from store

        const state = useSelector((state) => state.session);

        const {
            isLogedIn,
            isAuthenticated,
            authToken,
            user: { id },
        } = state;

        if (!isLogedIn || !isAuthenticated || authToken === "" || id === "") {
            // window.location.href = "/auth/login"
            return <Navigate to="/" />;
        }
        // document.title = detail.title;

        return <WrappedComponent role={state} {...props} />;
    }
    return HOC;
};

export default getUserRole;
