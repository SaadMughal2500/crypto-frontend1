
import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND}`, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',

  },
});



export default axiosInstance;
