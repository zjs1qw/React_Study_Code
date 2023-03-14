/**
 * ! 错误边界
 */

// 错误边界组件
class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    // 参数：子组件抛出的错误
    // 返回值就是新的 state
    // 获取捕获的错误，修改错误状态
    // 作用：渲染备用的 UI，渲染阶段调用，不允许出现副作用（异步，操作DOM）
    static getDerivedStateFromError(error) {
        return {

            hasError: true
        }
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1>This is Error UI</h1>
            )
        }

        return this.props.children;
    }
}

class Test extends React.Component {
    render() {
        return (
            <div>{data.title}</div>
        )
    }
}

class Sub extends React.Component {
    render() {
        return (
            <p>This is a Content</p>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Sub />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Test />
                </ErrorBoundary>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)