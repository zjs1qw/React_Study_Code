// class MyButton extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         openStatus: false,
//       };
//     }
//     render() {
//       return React.createElement(
//         "div",
//         {
//            "data-tag": "div",
//         },
//         "This is my first React Experience"
//       );
//     }
//   }

//   ReactDOM.render(
//     // 将虚拟节点转化为真实节点并放入容器中
//     React.createElement(MyButton),
//     document.getElementById("app")
//   )

/**
 * ! 开关灯案例
 */

class MyButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openStatus: false,
        };
    }

    render() {
        return React.createElement(
            "p",
            {
                className: "text",
                key: "1",
            },
            this.state.openStatus ? "打开" : "关闭",
            React.createElement(
                "button",
                {
                    key: 2,
                    onClick: () => {
                        this.setState({
                            openStatus: !this.state.openStatus,
                        });
                    },
                },
                this.state.openStatus ? "关闭" : "开启"
            )
        );
    }
}

ReactDOM.render(<MyButton />, document.getElementById("app"));
