import axios from "axios";

export const getUsersByRoom = (id) => {
    return axios.get(`http://localhost:8080/api/users/room/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
            return [];
        });
}

export const reserveRoomByUser = async (userId, roomId)=>{
     await axios.post(`http://localhost:8080/api/users/reserve/${userId}/${roomId}`)
     .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
    
    const usersByRoom = await getUsersByRoom(roomId);
    const currentUser = usersByRoom.filter((user) => user.id == userId)[0];
    return currentUser;
}