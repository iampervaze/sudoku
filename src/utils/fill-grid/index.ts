import { GRID, NUMBERS } from 'typings'
import { shuffle, isInRow, isInCol, checkGrid, isInSquare } from 'utils'
import identifySquare from 'utils/identify-square'
const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 *
 * @param grid A backtracking algo to check all the possible combinations of numbers untill a solution is found
 * 9x9 recursive grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      //do stuff
      //recursive things
      shuffle(numbers)
      for (let value of numbers) {
        //is it not in the grid row
        if (!isInRow({ grid, row, value })) {
          //is it not in the grid column
          if (!isInCol({ grid, col, value })) {
            const square = identifySquare({ grid, row, col })
            if (!isInSquare(square, value)) {
              grid[row][col] = value
              //check if grid is not full, then call fill grid again
              if (checkGrid(grid)) return true
              else if (fillGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
