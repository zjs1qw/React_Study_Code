import { nanoid } from "nanoid";

// class App extends React.Component {
//     state = {
//         arr: [
//             {
//                 id: 1,
//                 name: "张三"
//             },
//             {
//                 id: 2,
//                 name: "李四"
//             },
//             {
//                 id: 3,
//                 name: "王五"
//             }
//         ]
//     }

//     render() {

//         const { arr } = this.state;

//         const arrItem = arr.map((item) => {
//             return (
//                 <tr key={ item.id }>
//                     <td>{ item.id }</td>
//                     <td>{ item.name }</td>
//                 </tr>
//             )
//         })

//         return (
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>名字</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     { arrItem }
//                 </tbody>
//             </table>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("app")
// )

// function ShowTable(props) {
//     const arr = props.arr;

//     const arrItem = arr.map((item) => {
//         const key = nanoid()
//         return (
//             <tr key={ key }>
//                 <td>{ key }</td>
//                 <td>{ item.id }</td>
//                 <td>{ item.name }</td>
//             </tr>
//         );
//     });

//     return (
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>SID</th>
//                     <th>ID</th>
//                     <th>名字</th>
//                 </tr>
//             </thead>
//             <tbody>{ arrItem }</tbody>
//         </table>
//     );
// }

// const arr = [
//     {
//         id: 1,
//         name: "张三",
//     },
//     {
//         id: 2,
//         name: "李四",
//     },
//     {
//         id: 3,
//         name: "王五",
//     },
// ];

// ReactDOM.render(<ShowTable arr={arr} />, document.getElementById("app"));

class ItemTitle extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <td>KEY</td>
                    <td>ID</td>
                    <td>NAME</td>
                </tr>
            </thead>
        )
    }
}

class ListItem extends React.Component {

    render() {
        const { sid, item } = this.props

        return (
            <tr>
                <td>{ sid }</td>
                <td>{ item.id }</td>
                <td>{ item.name }</td>
            </tr>
        )
    }
}

class App extends React.Component {
    state = {
        arr: [
            {
                id: 1,
                name: "张三",
            },
            {
                id: 2,
                name: "李四",
            },
            {
                id: 3,
                name: "王五",
            },
        ]
    }

    render() {
        
        const arrItem = this.state.arr.map((item) => {
            const sid = nanoid();
            return <ListItem key={ sid } sid={ sid } item={ item } />
        })

       return (
            <table border="1">
                <ItemTitle />
                <tbody>
                    { arrItem }
                </tbody>
            </table>
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
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => {
//   return <li>{ number }</li>
// })

// console.log(listItems);

// ReactDOM.render(
//   <ul>{ listItems }</ul>,
//   document.getElementById("app")
// )

// function NumberList(props) {
//     const numbers = props.numbers

//     const listItems = numbers.map((item) => {
//         return <li>{ item }</li>
//     })

//     return (
//         <ul>{ listItems }</ul>
//     )
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={ numbers }/>,
//     document.getElementById("app")
// )
