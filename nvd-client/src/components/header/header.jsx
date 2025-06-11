function Header({user}) {
    return (
        <>
        {/* <div className="container-fluid bg-white shadow-sm py-3 px-4 d-flex justify-content-between align-items-center">
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
              <li>Име: {user?.name ?? '...'}</li>
              <li>Е-Маил: {user?.email ?? '...'}</li>
               <li>Студентски дом: {user?.dorm.name ?? '...'}</li>
                <li>Факултет: {user?.faculty.name ?? '...'}</li>
                 <li>Соба: {user?.room.numRoom ?? '...'}</li>
              <li><button className="btn btn-primary" >Одлогирајте се</button></li>            </ul>
          </div>
        </div>
      </div> */}
      <div className="container-fluid bg-white shadow-sm py-3 px-4 d-flex justify-content-between align-items-center rounded-bottom">
  <div>
    <h2 className="mb-1 fw-bold ">Државен студентски дом Скопје</h2>
    <small className="text-muted">Организација за подобрување на студентскиот стандард</small>
  </div>

  <div className="d-flex justify-content-end home-nav-container">
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 rounded-pill"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle fs-5"></i>
        Профил
      </button>

      <ul className="dropdown-menu dropdown-menu-end p-3" style={{ minWidth: "250px" }}>        <li className="mb-2"><strong>Име:</strong> {user?.name ?? '...'}</li>
        <li className="mb-2"><strong>Е-Маил:</strong> {user?.email ?? '...'}</li>
        <li className="mb-2"><strong>Студентски дом:</strong> {user?.dorm.name ?? '...'}</li>
        <li className="mb-2"><strong>Факултет:</strong> {user?.faculty.name ?? '...'}</li>
        <li className="mb-3"><strong>Соба:</strong> {user?.room.numRoom ?? '...'}</li>
        <li className="text-center">
          <button className="btn btn-sm btn-danger w-100">Одлогирајте се</button>
        </li>
      </ul>
    </div>
  </div>
</div>

        </>
    )
}

export default Header;