function Events({eventsData}){
    return(<>
      {/* <div className="col-md-4">
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
               
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="col-md-4">
  <div className="card shadow-sm rounded-4 border-0 overflow-auto" style={{ height: "500px" }}>
    <div className="card-body p-4">
      <h4 className="fw-semibold mb-4 text-primary">
        <i className="bi bi-calendar3 me-2"></i>Настани
      </h4>

      {eventsData.map((event, index) => (
        <div
          key={index}
          className="mb-4 p-3 rounded-4 bg-white border border-light shadow-sm position-relative"
        >
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="fw-semibold text-dark mb-0">{event.title}</h5>
            <span className="badge bg-primary text-white px-3 py-2 rounded-3" style={{ fontSize: "0.8rem" }}>
              {new Date(event.date).toLocaleDateString()}
            </span>
          </div>

          <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
            {event.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


    </>
    )
}
export default Events;