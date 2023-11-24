import './BoardComponent.scss';
import {FC, Fragment, useEffect, useState} from 'react';
import {Board, Cell, Player} from '../../models';
import {CellComponent} from '../CellComponent /CellComponent';
import {Colors} from "../../types/types";


type BoardProps = {
    board: Board,
    setBoard: (board: Board) => void,
    currentPlayer: Player | null,
    swapPlayer: () => void;
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
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
            swapPlayer()
            setSelected(null)
        } else {
            if ( cell.figure?.color === currentPlayer?.color ) {
                setSelected(cell)
            }
        }
    }

    return <div className="board_container">
        <div className="board_content">
            <h1>{ currentPlayer?.color } move!</h1>
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