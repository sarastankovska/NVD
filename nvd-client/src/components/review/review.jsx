import { useEffect, useState } from 'react';
import './review.css';
import { addReview, getReviewByDorm } from '../../service/review';

function Review({ user }) {
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState([]);
  const [selectedStars, setSelectedStars] = useState(0);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await getReviewByDorm(user.dorm.id);
    setReviewData(data);
  }

  const onSelectStar = (num) => {
    const starNumber = num + 1;
    let newStars = []
    for (let i = 1; i <= starNumber; i++) {
      newStars.push(i);
    }
    setStars(newStars);
  }

  const saveStars = (num) => {
    let newStars = []
    for (let i = 1; i <= num + 1; i++) {
      newStars.push(i);
    }
    setStars(newStars);
    setSelectedStars(num + 1);
  }

  const onAddReview = async () => {
    await addReview(user, description, selectedStars, user.dorm);
    setDescription('');
    setStars([]);
    fetchData();
  }


  return (
    <>
      <div className="row pt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className='d-flex justify-content-between pb-3'>
                <h5 className="card-title">Коментари</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal">
                  Oстави коментар
                </button>
              </div>
              {reviewData && reviewData.map((data, index) => (
                <div key={index} className="mb-4 p-3 rounded bg-white">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <i className="bi bi-person-circle fs-5"></i>
                      <p className="mb-2"> {data.user?.name ?? '...'}</p>                    </div>

                    <div className='d-flex'>
                      {Array.from({ length: data.stars }, (_, i) => (
                        <div key={i} className='yellow'>

                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                          </svg>
                        </div>
                      ))}</div>
                  </div>

                  <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>{data.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>


      <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="reviewModalLabel">Нов коментар</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">


                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Опис
                  </label>
                  <textarea
                    id="description"
                    className="form-control"
                    rows="3"
                    placeholder=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-around">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i}
                        className={`review-star-icon ${stars.includes(i + 1) ? 'review-star-icon-active' : ''}`}
                        onMouseEnter={() => onSelectStar(i)}
                        onClick={() => saveStars(i)}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>
              <button type="button" class="btn btn-primary" onClick={onAddReview} data-bs-dismiss="modal">Зачувај</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Review