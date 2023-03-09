class Info extends React.Component {
    render() {
        return (
            <div>
                <p>第{this.props.num}个 Info</p>
                <p>提示: 输出长度为 {this.props.username.length}</p>
                <p>
                    {this.props.username.length < 6
                        ? "长度必须大于等于6位"
                        : this.props.username.length >= 6 &&
                            this.props.username.length <= 12
                            ? "长度合法"
                            : "长度必须小于12"}
                </p>
            </div>
        );
    }
}

/**
 * ! 函数组件
 */
// 组件嵌与调用与组件类型没有关系
// function Info(props) {
//     return (
//         <div>
//             <p>第{props.num}个 Info</p>
//             <p>提示: 输出长度为 {props.username.length}</p>
//             <p>
//                 {props.username.length < 6
//                     ? "长度必须大于等于6位"
//                     : props.username.length >= 6 && props.username.length <= 12
//                         ? "长度合法"
//                         : "长度必须小于12"}
//             </p>
//         </div>
//     );
// }

// 组件调用(实例化) 的时候组件内部的状态是唯一且各自独立的
class UserNameInput extends React.Component {
    // state = {
    //     username: "",
    // };

    // handleInput = (e) => {
    //     this.setState(
    //         {
    //             username: e.target.value,
    //         },
    //         () => {
    //             console.log(this.state.username);
    //         }
    //     );
    // };

    render() {
        return (
            <div>
                <Info username={this.props.username} num={this.props.num} />
                <div>
                    <input type="text" value={ this.props.username } onChange={this.props.usernameChange} />
                </div>
            </div>
        );
    }
}

// function UserNameInput(props) {
//     const [username, setUsername] = React.useState("");

//     // const handleInput = (e) => {
//     //     setUsername(e.target.value)
//     // }

//     return (
//         <div>
//             <Info username={username} num={props.num} />
//             <div>
//                 <input type="text" onChange={(e) => setUsername(e.target.value)} />
//             </div>
//         </div>
//     );
// }

class App extends React.Component {

    // 状态由父组件管理，子组件只拿状态
    state = {
        username: ""
    }

    handleInput = (e) => {
        this.setState(
            {
                username: e.target.value,
            },
            () => {
                console.log(this.state.username);
            }
        );
    };

    render() {

        const { username } = this.state

        return (
            <div>
                <UserNameInput num={1} username={ username } usernameChange={ this.handleInput } />
                <UserNameInput num={2} username={ username } usernameChange={ this.handleInput } />
            </div>
        );
    }
}

// function App(props) {
//     return (
//         <div>
//             <UserNameInput num={1} />
//             <UserNameInput num={2} />
//         </div>
//     );
// }

ReactDOM.render(<App />, document.getElementById("app"));
