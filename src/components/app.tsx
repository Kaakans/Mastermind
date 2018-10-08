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

    resetBoard() {
        this.setState({ board: new BoardData(this.props.rows) });
    }
    
    componentWillMount() {
        this.resetBoard();
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
        } else if (this.state.board.isLost()) {
            alert("Lost!");
        }
    }

    onColorSelected(color: Color) {
        this.state.board.addPeg(color);
        this.state.board.checkSolution();
        this.setState({ board: this.state.board }, this.checkVictoryCondition);
    }

    clearCurrentRow() {
        this.state.board.clearCurrentRow();
        this.setState({ board: this.state.board });
    }

    renderColorPicker() {
        return <ColorPicker 
            colors={getAllColors()} 
            onColorSelected={(c: Color) => this.onColorSelected(c)} 
            clearCallback={() => this.clearCurrentRow()}
            resetCallback={() => this.resetBoard()} />;
    }
}