import axios from 'axios'
import { createApi } from 'unsplash-js'

const unsplash = createApi({
    secret:'',
    accessKey:'',
    apiUrl: '',
    fetch : axios
})

export default unsplash;