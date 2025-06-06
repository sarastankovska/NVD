// import { useEffect, useState } from 'react';
// import './style.css';
// import axios from 'axios';

// function Home() {


//   const [eventsData, setEventsData] = useState([]);
//   const [lostAndFoundData, setLostAndFoundData] = useState([]);
//   const [laundryData, setLaundryData] = useState([]);
//   const [roomData, setRoomData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/events')
//       .then((response) => setEventsData(response.data));

//     axios.get('http://localhost:8080/api/lostandfound')
//       .then((response) => setLostAndFoundData(response.data));

//     axios.get('http://localhost:8080/api/lrooms')
//       .then((response) => setLaundryData(response.data));

//     axios.get('http://localhost:8080/api/dorms')
//       .then((response) => setRoomData(response.data));
//   }, [])


//   return (
//     <>
//       <div className="container-fluid bg-white shadow-sm py-3 px-4 d-flex justify-content-between align-items-center">
//         <div>
//           <h2 className="mb-0 fw-bold">Државен студентски дом Скопје</h2>
//           <small className="text-muted">Организација за подобрување на студентскиот стандард</small>
//         </div>
//         <div className="d-flex justify-content-end pt-3 pb-3 px-5 home-nav-container">
//           <div className="dropdown">
//             <button className="btn btn-light dropdown-toggle px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Profile
//             </button>
//             <ul className="dropdown-menu px-2 pt-2 pb-2">
//               <li>Име: Даница</li>
//               <li>Презиме: Симитчиевска</li>
//               <li>Е-Маил: fff@gmail.com</li>
//               <li>Одлогирајте се</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <nav className="bg-primary text-white py-2">
//         <div className="container d-flex justify-content-around p-">
//           <a className="text-white fw-semibold text-decoration-none" href="#">
//             <i className="bi bi-calendar-event me-2"></i>Official Events
//           </a>
//           <a className="text-white fw-semibold text-decoration-none" href="#">
//             <i className="bi bi-box-seam me-2"></i>Lost & Found Registry
//           </a>

//           <a className="text-white fw-semibold text-decoration-none" href="#">
//             <i className="bi bi-chat-dots me-2"></i>Community Forum
//           </a>
//         </div>
//       </nav>

//       <div className="container text-center my-5">
//         <h2 className="fw-bold">Official Campus Events & Activities</h2>
//         <hr className="mx-auto" style={{ width: '100px', borderTop: '3px solid #FFC107' }} />
//         <p className="text-muted">
//           Sanctioned recreational and educational activities organized by the Student Affairs Department in
//           compliance with institutional policies and safety regulations.
//         </p>
//         <div className="carousel-item">
//           <img src="/img/goce1.jpg" alt="tekst."></img>
//             <div className="carousel-caption d-none d-md-block">
//               <h5>...</h5>
//               <p>...</p>
//             </div>
//         </div>
//         <div className="carousel-item">
//           <img src="/img/pelagonija.jpg" alt="..."></img>
//             <div className="carousel-caption d-none d-md-block">
//               <h5>...</h5>
//               <p>...</p>
//             </div>
//         </div>'

//        <div className="row mt-4">
//   <div className="col-md-4">
//     <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
//       <div className="card-body">
//         <h5 className="card-title">Настани</h5>
//         {eventsData && eventsData.map((event, index) => (
//           <div key={index} className="mb-4 p-3 rounded bg-light border position-relative">
//             {/* Registration badge top-right */}
//             <span className="badge bg-secondary position-absolute top-0 end-0 m-2">
//               {event.registrationStatus || "Ongoing Registration"}
//             </span>

//             {/* Event title and ID */}
//             <div className="d-flex justify-content-between align-items-start">
//               <h5 className="mb-1">{event.title}</h5>
//               <span className="badge bg-light text-dark border">{event.code || `EVT-2024-00${index + 1}`}</span>
//             </div>

//             {/* Description */}
//             <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
//               {event.description}
//             </p>

//             {/* Date, Time, Venue, Capacity */}
//             <ul className="list-unstyled small text-dark">
//               <li><i className="bi bi-calendar-event me-2"></i><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</li>
//               <li><i className="bi bi-clock me-2"></i><strong>Time:</strong> {event.time}</li>
//               <li><i className="bi bi-geo-alt me-2"></i><strong>Venue:</strong> {event.venue}</li>
//               <li><i className="bi bi-people me-2"></i><strong>Capacity:</strong> {event.capacity}</li>
//             </ul>

//             {/* Buttons */}
//             <div className="d-flex gap-2 mt-2">
//               <button className="btn btn-primary btn-sm w-100">Register for Event</button>
//               <button className="btn btn-outline-secondary btn-sm w-100">View Event Details</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Другите 2 колони ги оставаме исти */}
//   <div className="col-md-4">
//     <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
//       <div className="card-body">
//         <h5 className="card-title">Изгубено/Најдено</h5>
//         {lostAndFoundData && lostAndFoundData.map((data, index) => (
//           <div key={index} className="mb-4 p-3 rounded bg-white">
//             <div className='d-flex justify-content-between'>
//               <h5 className="mb-1 event-title">{data.title}</h5>
//             </div>
//             <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{data.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   <div className="col-md-4">
//     <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
//       <div className="card-body">
//         <h5 className="card-title">Перална</h5>
//         {laundryData && laundryData.map((data, index) => (
//           <div key={index} className="mb-4 p-3 rounded bg-white">
//             <div className='d-flex justify-content-between'>
//               <h5 className="mb-1">{data.title}</h5>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>





//         <div className="row pt-4">
//           <div className="col-md-12">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Коментари</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default Home;
import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function Home() {
  const [eventsData, setEventsData] = useState([]);
  const [lostAndFoundData, setLostAndFoundData] = useState([]);
  const [laundryData, setLaundryData] = useState([]);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/events')
      .then((response) => setEventsData(response.data))
      .catch((error) => console.error("Error loading events:", error));

    axios.get('http://localhost:8080/api/lostandfound')
      .then((response) => setLostAndFoundData(response.data))
      .catch((error) => console.error("Error loading lost & found:", error));

    axios.get('http://localhost:8080/api/lrooms')
      .then((response) => setLaundryData(response.data))
      .catch((error) => console.error("Error loading laundry data:", error));

    axios.get('http://localhost:8080/api/dorms')
      .then((response) => setRoomData(response.data))
      .catch((error) => console.error("Error loading dorms:", error));
  }, []);

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
              <li>Име: Даница</li>
              <li>Презиме: Симитчиевска</li>
              <li>Е-Маил: fff@gmail.com</li>
              <li>Одлогирајте се</li>
            </ul>
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
                    <div className="d-flex gap-2 mt-2">
                      <button className="btn btn-primary btn-sm w-100">Register for Event</button>
                      <button className="btn btn-outline-secondary btn-sm w-100">View Event Details</button>
                    </div>
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
            </div>
          </div>

          {/* Laundry */}
          <div className="col-md-4">
            <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
              <div className="card-body">
                <h5 className="card-title">Перална</h5>
                {laundryData.map((data, index) => (
                  <div key={index} className="mb-4 p-3 rounded bg-white">
                    <div className='d-flex justify-content-between'>
                      <h5 className="mb-1">{data.title}</h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
