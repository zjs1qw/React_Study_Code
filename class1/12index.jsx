/**
 * ! 代码分割
 */

// lazy 与 Suspense
import Loading from "./12.1Loading.jsx";

const MainComponent = React.lazy(() => {
    return import("./12.2Main.jsx");
})

class App extends React.Component {
    render() {
        return (
            <React.Suspense fallback= { <Loading /> }>
                <div>
                    <MainComponent />
                </div>
            </React.Suspense>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)