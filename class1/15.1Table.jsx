/**
 * ! React.Fragment
 */

import { nanoid } from "nanoid";

class Table extends React.Component {
    state = {
        headers: [
            "Name",
            "ID",
            "Age"
        ],
        bodyData: [
            {
                name: "张三",
                id: 1,
                age: 30
            }
        ]
    }

    render() {

        const { headers, bodyData } = this.state

        return (
            <table border="1">
                <caption>
                    Private Information
                </caption>
                <thead>
                    <tr>
                        <TableHeaders headers={headers} />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableBody bodyData={bodyData} />
                    </tr>
                </tbody>
            </table>
        )
    }
}

class TableHeaders extends React.Component {

    render() {

        const { headers } = this.props;

        const headerItem = headers.map((item) => {
            const ids = nanoid()
            return (
                <th key={ids}>{item}</th>
            )
        })

        return <>{headerItem}</>
    }
}

class TableBody extends React.Component {

    render() {

        const { bodyData } = this.props;

        const dataItem = bodyData.map((item) => {
            const ids = nanoid()
            return (
                <React.Fragment key={ids}>
                    <td>{item.name}</td>
                    <td>{ids}</td>
                    <td>{item.id}</td>
                    <td>{item.age}</td>
                </React.Fragment>
            )
        })

        return <>{dataItem}</>

    }

}

export default Table