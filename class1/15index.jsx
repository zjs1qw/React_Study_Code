import Table from "./15.1Table"

class App extends React.Component {
    render() {
        return (
            <Table />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)