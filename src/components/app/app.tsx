import { h, Component } from 'preact';

import { Color, getAllColors } from "../../enums/color";
import BoardData from "../../logic/board";
import Board from '../board/board';
import Controls from '../controls/controls';
import Modal from '../modal/modal';
import { styles } from "./style";

export interface IAppProps {
    rows: number
}

export interface IAppState {
    showColorPicker: boolean
    board: BoardData;
    showModal: boolean;
}

export default class App extends Component<IAppProps, IAppState> {

    resetBoard() {
        this.setState({ board: new BoardData(this.props.rows) });
    }
    
    componentWillMount() {
        this.resetBoard();
    }

    render() {
        return <div style={styles.app}>
            <div style={styles.appContainer} >
                <Board board={this.state.board} />
                <Controls 
                    colors={getAllColors()} 
                    onColorSelected={(c: Color) => this.onColorSelected(c)} 
                    clearCallback={() => this.clearCurrentRow()}
                    resetCallback={() => this.showModal()} />
            </div>
            {this.state.showModal && this.renderModal()}
        </div>;
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

        // this.setState({ board: this.state.board });
        // this.state.board.clearCurrentRow();
    }

    showModal() {
        this.setState({ showModal: true });
    }

    renderModal() {
        const onS = () => {
            this.resetBoard();
            this.setState({ showModal: false });
        }

        const onHideModal = () => {
            this.setState({ showModal: false });
        }

        return <Modal 
            title={"Reset board"} 
            text={"Are you sure you want to reset the board?"} 
            onConfirm={() => onS()} 
            onNo={() => onHideModal()} 
        />;
    }
}