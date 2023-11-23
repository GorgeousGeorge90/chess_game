import './BoardComponent.scss';
import {FC, Fragment, useEffect, useState} from 'react';
import { Board, Cell } from '../../classes';
import { CellComponent } from '../CellComponent /CellComponent';


type BoardProps = {
    board: Board,
    setBoard: (board: Board) => void,
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [ selected, setSelected ] = useState<Cell | null>(null)

    useEffect(()=> {
        highLightCells()
    },[selected])

    const highLightCells = () => {
        board.getAvailable(selected)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    const getMove = (cell:Cell) => {
        if (selected && selected !== cell && selected.figure?.canMove(cell)) {
            selected.moveFigure(cell)
            setSelected(null)
        } else {
            setSelected(cell)
        }
    }

    return <div className="board_container">
        <div className="board_content">
            <div className="board_table">
                {
                    board.cells.map((row, i) =>
                        <Fragment key={i}>
                            {
                                row.map(cell => <CellComponent
                                    key={cell.id}
                                    cell={cell}
                                    selected={
                                        selected?.x === cell.x && selected?.y === cell.y
                                    }
                                    getMove={getMove}
                                />)
                            }
                        </Fragment>
                    )
                }
            </div>
        </div>
    </div>
}