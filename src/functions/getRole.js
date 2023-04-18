import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"  // when connceted to server 

const getUserRole = (props) => (WrappedComponent) => {
    // const detail = props;

    function HOC(props) {
        // redux from store 
        const user = useSelector(state => state.loginModel);

        const {
            isValid : isAuth,
            session : {
                id : roleID,
                token : token,
                email : email,
            },
        } = user;

        if (!isAuth || roleID === "" || token === "" || email === "") {
            // window.location.href = "/auth/login"
            return <Navigate to="/" />
        }
        // document.title = detail.title;

        return <WrappedComponent role={user} {...props} />
    }
    return HOC;
}

export default getUserRole;