import axios from "axios";

function addLostFound(lostFoundData) {
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

async function getLostFound() {
  try {
    const response = await axios.get("http://localhost:8080/api/lostandfound");
    return response.data; // треба да е низа како што видовме
  } catch (error) {
    console.log(error);
    return [];
  }

}

export { addLostFound, getLostFound };
