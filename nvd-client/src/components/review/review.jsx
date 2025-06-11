import './review.css';

function Review({ reviewData }) {
  return (
        <>
      {/* <div className="row pt-4">
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
      */}

      <div class="col-md-12">
        <div class="icon-cards mx-auto">
          <div class="icon-cards__content">
            <div class="icon-cards__item d-flex align-items-center justify-content-center">
              <div class="feedback-container">
                <div class="feedback-container-wrapper">
                  <div class="feedback-wrap">
                    <div class="feedback-stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div class="feedback-inner-text text-white mt-4">
                    <p>"Најтопла препорака до сите што се заинтересирани навистина да научат да возат, професионален и љубезен тим. Нема да згрешите"</p><br/>
                  </div>
                  <div class="feedback-inner-bio d-flex">
                    <div class="feedback-bio-img">
                      <img src="images/person_img1.jpg" alt="" />
                    </div>
                    <div class="feedback-bio-name text-white pl-4 pt-4">
                      <p class="font-weight-bold feedback-name mb-2">Марија</p>
                      <p class="feedback-name-info">Стефановска</p>
                    </div>
                  </div>
                  <div class="feedback-quote-icon">
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon-cards__item d-flex align-items-center justify-content-center">
              <div class="feedback-container">
                <div class="feedback-container-wrapper">
                  <div class="feedback-wrap">
                    <div class="feedback-stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div class="feedback-inner-text text-white mt-4">
                    <p>"Квалитетна авто школа со добри инструктори кои ќе се погрижат за Вас."</p><br />
                  </div>
                  <div class="feedback-inner-bio d-flex">
                    <div class="feedback-bio-img">
                      <img src="images/person_img2.jpg" alt="" />
                    </div>
                    <div class="feedback-bio-name text-white pl-4 pt-4">
                      <p class="font-weight-bold feedback-name mb-2">Кристијан</p>
                      <p class="feedback-name-info">Соколовски</p>
                    </div>
                  </div>
                  <div class="feedback-quote-icon">
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon-cards__item d-flex align-items-center justify-content-center">
              <div class="feedback-container">
                <div class="feedback-container-wrapper">
                  <div class="feedback-wrap">
                    <div class="feedback-stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div class="feedback-inner-text text-white mt-4">
                    <p>"Професионализам од инструкторите трпеливи за време на часовите. Ви ја препорачувам авто школата."</p><br/>
                  </div>
                  <div class="feedback-inner-bio d-flex">
                    <div class="feedback-bio-img">
                      {/* </div><img src="images/person_img3.png" alt=""/> */}
                    </div>
                    <div class="feedback-bio-name text-white pl-4 pt-4">
                      <p class="font-weight-bold feedback-name mb-2">Стефан</p>
                      <p class="feedback-name-info">Стојановски</p>
                    </div>
                  </div>
                  <div class="feedback-quote-icon">
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      )
}
      export default Review