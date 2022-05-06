/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl);
};

const addEntry = newPerson => {
    return axios.post(baseUrl, newPerson);
};

const deleteEntry = id => {
    return axios.delete(`${baseUrl}/${id}`);
};

const updateEntry = modifiedPerson => {
    return axios.put(baseUrl, modifiedPerson);
};

export default { getAll, addEntry, deleteEntry, updateEntry };
