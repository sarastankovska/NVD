import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function Home() {


    const [eventsData, setEventsData] = useState([]);
    const [lostAndFoundData, setLostAndFoundData] = useState([]);
    const [laundryData,setLaundryData]=useState([]);
    const[roomData,setRoomData]=useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/events')
        .then((response) => setEventsData(response.data));

        axios.get('http://localhost:8080/api/lostandfound')
        .then((response) => setLostAndFoundData(response.data));

         axios.get('http://localhost:8080/api/lrooms')
        .then((response) => setLaundryData(response.data));

          axios.get('http://localhost:8080/api/dorms')
        .then((response) => setRoomData(response.data));
    }, [])


    return (
        
        <>
         <h5 className="card-title">Избери соба</h5>
           <div className="card-body">
                                {roomData.rooms &&
                                    <div className="mb-4 p-3 rounded bg-white">
                                        <div className='d-flex justify-content-between'>
                                     {roomData && roomData.rooms.map((room, index) => (
                                    <div key={index} className="mb-4 p-3 rounded bg-white">
                                        <div className='d-flex justify-content-between'>
                                            <p>bb</p>
                                        <h5 className="mb-1 event-title">{room.numRoom}</h5>
                                       
                                        </div>
                                    </div>
                                ))}                                       
                                        </div>
                                        {/* <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{room.numRoom}</p> */}
                                    </div>
                                    }
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

            <section className='container pt-5 pb-5'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card overflow-auto" style={{maxHeight:"500px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Настани</h5>
                                {eventsData && eventsData.map((event, index) => (
                                    <div key={index} className="mb-4 p-3 rounded bg-white">
                                        <div className='d-flex justify-content-between'>
                                        <h5 className="mb-1 event-title">{event.title}</h5>
                                        <small className="event-date-info">{new Date(event.date).toLocaleDateString()}</small>
                                       
                                        </div>
                                        <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card overflow-auto" style={{maxHeight:"500px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Изгубено/Најдено</h5>
                                {lostAndFoundData && lostAndFoundData.map((data, index) => (
                                    <div key={index} className="mb-4 p-3 rounded bg-white">
                                        <div className='d-flex justify-content-between'>
                                        <h5 className="mb-1 event-title">{data.title}</h5>
                                        {/* <small className="event-date-info">{}</small> */}
                                       
                                        </div>
                                        <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{data.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card overflow-auto" style={{maxHeight:"500px"}}>
                          <div className="card-body">
                                <h5 className="card-title">Перална</h5>
                                {laundryData && laundryData.map((data, index) => (
                                    <div key={index} className="mb-4 p-3 rounded bg-white">
                                        <div className='d-flex justify-content-between'>
                                        <h5 className="mb-1">{data.title}</h5>
                                        {/* <small className="event-date-info">{}</small> */}
                                       
                                        </div>
                                        {/* <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{data.description}</p> */}
                                    </div>
                                ))}
                            </div>
                            </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Коментари</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;