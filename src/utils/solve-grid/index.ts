import { GRID, NUMBERS } from 'typings'
import global from 'global'
import {
  shuffle,
  checkGrid,
  identifySquare,
  isInCol,
  isInRow,
  isInSquare,
} from 'utils'
const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function solveGrid(grid: GRID) {
  let col = 0,
    row = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
      for (let value of numbers)
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, value, col })) {
            const square = identifySquare({ grid, row, col })
            if (!isInSquare(square, value)) {
              grid[row][col] = value

              if (checkGrid(grid)) {
                global.counter++
                break
              } else if (solveGrid(grid)) {
                return true
              }
            }
          }
        }
      break
    }
  }

  grid[row][col] = 0
}

export default solveGrid