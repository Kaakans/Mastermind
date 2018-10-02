import { Color } from "../enums/color";
import Peg from "./peg";
import { PegState } from "../enums/peg-state";

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

    updateSolutionKey(row: Row) {
        this.pegs
            .filter((p: Peg) => p.isSet())
            .forEach((p: Peg, i: number) => {
                if (p.equals(row.getPegs()[i])) {
                    p.setState(PegState.CORRECT);
                } else if (row.getPegs().find((s: Peg) => s.equals(p))) {
                    p.setState(PegState.WRONG_POSITION);
                } else {
                    p.setState(PegState.INCORRECT);
                }
            });
    }

    isCorrect() {
        return this.pegs.every((p: Peg) => p.getState() === PegState.CORRECT);
    }
}