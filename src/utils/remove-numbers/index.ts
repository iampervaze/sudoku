import { GRID } from 'typings'
import { getRandomIndex, copyGrid } from 'utils'
import global from 'global'
import { solveGrid } from 'utils'
/**
 * removes numbers from grid to create a sudoku puzzle
 * @param grid 9x9 grid
 * @param attempt number of attempts to solve
 * @returns
 */

function removeNumbers(grid: GRID, attempt: number = 5): GRID {
  while (attempt > 0) {
    let row = getRandomIndex(),
      col = getRandomIndex()
    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]

    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    //set a global counter
    global.counter = 0
    solveGrid(gridCopy)

    if (global.counter !== 1) {
      grid[row][col] = backup
      attempt--
    }
  }
  return grid
}

export default removeNumbers
