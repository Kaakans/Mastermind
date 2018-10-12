import { h, Component } from "preact";
import Button from "../button/button";
import { styles } from "./style";

export interface IModalProps {
    title: string;
    text: string;
    onConfirm: () => void;
    onNo: () => void;
}

export default class Modal extends Component<IModalProps, any> {
    render() {
        return <div style={styles.backdrop} onClick={() => this.props.onNo()}>
            <div style={styles.modal}>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <div style={styles.controls}>
                    <Button text={"Cancel"} onClick={() => this.props.onNo()} />
                    <Button text={"Reset"} onClick={() => this.props.onConfirm()} />
                </div>
            </div>
        </div>;
    }
}