import { Color, getAllColors } from "../enums/color";
import { MAX_COLUMNS } from "../logic/constants";
import Row from "./row";

export default class Board {
    private rows: Array<Row>;
    private solution: Row;

    getRows() {
        return this.rows;
    }

    getSolution() {
        return this.solution;
    }

    constructor(numberOfRows: number) {
        this.solution = new Row();
        this.setRandomSolution();
        this.initializeBoard(numberOfRows);
    }

    setRandomSolution() {
        const colors = getAllColors();

        for(let i = 0; i < MAX_COLUMNS; i++) {
            const rnd = Math.floor((Math.random() * colors.length));
            this.solution.addPeg(colors[rnd]);
        }
    }

    initializeBoard(nomberOfRows: number) {
        this.rows = [];
        for(let i = 0; i < nomberOfRows; i++) {
            this.rows.push(new Row());
        }
    }

    addPeg(color: Color) {
        const firstNonCompletedRow = this.rows.find((r: Row) => !r.isFull());
        if (firstNonCompletedRow) {
            firstNonCompletedRow.addPeg(color);
        }
    }

    checkSolution() {
        this.rows.forEach((row: Row) => row.updateSolutionKey(this.solution));
    }

    isSolved() {
        return this.rows.find((r: Row) => r.isCorrect());
    }

    isLost() {
        return this.rows.every((r: Row) => r.isFull() && !r.isCorrect());
    }
} 