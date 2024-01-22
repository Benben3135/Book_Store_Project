
export const deleteUser = async (uid: any) => {
  try {
    console.log("you are sending:" , uid)
    const response = await fetch("/api/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({uid}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error making request to server:", error);
    // Handle the error, e.g., display a message to the user
  }
};