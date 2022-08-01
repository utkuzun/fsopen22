import axios from "axios";

const baseUrl = 'http://localhost:3001/people'

const create = async newPerson=>{
    const response = await axios.post(baseUrl, newPerson)
    const personAdded = await response.data
    return personAdded
}

const deletePerson = async id => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response.statusText
    } catch (error) {
        console.log("mahmut");
        return false
    }
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return   request.then(response => response.data)
}

const changePerson = async changedPerson => {
    const {id} = changedPerson
    try {
        const response = await axios.put(`${baseUrl}/${id}`, changedPerson)
        return response.data
    } catch (error) {
        console.log(error);
        return false
    }
}

export default {create, deletePerson, getAll, changePerson}