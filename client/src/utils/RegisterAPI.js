import axios from "axios";

const savePerson = (personData) => {
    return axios.post("/api/register", personData);
};

export default savePerson;