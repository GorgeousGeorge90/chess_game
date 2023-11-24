import './App.scss';
import {useEffect, useState} from "react";
import {Board, Player} from "./models";
import {BoardComponent} from "./components/BoardComponent";
import {Colors} from "./types/types";
import {LostFigures} from "./components/LostFigures";
import {Timer} from "./components/Timer ";


const App = () =>  {
    const [ board,setBoard ] = useState(new Board())
    const [ whitePlayer, setWhitePlayer ] = useState<Player>(new Player(Colors.WHITE))
    const [ blackPlayer, setBlackPlayer ] = useState<Player>(new Player(Colors.BLACK))
    const [ currentPlayer, setCurrentPlayer ] = useState<Player | null>(null)

    useEffect(()=> {
        restart()
    },[])

    const restart = () => {
        const newBoard = new Board()
        newBoard.initBoard()
        newBoard.addFigures()
        setCurrentPlayer(whitePlayer)
        setBoard(newBoard)
    }

    const swapPlayer = () => {
        if (currentPlayer?.color === Colors.BLACK) {
            setCurrentPlayer(whitePlayer)
        } else {
            setCurrentPlayer(blackPlayer)
        }
    }

    return (
        <div className="app-wrapper">
            <div className="app-content">
                <Timer currentPlayer={currentPlayer} restart={restart}/>
                <BoardComponent board={board}
                                setBoard={setBoard}
                                currentPlayer={currentPlayer}
                                swapPlayer={swapPlayer}
                />
                <section className="app-tables">
                    <LostFigures title={'black'} lost={board.lostBlack}/>
                    <LostFigures title={'white'} lost={board.lostWhite}/>
                </section>
            </div>
        </div>
    );
}

export default App;
