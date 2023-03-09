import styles from "./index.module.css"
/**
 * ! 包含组合
 */

// class Container extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div className="container">
//                 {this.props.children}
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     render() { 
//         return (
//             <Container >
//                 <h1>Title</h1>
//                 <p>Content</p>
//             </Container>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("app")
// )

/**
 * ! props 可以传递任何属性
 */

class Container extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className={ styles.container }>
                <div className={ styles.header }>
                    { this.props.header }
                </div>
                <div className={ styles.sideBar }>
                    { this.props.sideBar }
                </div>
                <div className={ styles.Main }>
                    { this.props.Main }
                </div>
            </div>
        )
    }
}

function Header(props) {
    return (
        <p>Header</p>
    )
}

function SideBar(props) {
    return (
        <p>SideBar</p>
    )
}

function Main(props) {
    return (
        <p>Main</p>
    )
}

class App extends React.Component {
    render() { 
        return (
           <Container 
                header={ <Header/> }
                sideBar={ <SideBar /> }
                Main={ <Main /> }
           />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)