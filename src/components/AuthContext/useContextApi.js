import { useContext } from "react"
import { Context } from "./AuthContext"

const useContextApi = () => {
    return useContext(Context)
}

export default useContextApi;