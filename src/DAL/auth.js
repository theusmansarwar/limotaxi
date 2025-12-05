import { invokeApi } from "../Utils/InvokeApi";

export const login = async (formData) => {
  const reqObj = {
    path: "/auth/login",
    method: "POST",
    headers: {},
    postData: formData,
  };
  return invokeApi(reqObj);
};

export const register = async (formData) => {
  const reqObj = {
    path: "/auth/register",
    method: "POST",
    headers: {},
    postData: formData,
  };
  return invokeApi(reqObj);
};
export const verify = async (formData) => {
  const reqObj = {
    path: "/auth/verify-email",
    method: "POST",
    headers: {},
    postData: formData,
  };
  return invokeApi(reqObj);
};
export const forgotPassword = async (formData) => {
  const reqObj = {
    path: "/auth/forgot-password",
    method: "POST",
    headers: {},
    postData: formData,
  };
  return invokeApi(reqObj);
};


export const logout = async () => {
  const reqObj = {
    path: "/api/admin/logout",
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  };
  return invokeApi(reqObj);
};
