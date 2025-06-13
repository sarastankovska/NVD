import axios from "axios";
import { useState } from "react";
import { getUsersByRoom, reserveRoomByUser } from "../../service/roomService";
import './style.css';

function SelectRoom({ roomData, user, setUser }) {
    const [userRoomData, setUserRoomData] = useState([]);
    const [currentOccupancy, setCurrentOccupancy] = useState(0);
    const [roomCapacity, setRoomCapacity] = useState(0);
    const [selectedRoomId, setSelectedRoomId] = useState(0);


    const onSelectRoom = async (id) => {
        const data = await getUsersByRoom(id);
        const roomCapacity = roomData.rooms.filter((room) => room.id == id)[0].capacity;
        setUserRoomData(data);
        setCurrentOccupancy(data.length);
        setRoomCapacity(roomCapacity);
        setSelectedRoomId(id);
    }



    const onReserveRoom = async () => {
        let roomId = selectedRoomId;
        let userId = user.id;
        const currentUser = await reserveRoomByUser(userId, roomId);
        setUser(currentUser);
    }



    return (
        <>
            <div className="row p-5">
                {/* Room Selection */}
                <div className="col-md-8 mb-4">
                    <h2 className="mb-3">Изберете соба</h2>
                    <div className="d-flex flex-wrap gap-2">
                        {roomData.rooms && roomData.rooms.map((room, index) => (
                            <button
                                key={index}
                               className={`btn btn-outline-secondary door-button ${selectedRoomId == room.id ? 'bg-primary text-white' : ''}`}
                                onClick={() => onSelectRoom(room.id)}
                            >
                                Соба {room.numRoom}
                            </button>
                        ))}
                    </div>
                </div>

                {/* User List for Selected Room */}
                <div className="col-md-4 p-4">

                    <div className="d-flex justify-content-between mb-2 w-100">
                        <span>Капацитет: {currentOccupancy} / {roomCapacity}</span>
                        <button className="btn-sm btn btn-outline-success" onClick={onReserveRoom}>Резервирај</button>
                    </div>
                    <ul className="list-group">
                        {userRoomData && userRoomData.map((user, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center w-100"
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