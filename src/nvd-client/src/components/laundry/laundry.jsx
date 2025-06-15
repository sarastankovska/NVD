import { useEffect, useState } from "react";
import { getLaundry, occupateMachine } from "../../service/laundryService";

function Laundry({ user }) {
  const [laundryData, setLaundryData] = useState([]);
  const [hoveredMachineId, setHoveredMachineId] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    const data = await getLaundry(user.dorm.id);
    setLaundryData(data);
  };

  const onReserveMachine = async (machineId) => {
    await occupateMachine(machineId);
    fetchData();
  };

  const getRemainingTime = (endTime) => {
    if (!endTime) return "";
    const end = new Date(endTime);
    const diffMs = end - now;

    if (diffMs <= 0) return "Слободна";

    const mins = Math.floor((diffMs / 1000 / 60) % 60);
    const hrs = Math.floor(diffMs / 1000 / 60 / 60);
    return `${hrs}ч ${mins}мин`;
  };

  return (
    <>
      <div className="col-md-4">
        <div className="card shadow-sm rounded-4 border-0" style={{ height: "500px" }}>
          <div className="card-body p-4">
            <h4 className="fw-semibold mb-4 text-primary">
        <i class="bi bi-basket3"></i> Перална
            </h4>

            <div className="d-flex flex-wrap gap-3">
              {laundryData.machine &&
                laundryData.machine.map((data, index) => (
                  <div
                    key={index}
                    className="d-flex flex-column align-items-center justify-content-between p-2 position-relative border rounded-4 bg-white shadow-sm"
                    style={{ width: "100px", height: "140px" }}
                    onMouseEnter={() => setHoveredMachineId(data.id)}
                    onMouseLeave={() => setHoveredMachineId(null)}
                  >
                    <img src="/img/125652.png" alt="Machine" style={{ width: "40px", height: "40px" }} />
                    <div
                      className={`mt-2 rounded-circle ${data.occupied ? 'bg-danger' : 'bg-success'}`}
                      style={{ width: "10px", height: "10px" }}
                    ></div>
                    <button
                      className={`btn btn-sm mt-2 ${data.occupied ? 'btn-secondary' : 'btn-success'}`}
                      disabled={data.occupied}
                      onClick={() => onReserveMachine(data.id)}
                    >
                      Резервирај
                    </button>

                    {hoveredMachineId === data.id && data.occupied && (
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 text-white rounded-4 text-center px-2"
                        style={{ fontSize: "14px" }}
                      >
                        {getRemainingTime(data.occupiedUntil)}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laundry;
