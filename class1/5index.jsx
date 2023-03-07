/**
 * ! state 与 生命周期函数的使用案例
 */
// class Title extends React.Component {
//     constructor(props) {
//         super(props)
//     }


//     render() {
//         return (
//             <h1>{ this.props.title }</h1>
//         )
//     }
// }


// class DateTime extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     state = {
//         dateTime: new Date().toString()
//     }

//     // 组件已经被挂载到真实 DOM中后，运行的函数
//     componentDidMount() {
//         this.t = setInterval(() => {
//             this.setState({
//                 dateTime: new Date().toString()
//             })
//         }, 1000);
//     }

//     // 组件即将被卸载时运行
//     componentWillUnmount() {
//         clearInterval(this.t);
//         this.t = null
//         console.log("Over");
//     }

//     render() {
//         return (
//             <h2 id="dateTime">It's NOW { this.state.dateTime }</h2>
//         )
//     }
// }

// class Board extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <Title title="This is Title" />
//                 <DateTime />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Board />,
//     document.getElementById("app")
// )

// setTimeout(() => {
//     // 卸载组件的方法
//     ReactDOM.unmountComponentAtNode(
//         document.getElementById("app")
//     )
// }, 5000);

/**
 * ! 可以使用 props 传递 state
 */
class Title extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <h1>{ this.props.title }</h1>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        title: "This is Title."
    }

    render() {
        return (
            <div>
                <Title title={ this.state.title } />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)