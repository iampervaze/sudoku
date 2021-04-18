/**
 *
 * @param array An array shuffling algo by Fisher yates
 */
function shuffle(array: any[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
