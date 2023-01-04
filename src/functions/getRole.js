import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom"  // when connceted to server 

const getUserRole = (props) => (WrappedComponent) => {
    const detail = props;

    function HOC(props) {
        // redux from store 
        const role = useSelector(state => state.user);

        const {
            isAuth,
            role: userRole,
            roleID,
        } = role;

        if (!isAuth || userRole !== detail.name || roleID === "") {
            // return <Navigate to={detail.login} />
        }
        document.title = detail.title;

        return <WrappedComponent role={role} {...props} />
    }
    return HOC;
}

export default getUserRole;