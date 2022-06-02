import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import Button from './Components/Button';

function App() {
  const N = 9;
  let gridInit = new Array(N)
  for (let i = 0; i < N; i++) {
    gridInit[i] = new Array(N).fill(0)
  }
  const [grid, setGrid] = useState(gridInit)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("Enter Numbers")



  const resetGrid = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        grid[i][j] = 0;
      }
    }
    setGrid([...grid])
    console.log(grid)
  }

  return (
    <div className='max-w-[1080px] p-3'>
      <Header />
      <p>
        Choose one of the more than 50 Sudoku solvers via the menu button. Enter the known numbers and click the Solve button or Solve Cell button if you only need 1 number.
      </p>
      <br />
      <Board grid={grid} setGrid={setGrid} />
      <br />
      <p className='text-lg'>{message}</p>
      <p className='text-lg text-rose-800'>{message}</p>
      <br />
      <Button text={"Solve"} />

      <Button text={"Reset"} onClick={resetGrid} />
    </div>
  );
}

export default App;
