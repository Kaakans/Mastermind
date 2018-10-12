import { h, Component } from 'preact';
import { Color } from '../../enums/color';
import { shallowClone as clone } from "../../utils/util";
import Button, { Size } from '../button/button';
import { styles } from "./style";

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
                {this.renderButton("Clear", () => this.props.clearCallback())}
                {this.renderButton("Restart", () => this.props.resetCallback())}
            </div>
        </div>
    }

    renderColor(color: Color) {
        let colorButtonExtended = clone(styles.colorButton);
        colorButtonExtended.backgroundColor = color;

        return <div style={colorButtonExtended} onClick={() => this.props.onColorSelected(color)}></div>;
    }

    renderButton(buttonText: string, callback: any) {
        return <Button text={buttonText} onClick={() => callback()} size={Size.SMALL} />;
    }
}