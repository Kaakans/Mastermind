import { h, Component } from "preact";

import SolutionChecker from "../logic/solution-checker";
import RowData from "../logic/row";
import { getAllColors } from "../enums/color";
import { MAX_COLUMNS } from "../logic/constants";

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
    rows: number;
}

export default class Board extends Component<IBoardProps, any> {
    private solution: RowData;
    private board: Array<RowData>;
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
            this.board.push(new RowData());
        }
    }

    componentWillMount() {
        this.solution = new RowData();
        this.setRandomSolution();
        this.reset(this.props.rows);
    }

    render() {
        return <div style={styles.board}>
            <Row row={this.solution} isSolution={true}/>
            <hr />
            {this.board.map((r: RowData) => <Row row={r} isSolution={false}/>)}
        </div>;
    }
}