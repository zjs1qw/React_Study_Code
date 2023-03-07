// const rEle = <h1>This is my First JSX</h1>

// ReactDOM.render(
//     rEle,
//     document.getElementById("app")
// )

/**
 * ! JSX 与 React.createElement 的对比
 */

// const rEl = React.createElement("h1", { className: "title" }, "hello world")
// const  rEl = <h1 className="title">hello world</h1>

// ReactDOM.render(
//     rEl,
//     document.getElementById("app")
// )

/**
 * ! 对上节代码的重写
 */

// class MyButton extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             openStatus: false
//         }
//     }

//     handleBtn = () => {
//         this.setState({
//             openStatus: !this.state.openStatus
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.openStatus ? "开启" : "关闭"}</p>
//                 <button onClick={this.handleBtn}>{this.state.openStatus ? "关闭" : "开启"}</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <MyButton />,
//     document.getElementById("app")
// )

// const rEl = <h1 className="title">This is a Title</h1>

// console.log(rEl);

