import Peg from "./peg";
import Row from "./row";
import { PegState } from "../enums/peg-state";

export default class SolutionChecker {
    getRowSolutionKey(solution: Row, row: Row) {
        return row.getPegs()
            .map((peg: Peg, i: number) => {
                if (peg.equals(solution.getPegs()[i])) return PegState.CORRECT;
                if (solution.contains(peg)) return PegState.WRONG_POSITION;
                return PegState.INCORRECT;
            });
    }

    isGuessCorrect(solution: Row, row: Row) {
        return solution.equals(row);
    }
}