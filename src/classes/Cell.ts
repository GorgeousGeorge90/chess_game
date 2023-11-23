import { Colors } from '../models';
import { Figure } from './figures/Figure';
import { Board } from './Board';


export class Cell {
    available: boolean;
    id: number;

    constructor(
        private board:Board,
        readonly x:number,
        readonly y:number,
        readonly color:Colors,
        public figure:Figure | null,
    ) {
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.board = board
        this.available = false
        this.id = Math.random() + Math.random()
    }

    moveFigure(target:Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target)
            target.figure = this.figure
            this.figure = null
        }
    }
}