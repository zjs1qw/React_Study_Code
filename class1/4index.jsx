// class Test extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: this.props.title
//         };
//     }

//     handleBtnClick = () => {
//         this.setState({
//             title: "This is Changed Class Component"
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.title}</h1>
//                 <button onClick={ this.handleBtnClick }>切换</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Test title="This is a Class Component." />,
//     document.getElementById("app")
// )

/**
 * ! 组合组件
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


// class Author extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <span>{ this.props.author }</span>
//         )
//     }
// } 

// class Paragraph extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <p>{ this.props.paragraph }</p>
//         )
//     }
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     state = {
//         title: "This is Title",
//         author: "Zjs",
//         paragraph: "This is Paragraph"
//     }

//     render() {
//         return (
//             <div>
//                 <Title title={ this.state.title } />
//                 <Author author={ this.state.author } />
//                 <Paragraph paragraph={ this.state.paragraph } />
//             </div>
//         )
//     }
// }


// ReactDOM.render(
//     <App/>,
//     document.getElementById("app")
// )

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    state = {
        content: this.props.content
    }

    handleBtnClick = () => {
        this.setState({
            content: "This is Changed Content"
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.content }</h1>
                <button onClick={ this.handleBtnClick }>Click</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App content="This is Content" />,
    document.getElementById("app")
)