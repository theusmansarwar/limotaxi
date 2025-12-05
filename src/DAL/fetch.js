import { invokeApi } from "../Utils/InvokeApi";
export const fetchDashboard = async () => {
  const reqObj = {
    path: "/admin/stats",
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    postData: {},
  };
  return invokeApi(reqObj);
};
