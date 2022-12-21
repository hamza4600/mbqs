// check is app being run in Browser or not


const isBowser = () => {
    return (typeof window === "undefined" || window.navigator == null) ;
};

export default isBowser;




