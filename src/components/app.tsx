import { h, Component } from 'preact';

import { Color, getAllColors } from "../enums/color";
import SolutionChecker from "../logic/solution-checker";
import RowData from "../logic/row";
import { MAX_COLUMNS } from "../logic/constants";

import Board from './board';
import ColorPicker from './color-picker';

const styles = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
}

export interface IAppProps {
    rows: number
}

export interface IAppState {
    showColorPicker: boolean
    board: Array<RowData>;
}

export default class App extends Component<IAppProps, IAppState> {
    private solution: RowData;
    private solutionChecker: SolutionChecker;

    setRandomSolution() {
        const colors = getAllColors();

        for(let i = 0; i < MAX_COLUMNS; i++) {
            const rnd = Math.floor((Math.random() * colors.length));
            this.solution.addPeg(colors[rnd]);
        }
    }

    reset() {
        this.solutionChecker = new SolutionChecker();
        
        const board = [];
        for(let i = 0; i < this.props.rows; i++) {
            board.push(new RowData());
        }

        this.setState({ board: board });
    }

    componentWillMount() {
        this.solution = new RowData();
        this.setRandomSolution();
        this.reset();
    }

    render() {
        return <div style={styles}>
            {this.renderBoard()}
            {this.renderColorPicker()}
        </div>;
    }

    renderBoard() {
        return <Board rows={this.state.board} solution={this.solution} />;
    }

    renderColorPicker() {
        return <ColorPicker colors={getAllColors()} onColorSelected={(color: Color) => alert(`Selected ${color}`)} />;
    }
}