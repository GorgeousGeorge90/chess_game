import './App.scss';
import { useEffect, useState } from "react";
import { Board } from "./classes";
import {BoardComponent} from "./modules/BoardComponent";


const App = () =>  {
    const [ board,setBoard ] = useState(new Board())

    useEffect(()=> {
        restart()
    },[])

    const restart = () => {
        const newBoard = new Board()
        newBoard.initBoard()
        newBoard.addFigures()
        setBoard(newBoard)
    }

    return (
        <div className="app_wrapper">
            <div className="app_content">
                <BoardComponent board={board} setBoard={setBoard}/>
            </div>
        </div>
    );
}

export default App;
