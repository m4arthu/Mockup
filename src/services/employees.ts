import { GetEmployees } from "../helpers"
import { api } from "./api"


export const getEmployees = async ():Promise<GetEmployees> =>{
    return api.get('employees')
}