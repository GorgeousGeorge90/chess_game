import { Figure, FigureNames } from './Figure';
import { Colors } from '../../models';
import { Cell } from '../Cell';
import black from '../../assets/img/black_knight.png';
import white from '../../assets/img/white_knight.png';


export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? black: white;
        this.name = FigureNames.KNIGHT
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        return true;
    }
}