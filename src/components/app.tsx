import { h, Component } from 'preact';

import { Color, getAllColors } from "../enums/color";
import BoardData from "../logic/board";
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
    board: BoardData;
}

export default class App extends Component<IAppProps, IAppState> {

    componentWillMount() {
        this.setState({ board: new BoardData(this.props.rows) });
    }

    render() {
        return <div style={styles}>
            {this.renderBoard()}
            {this.renderColorPicker()}
        </div>;
    }

    renderBoard() {
        return <Board board={this.state.board} />;
    }

    checkVictoryCondition() {
        if (this.state.board.isSolved()) {
            alert("Victory!");
        }
    }

    onColorSelected(color: Color) {
        this.state.board.addPeg(color);
        this.state.board.checkSolution();
        this.setState({ board: this.state.board }, this.checkVictoryCondition);
    }

    renderColorPicker() {
        return <ColorPicker colors={getAllColors()} onColorSelected={(color: Color) => this.onColorSelected(color)} />;
    }
}