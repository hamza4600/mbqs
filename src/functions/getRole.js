import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutSuccess } from "store/session";

const getUserRole = (props) => (WrappedComponent) => {
    // const detail = props;

    function HOC(props) {

        // redux from store
        const state = useSelector((state) => state.session);
        const dispatch = useDispatch();

        const {
            isLogedIn,
            isAuthenticated,
            authToken,
            timeinMilli,
            user: { id },
        } = state;

        if (!isLogedIn || !isAuthenticated || authToken === "" || id === "") {
            // window.location.href = "/auth/login"
            return <Navigate to="/" />;
        }
        
        // login out user after 8 hours
        const currentTime = new Date().getTime();
        const diff = currentTime - timeinMilli;

        const eightHours = 28800000;

        if (diff > eightHours) {
            console.log("logout eight hours ago");
             dispatch(logoutSuccess());
            return <Navigate to="/" />;
        }

        return <WrappedComponent role={state} {...props} />;
    }
    return HOC;
};

export default getUserRole;
