import axios from 'axios'

export const getCitiesInfo = () => new Promise((resolve) => {
  axios.get('../../static/mock/city1.json')
    .then(res => resolve(res))
})
