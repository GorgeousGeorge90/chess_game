import { Colors } from "../../models";
import { Cell}  from "../Cell";


export enum FigureNames {
    FIGURE = 'Figure',
    KING = 'King',
    QUEEN = 'Queen',
    BISHOP = 'Bishop',
    KNIGHT = 'Knight',
    ROOK = 'Rook',
    PAWN = 'Pawn',
}

export class Figure {
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(
        colors: Colors,
        cell: Cell,
    ) {
        this.color = colors
        this.logo = null
        this.cell = cell
        this.cell.figure = this
        this.name = FigureNames.FIGURE;
        this.id = Math.random()
    }

    canMove(target:Cell):boolean {
        return true
    }

    moveFigure(target:Cell) {

    }
}