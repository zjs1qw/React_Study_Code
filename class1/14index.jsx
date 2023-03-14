/**
 * ! 捕获异常边界中的代码分割
 */

import Loading from "./14.loading";
import ErrorBoundary from "./14ErrorBoundary";

const TestComponent = React.lazy(() => import("./14.module"))


class App extends React.Component {
    render() {
        return (
            <div>
                <div>123</div>
                <ErrorBoundary>
                    <React.Suspense fallback={<Loading />}>
                        <TestComponent />
                    </React.Suspense>
                </ErrorBoundary>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
)