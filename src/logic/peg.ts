import { Color } from "../enums/color";
import { PegState } from "../enums/peg-state";

export default class Peg {
    private isPegSet: boolean = false;
    private color: Color;
    private state: PegState = null;

    isSet() {
        return this.isPegSet;
    }
    
    getColor() {
        return this.color;
    }
    
    setColor(color: Color) {
        this.color = color;
        this.isPegSet = true;
    }
    
    getState() {
        return this.state;
    }
    
    setState(state: PegState) {
        this.state = state;
    }

    equals(peg: Peg) {
        return this.color === peg.color;
    }
}
