
export const getActiveUserData = async () => {
  try {
    const response = await fetch("/api/users/cookie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("i got a cookie baby!" , data);
    return(data)
  } catch (error) {
    console.error("Error making request to server:", error);
  }
};