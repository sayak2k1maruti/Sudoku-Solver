import { useState } from 'react';
import Header from '../Components/Header';
import Board from '../Components/Board';
import Button from '../Components/Button';
import { solveSudoku } from '../Algorithms/solveSuduku';
import { isValidConfig } from '../Algorithms/checkValidity';
import Footer from '../Components/Footer';

const Main = () => {
    const N = 9;
    let gridInit = new Array(N)
    for (let i = 0; i < N; i++) {
        gridInit[i] = new Array(N).fill(0)
    }
    let gridInit_ = new Array(N)
    for (let i = 0; i < N; i++) {
        gridInit_[i] = new Array(N).fill(0)
    }
    const [grid, setGrid] = useState(gridInit)
    const [initialGrid, setInitialGrid] = useState(gridInit_)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("Enter Numbers")
    const [status, setStatus] = useState(false)
    const [buttonStatus, seButtonStatus] = useState(true)


    const resetGrid = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                grid[i][j] = 0;
                initialGrid[i][j] = 0;
            }
        }
        setGrid([...grid])
        setInitialGrid([...initialGrid])
        setStatus(false)
        console.log(grid)
    }

    const deSolve = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (initialGrid[i][j] === 0) {
                    grid[i][j] = 0;
                }
            }
        }
        setGrid([...grid])
        setInitialGrid([...initialGrid])
        setStatus(false)
        console.log(grid)
    }

    const solve = () => {
        console.log("Clicked")
        if (!isValidConfig(grid, N)) {
            setError("!Invalid Sudoku (may be repetation in row/column/smallgrid)")
            return
        }

        seButtonStatus(false)
        if (solveSudoku(grid, 0, 0, N)) {
            console.log("A")
            console.log(grid)
            console.log("B")
            console.log(initialGrid)
            setGrid([...grid])
            setStatus(true)
            setError("")
        } else {
            setError("Sudoku is unsolvable")
        }
        seButtonStatus(true)
    }
    return (
        <>
            <p>
                Enter the known numbers and click the Solve button .
            </p>
            <br />
            <Board
                grid={grid}
                status={status}
                setGrid={setGrid}
                initialGrid={initialGrid}
                setInitialGrid={setInitialGrid} />

            <br />
            <p className='text-lg'>{message}</p>
            <p className='text-lg text-rose-800'>{error}</p>
            <br />

            {
                !status ?
                    <Button text={"Solve"} onClick={solve} disabled={!buttonStatus} />
                    :
                    <Button text={"Unsolve"} onClick={deSolve} disabled={!buttonStatus} />
            }
            <Button text={"Reset"} onClick={resetGrid} disabled={!buttonStatus} />
            <br /><br /><br />
            <p className='p-2 text-lg'>
                If there is more than one solution, only one solution will be shown. The Unsolve button removes the answers so the input can be changed. The Reset button sets the board to its initial state. Sudokuspoiler will remember your changes to the board, so you can close the browser and continue a next time.
            </p>
        </>
    )
}

export default Main