import axios from "axios"

export const addMaintaince = ( description, room, dorm) => {
    const maintaince = {
        description: description,
         rooms: [{ id: room.id }],
        dorms: [{ id: dorm.id }]
    };
    return axios.post("http://localhost:8080/api/maintaince/add", maintaince)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
}