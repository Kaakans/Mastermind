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
    onSelectedCallback: () => void;
}

interface IRowState {
    showBlur: boolean;
    showHighlight: boolean;
}

export default class Row extends Component<IRowProps, IRowState> {
    componentWillMount() {
        this.setState({ 
            showBlur: this.props.isSolution,
            showHighlight: false
        });
    }

    render() {
        let style = shallowClone(styles.row);
        
        if (this.props.isSolution) {
            style.order = "1";
        }

        if (this.state.showHighlight) {
            style.border = "1px solid gold";
        }

        return <div style={style} onClick={() => this.toggleState()}>
            {this.state.showBlur ? this.renderBlur() : this.renderPegs() }
        </div>;
    }

    toggleState() {
        if (this.props.onSelectedCallback) {
            this.props.onSelectedCallback();
        }

        if (this.props.isSolution) {
            this.setState({ showBlur: !this.state.showBlur });
        } else {
            this.setState({ showHighlight: !this.state.showHighlight });
        }
    }

    renderPegs() {
        return this.props.row.getPegs().map(p => <Peg peg={p} />);
    }

    renderBlur() {
        return <div style={styles.blur}><span>Show?</span></div>;
    }
}