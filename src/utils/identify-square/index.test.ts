import { GRID } from 'typings'
import identifySquare from './'

describe('identify-square', () => {
  it('return true when value is in grid square', () => {
    const grid: GRID = [
      [7, 4, 1, 8, 9, 6, 3, 5, 2],
      [9, 6, 2, 5, 7, 3, 8, 4, 1],
      [8, 5, 3, 4, 2, 1, 9, 7, 6],
      [6, 9, 7, 2, 8, 5, 4, 1, 3],
      [5, 3, 8, 9, 1, 4, 6, 2, 7],
      [2, 1, 4, 6, 3, 7, 5, 9, 8],
      [4, 8, 9, 7, 6, 2, 1, 3, 5],
      [3, 7, 6, 1, 5, 9, 2, 8, 4],
      [1, 2, 5, 3, 4, 8, 7, 6, 9],
    ]

    let square = [
      [7, 4, 1],
      [9, 6, 2],
      [8, 5, 3],
    ]

    expect(identifySquare({ grid, row: 1, col: 1 })).toStrictEqual(square)

    square = [
      [1, 3, 5],
      [2, 8, 4],
      [7, 6, 9],
    ]

    expect(identifySquare({ grid, row: 8, col: 8 })).toStrictEqual(square)
  })
})
