import { Figure, FigureNames } from './Figure';
import { Colors } from '../../models';
import { Cell } from '../Cell';
import black from '../../assets/img/black_pawn.png';
import white from '../../assets/img/white_pawn.png';

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? black: white;
        this.name = FigureNames.PAWN
    }
}