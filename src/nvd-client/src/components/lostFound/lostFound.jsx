import { useEffect, useRef, useState } from "react";
import { addLostFound, getLostFound, markAsFound } from "../../service/dataService";

function LostFound({ user }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [lostFoundData, setLostFoundData] = useState([]);
  const imageInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await getLostFound();
    data = data.filter((item) => !item.found);
    setLostFoundData(data);
  };

  const onAddLostFound = async () => {
    if (!title || !description) {
      alert("Ве молам внесете наслов и опис.");
      return;
    }

    const newData = {
      title: title,
      description: description,
      image: image,
      user: user,
    };

    await addLostFound(newData);
    await fetchData();

    // Чисти полињата по додавање
    setTitle("");
    setDescription("");
    setImage(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = null;
    }
  };

  const onMarkAsFound = async (id) => {
    await markAsFound(id, user.id);
    fetchData();
  };

  return (
    <>
      <div className="col-md-4">
        <div className="card shadow-sm rounded-4 border-0 overflow-auto" style={{ height: "500px" }}>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-semibold text-primary">
              <i className="bi bi-search me-2"></i>Изгубено / Најдено
            </h4>
            <button
                type="button"
                className="btn btn-primary fw-bold fs-5 px-3 pt-1 pb-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                +
              </button>
              </div>
            <div className="text-center mt-3">
        
            </div>

            {lostFoundData.length === 0 && (
              <p className="text-center text-muted mt-4">Нема изгубени или најдени предмети.</p>
            )}

            {lostFoundData.map((data, index) => (
              <div
                key={index}
                className="mb-4 p-3 rounded-4 bg-white border border-light shadow-sm position-relative"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-semibold text-dark mb-0">{data.title}</h5>
                  {data.img && (
                    <img
                      src={`data:image/jpeg;base64,${data.img}`}
                      alt="Lost item"
                      className="rounded-3 border"
                      style={{ width: "120px", objectFit: "cover" }}
                    />
                  )}
                </div>
                <p className="text-secondary mb-0" style={{ fontSize: "0.95rem" }}>
                  {data.description}
                </p>

                {/* Копче за обележување како пронајдено само ако е корисникот кој го додал */}
                {data.user?.id === user.id && (
                  <button
                    className="btn btn-sm btn-success mt-2"
                    onClick={() => onMarkAsFound(data.id)}
                  >
                    Обележи како пронајдено
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-header border-0">
                  <h1 className="modal-title fs-5 fw-semibold" id="exampleModalLabel">
                    Изгубени предмети
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body pt-0">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Наслов
                      </label>
                      <input
                        id="title"
                        className="form-control"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Опис
                      </label>
                      <textarea
                        id="description"
                        className="form-control"
                        rows="3"
                        placeholder="Опишете што и каде сте го изгубиле, и оставете ваш контакт за полесна комуникација"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="img" className="form-label">
                        Слика
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="img"
                        name="img"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        ref={imageInputRef}
                      />
                    </div>
                  </form>
                </div>

                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Затвори
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={onAddLostFound}
                  >
                    Зачувај
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LostFound;
