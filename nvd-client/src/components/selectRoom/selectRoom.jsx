import axios from "axios";
import { useState } from "react";

function SelectRoom({roomData}) {
 const [userRoomData, setUserRoomData] = useState([]);
function onSelectRoom(id) {
    axios.get(`http://localhost:8080/api/users/room/${id}`)
      .then((response) => setUserRoomData(response.data))
      .catch((error) => console.error("Error loading dorms:", error));
  }
    return (
        <>
            <div className="row p-5">
                {/* Room Selection */}
                <div className="col-md-6 mb-4">
                    <h2 className="mb-3">Изберете соба</h2>
                    <div className="d-flex flex-wrap gap-2">
                        {roomData.rooms && roomData.rooms.map((room, index) => (
                            <button
                                key={index}
                                className="btn btn-outline-secondary door-button"
                                onClick={() => onSelectRoom(room.id)}
                            >
                                Соба {room.numRoom}
                            </button>
                        ))}
                    </div>
                </div>

                {/* User List for Selected Room */}
                <div className="col-md-6">


                    <ul className="list-group">
                        {userRoomData && userRoomData.map((user, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center w-50"
                            >
                                {user.name}
                                <span className="badge bg-primary rounded-pill">
                                    {user.faculty.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SelectRoom;