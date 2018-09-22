export default function (timestamp) {
  if (String(timestamp).length !== 13) timestamp *= 1000

  let dt = new Date(timestamp)

  return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' +
    dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
}
