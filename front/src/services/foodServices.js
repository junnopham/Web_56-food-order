import request from "../config/axios";

export const getAll = async (page, size = 10, name = "") => {
  return await request.get("/food", {
    params: {
      name,
      size,
      page,
    },
  });
};
