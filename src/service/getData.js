import axios from 'axios'

const getData = (url, params={}) => {
    return axios.get(url, { params })
}

export default getData