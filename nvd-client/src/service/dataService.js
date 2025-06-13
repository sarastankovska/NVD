import axios from "axios";

function addLostFound(lostFoundData){
   const formData = new FormData();
formData.append("title", lostFoundData.title);
formData.append("description", lostFoundData.description);
formData.append("image", lostFoundData.image); // File
formData.append("userId", lostFoundData.user.id);

return axios.post("http://localhost:8080/api/lostandfound/add", formData, {
  headers: {
    "Content-Type": "multipart/form-data"
  }
});
}

export { addLostFound };

function getLostFound() {
    return axios.get("http://localhost:8080/api/lostandfound")
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
            return [];
        });
}

export { getLostFound };

export async function markAsFound(id, userId) {
  await fetch(`http://localhost:8080/api/lostandfound/${id}/mark-as-found?userId=${userId}`, {
    method: "PUT"
  });
}
