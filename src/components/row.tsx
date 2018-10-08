import { h, Component } from "preact";
import RowData from "../logic/row";
import Peg from "./peg";
import { shallowClone } from "../utils/util";

const styles = {
    row: {
        display: "grid",
        gridTemplate: "80px / 80px 80px 80px 80px",
        justifyContent: "flex-start",
        alignItems: "center",
        border: "1px solid black",
        order: ""
    },

    blur: {
        width: "100%",
        height: "100%",
        gridArea: "1 / 1 / 2 / 5",
        color: "white",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

export interface IRowProps {
    row: RowData;
    isSolution: boolean;
    isCurrent: boolean;
}

interface IRowState {
    showBlur: boolean;
}

export default class Row extends Component<IRowProps, IRowState> {
    componentWillMount() {
        this.setState({ showBlur: this.props.isSolution });
    }

    render() {
        let style = shallowClone(styles.row);
        
        if (this.props.isSolution) {
            style.order = "1";
        }

        if (this.props.isCurrent) {
            style.border = "1px solid gold";
        }

        return <div style={style} onClick={() => this.toggleState()}>
            {this.state.showBlur ? this.renderBlur() : this.renderPegs() }
        </div>;
    }

    toggleState() {
        if (this.props.isSolution) {
            this.setState({ showBlur: !this.state.showBlur });
        }
    }

    renderPegs() {
        return this.props.row.getPegs().map(p => <Peg peg={p} />);
    }

    renderBlur() {
        return <div style={styles.blur}><span>Show?</span></div>;
    }
}