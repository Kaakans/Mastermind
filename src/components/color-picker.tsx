import { h, Component } from 'preact';
import { Color } from '../enums/color';
import { shallowClone as clone } from "../utils/util";

const pickerContainer = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#434343",
    display: "inline-grid",
    gridTemplateColumns: "100px 100px 100px",
    gridTemplateRows: "100px 100px",
    gridGap: "20px 20px",
    justifyContent: "center",
    alignItems: "center"
}

const colorButton = {
    width: "100px",
    height: "100px",
    borderRadius: "10px"
}

export interface IColorPickerProps {
    colors: Array<Color>;
    onColorSelected: (selectedColor: Color) => void;
}

export default class ColorPicker extends Component<IColorPickerProps, any> {
    render() {
        return <div style={pickerContainer}>
            {this.props.colors.map(c => this.renderColor(c))}
        </div>
    }

    renderColor(color: Color) {
        let colorButtonExtended = clone(colorButton);
        colorButtonExtended.backgroundColor = color;

        return <div style={colorButtonExtended} onClick={() => this.props.onColorSelected(color)}></div>;
    }
}