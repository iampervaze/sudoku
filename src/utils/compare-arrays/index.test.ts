import compareArrays from '.'

describe('compare-arays', () => {
  it('should compare two single dim similar arrays and return true', () => {
    const arr1 = [1, 2],
      arr2 = [1, 2]
    expect(compareArrays(arr1, arr2)).toBeTruthy()
  })

  it('should compare two single dim different arrays and return false', () => {
    const arr1 = [1, 3],
      arr2 = [1, 2]
    expect(compareArrays(arr1, arr2)).toBeFalsy()
  })
  it('should compare two 2-d similar arrays and return true', () => {
    const arr1 = [
        [1, 2],
        [3, 4],
      ],
      arr2 = [
        [1, 2],
        [3, 4],
      ]
    expect(compareArrays(arr1, arr2)).toBeTruthy()
  })
  it('should compare two 2-d similar arrays and return true', () => {
    const arr1 = [
        [1, 2],
        [3, 4],
      ],
      arr2 = [
        [1, 2],
        [3, 7],
      ]
    expect(compareArrays(arr1, arr2)).toBeFalsy()
  })
})
