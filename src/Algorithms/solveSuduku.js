function isSafe(grid, row, col, num, N) {
    for (let x = 0; x < N; x++)
        if (grid[row][x] === num)
            return false;
    for (let x = 0; x < N; x++)
        if (grid[x][col] === num)
            return false;
    let startRow = row - row % 3;
    let startCol = col - col % 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (grid[i + startRow][j + startCol] === num)
                return false;

    return true;
}

function solveSudoku(grid, row, col, N) {
    if ((row === N - 1) && (col === N))
        return true;
    if (col === N) {
        row++;
        col = 0;
    }
    if (grid[row][col] > 0)
        return solveSudoku(grid, row, col + 1, N);

    for (let num = 1; num < 10; num++) {
        if (isSafe(grid, row, col, num, N)) {
            grid[row][col] = num;
            if (solveSudoku(grid, row, col + 1, N))
                return true;
        }
        grid[row][col] = 0;
    }
    return false;
}

export { solveSudoku }