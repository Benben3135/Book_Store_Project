
export const login = async (result: any) => {
  try {
    console.log("hey im the login func and i sending this:" , result)
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
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