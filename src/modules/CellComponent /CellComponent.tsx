import { FC } from 'react';
import { Cell } from '../../classes';
import './CellComponent.scss';

type CellProps = {
    cell:Cell,
    selected:boolean,
    getMove:(cell:Cell) => void,
}

export const CellComponent:FC<CellProps> = ({cell, selected,getMove}) => {

    return <div className={
        [
            'cell', cell.color,
            selected ? 'selected': '',
            cell.figure && cell.available ? 'available_cell': ''
        ].join(' ')}
                onClick={()=>getMove(cell)}>
        { !cell.figure && cell.available ? <div className='available'/>:null }
        {
            cell.figure?.logo ? <img className='cell-figure' src={ cell.figure?.logo } alt="logo"/>:null
        }
    </div>
}