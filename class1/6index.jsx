// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     doSomething = () => {
//         console.log("Something is Done");
//     }

//     handleA = (e) => {
//         // e.preventDefault();
//         console.log("A");
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={ this.doSomething }>Click</button>
//                 <a href="javascript" onClick={ this.handleA }> A </a>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("app")
// )

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.doSth = this.doSth.bind(this);
//   }

//   doSth() {
//     console.log("DO");
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.doSomething()}> Click </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));
