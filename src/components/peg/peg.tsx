import { h, Component } from "preact";
import PegData from "../../logic/peg";
import { shallowClone } from "../../utils/util";
import { PegState } from "../../enums/peg-state";
import { styles } from "./style";

export interface IPegProps {
    peg: PegData
}

export default class Peg extends Component<IPegProps, any> {
    render() {
        const peg = shallowClone(styles.peg);
        peg.backgroundColor = this.getBorderColor();

        const inner = shallowClone(styles.inner);
        inner.backgroundColor = this.props.peg.getColor();

        return <div style={peg}><div style={inner}></div></div>;
    }

    getBorderColor() {
        if (this.props.peg.getState() === PegState.CORRECT) {
            return "green";
        }

        if (this.props.peg.getState() === PegState.WRONG_POSITION) {
            return "yellow";
        }

        if (this.props.peg.getState() === PegState.INCORRECT) {
            return "red";
        }

        return "white";
    }
}