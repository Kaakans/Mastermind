import { h, Component } from 'preact';
import { Color } from '../enums/color';
import { shallowClone as clone } from "../utils/util";
import Button, { Size } from './button/button';

const styles = {
    pickerContainer: {
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#434343",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    
    controlContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: "1 1 auto"
    },

    colorButton: {
        width: "45px",
        height: "45px",
        borderRadius: "10px"
    },

    gameButton: {
        width: "50%",
        padding: "2px",
        marginTop: "10px"
    }
}

export interface IColorPickerProps {
    colors: Array<Color>;
    onColorSelected: (selectedColor: Color) => void;
    clearCallback: () => void;
    resetCallback: () => void;
}

export default class Controls extends Component<IColorPickerProps, any> {
    render() {
        return <div style={styles.pickerContainer}>
            <div style={styles.controlContainer}>
                {this.props.colors.map(c => this.renderColor(c))}
            </div>
            <div style={styles.controlContainer}>
                {this.renderButton("Clear", this.props.clearCallback)}
                {this.renderButton("Restart", this.props.resetCallback)}
            </div>
        </div>
    }

    renderColor(color: Color) {
        let colorButtonExtended = clone(styles.colorButton);
        colorButtonExtended.backgroundColor = color;

        return <div style={colorButtonExtended} onClick={() => this.props.onColorSelected(color)}></div>;
    }

    renderButton(buttonText: string, callback: any) {
        return <Button text={buttonText} onClick={callback} size={Size.SMALL} />;
    }
}