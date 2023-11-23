import { Figure, FigureNames } from './Figure';
import { Colors } from '../../models';
import { Cell } from '../Cell';
import white from './../../assets/img/white_bishop.png';
import black from './../../assets/img/black_bishop.png';

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? black: white;
        this.name = FigureNames.BISHOP
    }
}