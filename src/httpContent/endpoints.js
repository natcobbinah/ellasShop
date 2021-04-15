import { axiosinstance } from '../httpContent/axiosInstance';
const limit = "limit=25";
const rating = "rating=pg";
const trending = "trending";
const api_key = "api_key=";
const apiKey ="i8BOlUwoPkDORy6yhbH6ZIQwPYZIjvzB";

function fetchGIFS(){
 return (
        axiosinstance.get(`${trending}?${api_key}${apiKey}&${limit}&${rating}`)
 )
}

export {fetchGIFS}
   
