import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

function Header({ user }) {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
    return (
        <>

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
        <li className="mb-2"><strong>Студентски дом:</strong> {user?.dorm?.name ?? '...'}</li>
        <li className="mb-2"><strong>Факултет:</strong> {user?.faculty?.name ?? '...'}</li>
        <li className="mb-3"><strong>Соба:</strong> {user?.room?.numRoom ?? '...'}</li>
         <li><button type="button" className="btn btn-sm btn-primary w-100" data-bs-toggle="modal" data-bs-target="#reviewModal">
                  Пријави проблем
          </button></li>
        <li className="text-center py-2">
          <button onClick={handleLogout} className="btn btn-sm btn-danger w-100">Одлогирајте се</button>
        </li>
         
      </ul>
    </div>
  </div>
</div>

        </>
    )
}

export default Header;