import { Color } from "../enums/color";
import Peg from "./peg";

export default class Row {
    private pegs: Array<Peg>;

    constructor() {
        this.pegs = [ new Peg(), new Peg(), new Peg(), new Peg() ];
    }

    getPegs() {
        return this.pegs;
    }

    addPeg(color: Color) {
        const firstUnsetPeg = this.pegs.find((p: Peg) => !p.isSet());
        firstUnsetPeg.setColor(color);
    }

    isFull() {
        return this.pegs.every((p: Peg) => p.isSet());
    }

    equals(row: Row) {
        return row.getPegs().every((peg: Peg, i: number) => peg.equals(this.pegs[i]));
    }

    contains(peg: Peg) {
        return this.pegs.find((p: Peg) => p.equals(peg));
    }
}