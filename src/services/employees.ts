import { AxiosPromise } from "axios"
import { GetEmployees } from "../helpers"
import { api } from "./api"


export const getEmployees = async ():AxiosPromise<GetEmployees[]> =>{
    return api.get('employees')
}