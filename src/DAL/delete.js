import { invokeApi } from "../Utils/InvokeApi";


export const deleteAllComments = async (data) => {
  const reqObj = {
    path: `/comment/delete`,
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  
  return invokeApi(reqObj);
};
