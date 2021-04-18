import shuffle from './'

describe('shuffle', () => {
  it('returns an array with the same length after being shuffled', () => {
    const arr = [1, 2, 3]
    shuffle(arr)
    expect(arr).toHaveLength(3)
  })

  it('returns an array with the same elements after being shuffled', () => {
    const arr = [1, 2, 3]
    shuffle(arr)
    expect(arr).toContain(1)
    expect(arr).toContain(2)
    expect(arr).toContain(3)
  })
})
