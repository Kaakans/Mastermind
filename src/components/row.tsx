import { h, Component } from "preact";
import RowData from "../logic/row";
import Peg from "./peg";
import { shallowClone } from "../utils/util";

const styles = {
    row: {
        padding: "2vw",
        display: "grid",
        gridTemplate: "20vw / 20vw 20vw 20vw 20vw",
        columnGap: "2vw",
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
}

interface IRowState {
    showBlur: boolean;
}

export default class Row extends Component<IRowProps, IRowState> {
    componentWillMount() {
        this.setState({ showBlur: this.props.isSolution });
    }

    render() {
        let style = styles.row;
        
        if (this.props.isSolution) {
            style = shallowClone(styles.row);
            style.order = "1";
        }
        return <div style={styles.row} onClick={() => this.toggleBlur()}>
            {this.state.showBlur ? this.renderBlur() : this.renderPegs() }
        </div>;
    }

    toggleBlur() {
        if (!this.props.isSolution) return;
        this.setState({ showBlur: !this.state.showBlur });
    }

    renderPegs() {
        return this.props.row.getPegs().map(p => <Peg peg={p} />);
    }

    renderBlur() {
        return <div style={styles.blur}><span>Show?</span></div>;
    }
}