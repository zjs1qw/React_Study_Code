// const rEl = <h1>This is a Title</h1>

// ReactDOM.render(
//     rEl,
//     document.getElementById("app")
// )


// class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div></div>
//         )
//     }
// }

/**
 * ! 时钟案例：更新逻辑
 */

function update() {
    const rEl = (
        <div>
            <h1>This is a Title</h1>
            <h2>{ new Date().toString() }</h2>
        </div>
    )

    ReactDOM.render(
        rEl,
        document.getElementById("app")
    )
}

const timer = setInterval(() => {
    update();
}, 1000)



