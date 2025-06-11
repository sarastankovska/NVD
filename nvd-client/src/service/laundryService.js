import axios from "axios";

const getLaundry = (dormId) => {
    return axios.get("http://localhost:8080/api/lrooms/" + dormId)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
            return [];
        });
}

export { getLaundry };

const occupateMachine = (machineId) => {
    return axios.post("http://localhost:8080/api/machines/occupate/" + machineId, true, 
         {
    headers: {
      'Content-Type': 'application/json',
    },
  }
    )
}
export const reserveMachine = async (machineId, user) => {
  const now = new Date();
  const end = new Date(now.getTime() + 90 * 60000); // 90 минути

  return axios.post(`http://localhost:8080/api/machines/occupate/${id}`, {
    user: {
      id: user.id
    },
    laundryMachine: {
      id: machineId
    },
    startTime: now,
    endTime: end
  });
};


export { occupateMachine };