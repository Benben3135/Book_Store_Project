import axios from "axios";

export const changeNameServer = async (name:string, uid:string) => {
  try {
    console.log("hey im the register func and i sending this:" , name)
    const response = await fetch("/api/users/name", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({newName: name , uid: uid}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received from server:", data)
  } catch (error) {
    console.error("Error making request to server:", error);
    // Handle the error, e.g., display a message to the user
  }
};