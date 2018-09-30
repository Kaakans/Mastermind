import { h, Component } from "preact";
import RowData from "../logic/row";
import Row from "./row";

const styles = {
    board: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowY: "auto"
    }
}

export interface IBoardProps {
    rows: Array<RowData>;
    solution: RowData;
}

export default class Board extends Component<IBoardProps, any> {
    render() {
        return <div style={styles.board}>
            <Row row={this.props.solution} isSolution={true} onSelectedCallback={null} />
            <hr />
            {this.props.rows.map((r: RowData) => <Row row={r} isSolution={false} onSelectedCallback={() => this.setState(this.state)} />)}
        </div>;
    }
}