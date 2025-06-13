import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import Header from '../header/header';
import SelectRoom from '../selectRoom/selectRoom';
import Events from '../events/events';
import LostFound from '../lostFound/lostFound';
import Laundry from '../laundry/laundry';
import Review from '../review/review';

function Home() {
  const [eventsData, setEventsData] = useState([]);
  const [lostAndFoundData, setLostAndFoundData] = useState([]);
  const [laundryData, setLaundryData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const { user, setUser } = useUser();


  useEffect(() => {
    const userDormId = user.dorm.id;
    axios.get('http://localhost:8080/api/events/' + userDormId)
      .then((response) => setEventsData(response.data))
      .catch((error) => console.error("Error loading events:", error));

    axios.get('http://localhost:8080/api/lostandfound')
      .then((response) => setLostAndFoundData(response.data))
      .catch((error) => console.error("Error loading lost & found:", error));

    axios.get('http://localhost:8080/api/lrooms/' + userDormId)
      .then((response) => setLaundryData(response.data))
      .catch((error) => console.error("Error loading laundry data:", error));

    axios.get('http://localhost:8080/api/dorms')
      .then((response) => {
        let findDormByUserId = response.data.filter((dorm) => dorm.id == userDormId)[0];
        return setRoomData(findDormByUserId);
      })
      .catch((error) => console.error("Error loading dorms:", error));

    axios.get('http://localhost:8080/api/reviews/' + userDormId)
      .then((response) => setReviewData(response.data))
      .catch((error) => console.error("Error loading reviews:", error));
  }, [user]);




  return (
    <>
      {/* Header */}
      <Header user={user}></Header>
      {
        user.room === null ?
         <div className="container">
         <SelectRoom roomData={roomData} user={user} setUser={setUser}></SelectRoom>
        </div> 
         :
        <>
<nav className="bg-primary text-white py-2">
        <div className="container d-flex justify-content-around py-2">
          <a className="text-white fw-semibold text-decoration-none" href="#">
            <i className="bi bi-calendar-event me-2"></i>
          </a>
          <a className="text-white fw-semibold text-decoration-none" href="#">
            <i className="bi bi-box-seam me-2"></i>
          </a>
          <a className="text-white fw-semibold text-decoration-none" href="#">
            <i className="bi bi-chat-dots me-2"></i>
          </a>
        </div>
      </nav>

      {/* Title Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">Официјални настани и активности во домовите </h2>
        <hr className="mx-auto" style={{ width: '100px', borderTop: '3px solid #FFC107' }} />
        <p className="text-muted">

        </p>


        <div className="row mt-4">
          {/* Events */}
          <Events eventsData={eventsData}></Events>
   

          {/* Lost and Found */}
          <LostFound user={user}></LostFound>
  

          {/* Laundry */}
          <Laundry user={user}></Laundry>
        
        </div>

        {/* Comments Section */}
        <Review user={user} reviewData={reviewData}></Review>
     </div>
        </>
     }
    </>
  );
}

export default Home;