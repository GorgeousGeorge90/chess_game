import { Figure, FigureNames } from './Figure';
import { Colors } from '../../models';
import { Cell } from '../Cell';
import black from '../../assets/img/black_rook.png';
import white from '../../assets/img/white_rook.png';

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? black: white;
        this.name = FigureNames.ROOK
    }
}