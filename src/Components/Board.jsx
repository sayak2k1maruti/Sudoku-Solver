const Board = ({ grid, status, setGrid, initialGrid, setInitialGrid }) => {

    const handleChange = (event) => {
        let val = event.target.value - '0'
        if (val < 1) val = 1
        if (val > 9) val = 9
        const row = event.target.dataset.row - '0'
        const col = event.target.dataset.col - '0'
        grid[row - 1][col - 1] = val
        initialGrid[row - 1][col - 1] = val
        setGrid([...grid])
        setInitialGrid([...initialGrid])
        console.log(grid)
    }
    const drawBoard = () => {
        let board = []
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                let style = {
                    borderStyle: 'dotted',
                    borderColor: '#777',
                }
                if (i % 3 === 1) {
                    style = {
                        ...style,
                        borderTopStyle: 'solid',
                        borderTopColor: '#000',
                        borderTopWidth: '2px'
                    }
                }
                if (i === 9) {
                    style = {
                        ...style,
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#000',
                        borderBottomWidth: '2px'
                    }
                }
                if (j % 3 === 1) {
                    style = {
                        ...style,
                        borderLeftStyle: 'solid',
                        borderLeftColor: '#000',
                        borderLeftWidth: '2px'
                    }
                }
                if (j === 9) {
                    style = {
                        ...style,
                        borderRightStyle: 'solid',
                        borderRightColor: '#000',
                        borderRightWidth: '2px'
                    }
                }
                if (status && (initialGrid[i - 1][j - 1] === 0)) {
                    style = {
                        ...style,
                        color: 'blue'
                    }
                }
                board.push(
                    <input type="number"
                        style={style}
                        name={`r${i}c${j}`}
                        data-row={i}
                        disabled={status}
                        data-col={j}
                        contentEditable={true}
                        value={grid[i - 1][j - 1] === 0 ? "" : grid[i - 1][j - 1]}
                        className={`border  text-center text-xl border-dashed border-black w-[27px] h-[27px] sm:w-[40px] sm:h-[40px] 2xl:w-[50px] 2xl:w[50px]`}
                        key={`r${i}c${j}`}
                        min={1}
                        max={9}
                        onChange={handleChange}
                    ></input>
                )
            }
            board.push(<br key={i} />)
        }
        return board
    }
    const board = drawBoard()

    return (
        <div className="sm:p-2 overflow-visible">
            {board}
        </div>
    )
}

export default Board