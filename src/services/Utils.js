"use strict";

import safeAxios from "@/services/safeAxios";

const getUser = async function() {
  const response = await safeAxios().get("/users");
  return response.data;
};

const Utils = {
  getUser
};

export { getUser };

export default Utils;
