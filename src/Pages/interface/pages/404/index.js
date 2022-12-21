const ErrorPage = () => {
    return (
        <div>
            <h1>404 Page</h1>
            <button
                onClick={() => {
                    window.location.href = '/';
                }}
            >Go to Home</button>
        </div>
    );
}

export default ErrorPage;