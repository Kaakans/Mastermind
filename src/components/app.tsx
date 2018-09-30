import { h, Component } from 'preact';
import { Color, getAllColors } from "../enums/color";
import ColorPicker from './color-picker';
import Board from './board';

const appStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
}

export interface IAppState {
    showColorPicker: boolean
}

export default class App extends Component<any, any> {
    render() {
        return <div style={appStyle}>
            {this.renderBoard()}
            {this.renderColorPicker()}
        </div>;
    }

    renderBoard() {
        return <Board rows={8}/>;
    }

    renderColorPicker() {
        return <ColorPicker colors={getAllColors()} onColorSelected={(color: Color) => alert(`Selected ${color}`)} />;
    }

    toggleColorPicker() {
        this.setState({ showColorPicker: !this.state.showColorPicker });
    }
}