import { h, Component } from 'preact';
import { Color } from '../enums/color';
import { shallowClone as clone } from "../utils/util";

const styles = {
    pickerContainer: {
        width: "90vw",
        height: "10vh",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
        backgroundColor: "#434343",

        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: "1 1 auto"
    },

    colorButton: {
        width: "50px",
        height: "50px",
        borderRadius: "10px"
    }
}

export interface IColorPickerProps {
    colors: Array<Color>;
    onColorSelected: (selectedColor: Color) => void;
    clearCallback: () => void;
    resetCallback: () => void;
}

export default class ColorPicker extends Component<IColorPickerProps, any> {
    render() {
        return <div style={styles.pickerContainer}>
            {this.props.colors.map(c => this.renderColor(c))}
            {this.renderButton("Clear", this.props.clearCallback)}
            {this.renderButton("Restart", this.props.resetCallback)}
        </div>
    }

    renderColor(color: Color) {
        let colorButtonExtended = clone(styles.colorButton);
        colorButtonExtended.backgroundColor = color;

        return <div style={colorButtonExtended} onClick={() => this.props.onColorSelected(color)}></div>;
    }

    renderButton(buttonText: string, callback: any) {
        return <button onClick={callback}>{buttonText}</button>;
    }
}