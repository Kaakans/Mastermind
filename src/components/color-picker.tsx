import { h, Component } from 'preact';
import { Color } from '../enums/color';
import { shallowClone as clone } from "../utils/util";

const styles = {
    // pickerContainer: {
    //     padding: "20px",
    //     borderRadius: "10px",
    //     backgroundColor: "#434343",
    //     display: "inline-grid",
    //     gridTemplateColumns: "100px 100px 100px 100px 100px 100px",
    //     gridTemplateRows: "100px",
    //     gridGap: "20px 20px",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },

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
}

export default class ColorPicker extends Component<IColorPickerProps, any> {
    render() {
        return <div style={styles.pickerContainer}>
            {this.props.colors.map(c => this.renderColor(c))}
        </div>
    }

    renderColor(color: Color) {
        let colorButtonExtended = clone(styles.colorButton);
        colorButtonExtended.backgroundColor = color;

        return <div style={colorButtonExtended} onClick={() => this.props.onColorSelected(color)}></div>;
    }
}