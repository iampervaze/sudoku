import { Action, AnyAction } from 'redux'
import { BLOCK_CODE, NUMBERS } from 'typings'

import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })
export const selectBlock = (coords: BLOCK_CODE): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})

export const fillBlock = (value: NUMBERS, coords: BLOCK_CODE): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
})
