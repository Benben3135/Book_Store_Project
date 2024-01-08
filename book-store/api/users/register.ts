import axios from "axios";

export const register = async (result:any) => {
    fetch("/API/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.user),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log("Data received from server:", data);
          // navigate("/homePage");
        })
        .catch((error) => {
          console.error("Error parsing response from server", error);
        });
};
