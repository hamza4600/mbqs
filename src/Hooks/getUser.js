
import { LoginApi } from "api";
import useSWR from 'swr'// get data onload 
import axios from 'axios'
import { useSelector } from "react-redux";

// make a hook 
function useUserData() {

    const token = useSelector(state => state.session?.authToken)

    const fetcher = url => axios.post(url , {}, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)

    const { data, error, isLoading } = useSWR(LoginApi.getUserData, fetcher)

    return {
        data,
        error,
        isLoading
    }
}

export default useUserData