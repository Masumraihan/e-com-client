import axios from "axios";

export const UserLogout = async () => {
  try {
    const response = await axios.get("/api/auth/logout");
    if (response.data.success) return response.data;
  } catch (error) {
    console.log(error);
  }
};
