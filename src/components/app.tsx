import { h, Component } from 'preact';
import Blocks from './blocks';
import { Color, getAllColors } from "../enums/color";
import ColorPicker from './color-picker';

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
            <h1>Welcome to Mastermind!</h1>
            <button onClick={() => this.toggleColorPicker()}>Toggle</button>
            {this.state.showColorPicker && this.renderColorPicker()}
        </div>;
    }

    renderColorPicker() {
        return <ColorPicker colors={getAllColors()} onColorSelected={(color: Color) => alert(`Selected ${color}`)} />;
    }

    toggleColorPicker() {
        this.setState({ showColorPicker: !this.state.showColorPicker });
    }
}