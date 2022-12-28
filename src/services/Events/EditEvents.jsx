import React from 'react'

const EditEvents = async (sendForm) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/admin/event/${id}`,
      sendForm,
      // sendData,
      {
        headers:{"Content-Type":"multipart/form-data"}
      }
    );
    toast.success("Event Edited")
    console.log(id);
    return res.data.members

  } catch (err) {
    console.log(err);
    toast.error("There's an error")
  }
}

export default EditEvents
