import reducer from './reducer'

export type IReducer = ReturnType<typeof reducer>
export * from './actions'
export * from './interfaces'
export default reducer
