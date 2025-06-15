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
                        {
                            currentOccupancy !== roomCapacity ?
                             <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Резервирај</button>
                            :
                             <button className="btn-sm btn btn-outline-danger" disabled>Потполнето</button>
                        }
                      



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Дали сте сигурни за избраната соба?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={onReserveRoom}>Зачувај</button>
      </div>
    </div>
  </div>
</div>
                      
                    </div>
                    <ul className="list-group">
                          {
                            currentOccupancy==0?
                            <p className="list-group-item d-flex justify-content-between align-items-center w-100">Нема сместено студенти во избраната соба</p>
                            :""
                        }
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