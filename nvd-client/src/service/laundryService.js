// import axios from "axios";

// const getLaundry = (dormId) => {
//     return axios.get("http://localhost:8080/api/lrooms/" + dormId)
//         .then((response) => response.data)
//         .catch((error) => {
//             console.log(error);
//             return [];
//         });
// }

// export { getLaundry };

// const occupateMachine = (machineId) => {
//     return axios.post("http://localhost:8080/api/machines/occupate/" + machineId, true, 
//          {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }
//     )
// }
// export const reserveMachine = async (machineId, user) => {
//   const now = new Date();
//   const end = new Date(now.getTime() + 90 * 60000); // 90 минути

//   return axios.post(`http://localhost:8080/api/machines/occupate/${id}`, {
//     user: {
//       id: user.id
//     },
//     laundryMachine: {
//       id: machineId
//     },
//     startTime: now,
//     endTime: end
//   });
// };


// export { occupateMachine };
// laundryService.js

const API_BASE = "http://localhost:8080/api";

export const getLaundryMachines = async () => {
  const res = await fetch(`${API_BASE}/laundry`);
  if (!res.ok) throw new Error("Failed to fetch laundry machines");
  return await res.json();
};

export const getAvailableSlots = async (machineId) => {
  const res = await fetch(`${API_BASE}/reservations/slots/${machineId}`);
  if (!res.ok) throw new Error("Failed to fetch available slots");
  return await res.json();
};

export const reserveMachine = async (machineId, userId, startTime) => {
  const res = await fetch(`${API_BASE}/reservations/reserve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ machineId, userId, startTime }),
  });
  if (!res.ok) throw new Error("Failed to reserve machine");
  return await res.json();
};
