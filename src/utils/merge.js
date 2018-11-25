export default (a, b) => {
  if (typeof b !== typeof {}) return a
  for (let k in b) {
    if (b[k]) {
      a[k] = b[k]
    }
  }
  return a
}
