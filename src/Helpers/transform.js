export const getCurrentData = (data, type, activeTypes) => {
  return data?.filter((item) => {
    return activeTypes?.findIndex((elem) => elem === item[type].toString()) > -1
  })
}
export const modifiedData = (data, short) => {
  if (short) {
    return `${data.substr(0, 10)}`
  }
  return `${data.substr(0, 10)} ${data.substr(11, 5)}`
}

export const replaceStr = (str, length) => {
  if (str.length < length) {
    return str
  }
  return `${str.slice(0, length)}...`
}
export const firstCharUpper = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}
