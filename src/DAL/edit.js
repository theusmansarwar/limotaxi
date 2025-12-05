import { invokeApi } from "../Utils/InvokeApi";

export const updateBlog = async (id, data) => {
  const reqObj = {
    path: `/blog/update/${id}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

