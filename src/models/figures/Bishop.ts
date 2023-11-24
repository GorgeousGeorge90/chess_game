import { Figure, FigureNames } from './Figure';
import { Colors } from '../../types/types';
import { Cell } from '../Cell';
import white from './../../assets/img/white_bishop.png';
import black from './../../assets/img/black_bishop.png';

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? black: white;
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true;
        }
        return false;
    }
}