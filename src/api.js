import axios from 'axios'

let options={
    baseURL:'https://backendecommerce-5ut6.onrender.com/api'
}

export default axios.create(options);