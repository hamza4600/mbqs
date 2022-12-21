//  custom erro Handler
// so app may Not Break   need to append That
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            detail: "",
        };
    }

    static getDerivedStateFromError(error) {
        console.log("errr==", error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true, detail: error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "2rem",
                        color: "green",
                        minHeight: "100vh",
                        background: "black",
                    }}
                >
                    <h1>Something went wrong.</h1>
                    <h2>{`${this.state.detail}`}</h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
