import { invokeApi } from "../Utils/InvokeApi";

export const uploadimage = async (data) => {
  const reqObj = {
    path: "/upload-image",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
