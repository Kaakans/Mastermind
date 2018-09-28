import { h, Component } from "preact";
import { Color, getAllColors } from "../enums/color";
import SolutionChecker from "../logic/solution-checker";
import Row from "../logic/row";
import { shallowClone } from "../utils/util";
import Peg from "../logic/peg";
import { MAX_COLUMNS } from "../logic/constants";

const styles = {
    board: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    row: {
        padding: "10px 10px",
        display: "grid",
        gridTemplate: "50px / 50px 50px 50px 50px",
        columnGap: "10px",
        justifyContent: "flex-start",
        alignItems: "center",
        border: "1px solid black"
    },

    peg: {
        width: "100%",
        height: "100%",
        border: "1px solid black"
    }
}

export interface IBoardProps {
    rows: number;
}

export default class Board extends Component<IBoardProps, any> {
    private solution: Row;
    private board: Array<Row>;
    private solutionChecker: SolutionChecker;

    setRandomSolution() {
        const colors = getAllColors();

        for(let i = 0; i < MAX_COLUMNS; i++) {
            const rnd = Math.floor((Math.random() * colors.length));
            this.solution.addPeg(colors[rnd]);
        }
    }

    reset(rows: number) {
        this.solutionChecker = new SolutionChecker();
        this.board = [];
        for(let i = 0; i < rows; i++) {
            this.board.push(new Row());
        }
    }

    render(props: IBoardProps) {
        this.solution = new Row();
        this.setRandomSolution();
        this.reset(this.props.rows);

        return <div style={styles.board}>
            {this.renderRows()}
        </div>;
    }

    renderRows() {
        return this.board.map((r: Row) => this.renderRow(r));
    }

    renderRow(row: Row) {
        return <div style={styles.row}>
            {this.renderPegs(row)}
        </div>;
    }

    renderPegs(row: Row) {
        return row.getPegs().map((p: Peg) => this.renderPeg(p.getColor()));
    }

    renderPeg(c: Color) {
        const peg = shallowClone(styles.peg);
        peg.backgroundColor = c;

        return <div style={peg}></div>;
    }
}