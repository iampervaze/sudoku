import { NUMBERS, SQUARE } from 'typings'

function isInSquare(square: SQUARE, value: NUMBERS): boolean {
  return square.flat().includes(value)
}

export default isInSquare
