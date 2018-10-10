import { h, Component } from "preact";
import Button from "./button/button";

const styles = {
    backdrop: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "10000",
        backgroundColor: "rgba(67, 67, 67, 0.7)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    modal: {
        backgroundColor: "white",
        pointerEvents: "none",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    controls: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    controlButton: {
        margin: "0 10px"
    }
}

export interface IModalProps {
    title: string;
    text: string;
    onSuccess: () => void;
    onError: () => void;
}

export default class Modal extends Component<IModalProps, any> {
    render() {
        return <div style={styles.backdrop} onClick={this.props.onError}>
            <div style={styles.modal}>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <div style={styles.controls}>
                    <Button text={"Cancel"} onClick={this.props.onError} />
                    <Button text={"Reset"} onClick={this.props.onSuccess} />
                </div>
            </div>
        </div>;
    }
}