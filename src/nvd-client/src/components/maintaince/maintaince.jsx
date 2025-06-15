import { useEffect, useState } from 'react';
import { addMaintaince } from '../../service/maintainceService';
import { useUser } from '../../contexts/UserContext';
function Maintaince(){
      const[description,setDescription]=useState('')
      const { user } = useUser();

        const onAddMaintaince = async () => {
          await addMaintaince(description, user.room , user.dorm);
          setDescription('');
        }


 return (
    <>
     


      <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="reviewModalLabel">Пријави проблем</h1>
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
          
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>
              <button type="button" class="btn btn-primary" onClick={onAddMaintaince} data-bs-dismiss="modal">Зачувај</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Maintaince