class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true
        }
    }

    componentDidCatch(err, info) {
        console.log(err);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>This is an Error UI</h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary;