import { GRID } from 'typings'
import isInRow from './'

describe('isInCol', () => {
  it('return true when value is in grid row', () => {
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

    expect(isInRow({ grid, row: 0, value: 9 })).toBeTruthy()
    expect(isInRow({ grid, row: 5, value: 4 })).toBeTruthy()
  })

  it('return false when value is not in grid row', () => {
    const grid: GRID = [
      [7, 4, 1, 8, 0, 6, 3, 5, 2],
      [0, 6, 2, 5, 7, 3, 8, 4, 1],
      [8, 5, 3, 4, 2, 1, 9, 7, 6],
      [6, 9, 7, 2, 8, 5, 0, 1, 3],
      [5, 3, 8, 9, 1, 0, 6, 2, 7],
      [2, 1, 0, 6, 3, 7, 5, 9, 8],
      [4, 8, 9, 7, 6, 2, 1, 3, 5],
      [3, 7, 6, 1, 5, 9, 2, 8, 4],
      [1, 2, 5, 3, 0, 8, 7, 6, 9],
    ]

    expect(isInRow({ grid, row: 0, value: 9 })).toBeFalsy()
    expect(isInRow({ grid, row: 5, value: 4 })).toBeFalsy()
  })
})
