import { h, Component } from "preact";
import { style } from "./style";
import { shallowClone as clone } from "../../utils/util";

export enum Size {
    SMALL = 1, NORMAL = 2, LARGE = 3
}

export interface IButtonProps {
    text: string;
    onClick: () => any;
    size?: Size;
    type?: string;
    class?: string;
}

export default class Button extends Component<IButtonProps, any> {
    render() {
        const s = clone(style);
        s.backgroundColor = this.props.type ? this.props.type : "";
        this.setSize(s);

        return <button style={s} class={this.props.class} onClick={() => this.props.onClick()}>{this.props.text}</button>;
    }

    setSize(style: any) {
        switch (this.props.size) {
            case Size.SMALL:
                style.height = "25px";
                style.padding = "5px";
                break;
            case Size.LARGE:
                style.height = "50px";
                style.width = "150px";
                style.padding = "20px";
                break;
            case Size.NORMAL:
            default:
            style.height = "40px";
            style.width = "100px";
            style.padding = "10px";
                break;
        }

        
    }
}