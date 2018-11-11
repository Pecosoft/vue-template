export default (tar, src) => {
  for (let k in src) {
    if (src.hasOwnProperty(k)) {
      tar[k] = src[k]
    }
  }
}
