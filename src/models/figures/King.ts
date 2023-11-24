import { Figure, FigureNames } from './Figure';
import { Colors } from '../../types/types';
import { Cell } from '../Cell';
import white from '../../assets/img/white_king.png';
import black from '../../assets/img/black_king.png';

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? black: white;
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        return true;
    }
}