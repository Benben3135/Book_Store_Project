import axios from "axios";

export const check = async () => {
  try {
    const { data } = await axios.get("/check");
    return data;
  } catch (error) {
    console.error(error);
  }
};
