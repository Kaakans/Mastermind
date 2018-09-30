import { h, Component } from "preact";
import PegData from "../logic/peg";
import { shallowClone } from "../utils/util";

const styles = {
    peg: {
        width: "100%",
        height: "100%",
        border: "1px solid black"
    }
}

export interface IPegProps {
    peg: PegData
}

export default class Peg extends Component<IPegProps, any> {
    render() {
        const peg = shallowClone(styles.peg);
        peg.backgroundColor = this.props.peg.getColor();

        return <div style={peg}></div>;
    }
}