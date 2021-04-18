import { GRID, BLOCK_CODE } from 'typings'
export interface IReducer {
  challengeGrid?: GRID
  solvedGrid?: GRID
  workingGrid?: GRID
  selectedBlock?: BLOCK_CODE
}
