/**
 * ! 条件渲染
 */

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: "",
        password: ""
    }

    login = () => {
        const { username, password } = this.state;
        if(!username.length || !password.length) {
            alert("用户名密码不能为空");
            return;
        }

        // 登录操作
        this.props.login(username, password)

    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        }) 
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>
                    用户名：
                    <input 
                        type="text" 
                        placeholder="用户名"
                        onChange={ this.handleUsernameChange }
                     />
                </p>
                <p>
                    密码:
                    <input 
                        type="password" 
                        placeholder="密码"
                        onChange={ this.handlePasswordChange }
                     />
                </p>
                <p>
                    <button onClick={ this.login }>登录</button>
                </p>
            </div>
        );
    }
}

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome!!!</p>
                <button onClick={ this.props.logout }>Logout</button>
            </div>
        )
    }
}

class TipShow extends React.Component {
    render() {
        const { tipShow } = this.props;

        if(!tipShow) {
            return null;
        }

        return (
            <div> This is Tip </div>
        )
    }
}

class App extends React.Component {

    state = {
        isLoggedIn: false,
        count: "",
        tipShow: false
    }

    logout = () => {
        this.setState({
            isLoggedIn: false,
            tipShow: false
        })
    }

    login = (username, password) => {

        if(username !=123 || password != 123) {
            alert("用户名密码错误");
            return;
        }

        this.setState({
            isLoggedIn: true,
            tipShow: true
        })
    }

    render() {

        const { isLoggedIn, count, tipShow } = this.state;

        // if(isLoggedIn) {
        //     return <Welcome logout={ this.logout } />
        // } else {
        //     return <LoginForm login= { this.login } />
        // }

        /**
         *  ! 三目运算
         */ 
        return (
            <div>
                {
                    isLoggedIn && <span>Hello</span>
                }
                {   
                    // 一定不会返回 p,但是会返回 false 的表达式0
                    // 判断表达式一定是布尔值 false 或 null、undefined 时不会被渲染
                    // 0 ,"", NaN会被渲染
                    // 解决方法 toString
                    count && <p>会员等级: { count }</p>
                }
                {
                    isLoggedIn 
                    ? <Welcome logout={ this.logout } /> 
                    :<LoginForm login= { this.login } /> 
                }
                <TipShow tipShow={ tipShow } />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)


/**
 * ! 官网示例
 */

// function Login(props) {
//     return (
//         <button onClick={ props.onClick }>Login</button>
//     )
// }

// function Logout(props) {
//     return (
//         <button onClick={ props.onClick }>Logout</button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     state = {
//         isLogIn: false
//     }

//     handelLoginBtn = () => {
//         this.setState({
//             isLogIn: true
//         })
//     }

//     handleLogoutBtn = () => {
//         this.setState({
//             isLogIn: false
//         })
//     }

//     render() {
//         const { isLogIn } = this.state;
//         let button;

//         if(isLogIn) {
//             button = <Logout onClick= { this.handleLogoutBtn } />
            
//         } else {
//             button = <Login onClick= { this.handelLoginBtn } />
//         }

//         return (
//             <div>
//                  {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById("app")
// )
