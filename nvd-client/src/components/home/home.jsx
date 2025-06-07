import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function Home() {
  const [eventsData, setEventsData] = useState([]);
  const [lostAndFoundData, setLostAndFoundData] = useState([]);
  const [laundryData, setLaundryData] = useState([]);
  // const [roomData, setRoomData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [userRoomData, setUserRoomData] = useState([]);
  const [reviewData,setReviewData]=useState([]);
  const [user,setUser]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/events')
      .then((response) => setEventsData(response.data))
      .catch((error) => console.error("Error loading events:", error));

    axios.get('http://localhost:8080/api/lostandfound')
      .then((response) => setLostAndFoundData(response.data))
      .catch((error) => console.error("Error loading lost & found:", error));

    axios.get('http://localhost:8080/api/lrooms/1')
      .then((response) => setLaundryData(response.data))
      .catch((error) => console.error("Error loading laundry data:", error));

    axios.get('http://localhost:8080/api/dorms')
      .then((response) => setRoomData(response.data[0]))
      .catch((error) => console.error("Error loading dorms:", error));

    axios.get('http://localhost:8080/api/reviews/1')
      .then((response) => setReviewData(response.data))
      .catch((error) => console.error("Error loading reviews:", error));
  }, []);

  function onSelectRoom(id) {
    axios.get(`http://localhost:8080/api/users/room/${id}`)
      .then((response) => setUserRoomData(response.data))
      .catch((error) => console.error("Error loading dorms:", error));
  }

  function handleLogout() {

  }

  return (
    <>
      {/* Header */}
      <div className="container-fluid bg-white shadow-sm py-3 px-4 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0 fw-bold">Државен студентски дом Скопје</h2>
          <small className="text-muted">Организација за подобрување на студентскиот стандард</small>
        </div>
        <div className="d-flex justify-content-end pt-3 pb-3 px-5 home-nav-container">
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </button>
            <ul className="dropdown-menu px-2 pt-2 pb-2">
             <li>Име: {user?.firstName ?? '...'}</li>
          <li>Презиме: {user?.lastName ?? '...'}</li>
          <li>Е-Маил: {user?.email ?? '...'}</li>
          <li><button className="btn btn-primary" onClick={handleLogout}>Одлогирајте се</button></li>            </ul>
          </div>
        </div>
      </div>
      {/* pick-room*/}
      <div className='row'>
    
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
        <div className='col-6'>

          <div className="row">
            <div className="col-4">
              <ul className="list-group">
                {userRoomData && userRoomData.map((user, index) => (
                  <li className='list-group-item d-flex justify-content-between align-items-center'>{user.name}
                    <span className="badge bg-primary rounded-pill">{user.faculty.name}</span>                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
   
 



      {/* Navbar */}
      <nav className="bg-primary text-white py-2">
        <div className="container d-flex justify-content-around py-2">
          <a className="text-white fw-semibold text-decoration-none" href="#">
            <i className="bi bi-calendar-event me-2"></i>Настани
          </a>
          <a className="text-white fw-semibold text-decoration-none" href="#">
            <i className="bi bi-box-seam me-2"></i>Изгубено & најдено
          </a>
          <a className="text-white fw-semibold text-decoration-none" href="#">
            <i className="bi bi-chat-dots me-2"></i>Перална
          </a>
        </div>
      </nav>

      {/* Title Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">Official Campus Events & Activities</h2>
        <hr className="mx-auto" style={{ width: '100px', borderTop: '3px solid #FFC107' }} />
        <p className="text-muted">
          Sanctioned recreational and educational activities organized by the Student Affairs Department in
          compliance with institutional policies and safety regulations.
        </p>

        {/* Example Carousel Items */}
        <div className="carousel-item">
          <img src="/img/goce1.jpg" alt="Goce Delchev Dormitory" />
          <div className="carousel-caption d-none d-md-block">

          </div>
        </div>
        <div className="carousel-item">
          <img src="/img/pelagonija.jpg" alt="Pelagonija Dormitory" />
          <div className="carousel-caption d-none d-md-block">

          </div>
        </div>

        <div className="row mt-4">
          {/* Events */}
          <div className="col-md-4">
            <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
              <div className="card-body">
                <h5 className="card-title">Настани</h5>
                {eventsData.map((event, index) => (
                  <div key={index} className="mb-4 p-3 rounded bg-light border position-relative">

                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="mb-1">{event.title}</h5>
                    </div>
                    <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
                      {event.description}
                    </p>
                    <ul className="list-unstyled small text-dark">
                      <li><i className="bi bi-calendar-event me-2"></i><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</li>

                    </ul>
                    {/* <div className="d-flex gap-2 mt-2">
                      <button className="btn btn-primary btn-sm w-100">Register for Event</button>
                      <button className="btn btn-outline-secondary btn-sm w-100">View Event Details</button>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lost and Found */}
          <div className="col-md-4">
            <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
              <div className="card-body">
                <h5 className="card-title">Изгубено/Најдено</h5>
                {lostAndFoundData.map((data, index) => (
                  <div key={index} className="mb-4 p-3 rounded bg-white">
                    <div className='d-flex justify-content-between'>
                      <h5 className="mb-1">{data.title}</h5>
                    </div>
                    <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{data.description}</p>
                  </div>
                ))}
              </div>
          
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Додај 
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
<form>
        <textarea placeholder='Опишете што сте изгубиле'></textarea>
        <p></p>
          <input type="file" id="img" name="img" accept="image/*"></input>
  </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>
        <button type="button" className="btn btn-primary">Зачувај</button>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* Laundry */}
          <div className="col-md-4">
            <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
              <div className="card-body">
                <h5 className="card-title">Перална</h5>
                {laundryData.machine && laundryData.machine.map((data, index) => (
                  <div key={index} className="mb-4 p-3 rounded bg-white">
                  <div className='d-flex justify-content-between'>
  <h5 className="mb-1">Број на машина: {data.id}</h5>
  <div className={data.occupied ? 'laundry-machine-active' : 'laundry-machine-inactive'}></div>
  <button
    className={data.occupied ? 'btn btn-primary disabled' : 'btn btn-success'}
    disabled={data.occupied}
  >
    Резервирај
  </button>
</div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="row pt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Коментари</h5>
                  {reviewData && reviewData.map((data, index) => (
                  <div key={index} className="mb-4 p-3 rounded bg-white">
                    <div className='d-flex justify-content-between'>
                      <h5 className="mb-1">{data.title}</h5>
                    </div>
                    <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{data.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
