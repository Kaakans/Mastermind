import { h, Component } from "preact";
import BoardData from "../../logic/board";
import RowData from "../../logic/row";
import Row from "../row/row";
import { styles } from "./style";

export interface IBoardProps {
    board: BoardData;
}

export default class Board extends Component<IBoardProps, any> {
    render() {
        return <div style={styles.board}>
            <Row row={this.props.board.getSolution()} isSolution={true} isCurrent={false} />
            {this.props.board.getRows().map((r: RowData, i: number, a: Array<RowData>) => {
                const isCurrentRow = !r.isFull() && (!a[i-1] || a[i-1] && a[i-1].isFull());
                return <Row row={r} isSolution={false} isCurrent={isCurrentRow} />;
            })}
        </div>;
    }
}