/**
 * ! 封装模态框
 * TODO: 多层组合
 */
import styles from "./modal.module.css"

// 最公共的部分
function Modal(props) {
    return (
        <div className={styles.modal}>
            <header className={styles.modalHeader}>
                <h1>{props.title}</h1>
            </header>
            <div className={styles.modalContent}>
                {/* 包含组合 */}
                {props.children}
            </div>
        </div>
    )
}

function Alert(props) {
    return (
        <Modal title={props.title} >
            <p>{props.alertText}</p>
        </Modal>
    )
}

function LoginModal(props) {
    return (
        <Modal title={ "登录" } >
            <form>
                <p>
                    <input type="text" placeholder="用户名" />
                </p>
                <p>
                    <input type="password" placeholder="密码" />
                </p>
                <p>
                    <button>登录</button>
                </p>
            </form>
        </Modal>
    )
}



function WelcomeAlert(props) {
    return (
        <Alert title={"欢迎"} alertText={"用户"} />
    )
}

function App(props) {
    return (
        <div>
            <WelcomeAlert />
            <LoginModal />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)