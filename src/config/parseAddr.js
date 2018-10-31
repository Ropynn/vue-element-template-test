import cityInfo from '@/plugins/city-data'

export function parseAddr(arr) {
  if (!arr.length) {
    return
  }
  let pca = ''
  let cityArr = ''
  let areaArr = ''

  if (arr[0]) {
    const item0 = Number(arr[0])
    try {
      cityInfo.forEach((item, index) => {
        if (item.value === item0) {
          pca += item.label
          cityArr = item.children
          // throw 'jump out now'
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  if (arr[1]) {
    const item1 = Number(arr[1])
    try {
      cityArr.forEach(item => {
        if (item.value === item1) {
          pca += item.label
          areaArr = item.children
          // throw 'jump out now'
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  if (arr[2] && Number(arr[2]) !== 0) {
    const item2 = Number(arr[2])
    try {
      areaArr.forEach(item => {
        if (item.value === item2) {
          pca += item.label
          // throw 'jump out now'
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return pca
}

