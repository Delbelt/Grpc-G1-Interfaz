export const GetAllUser = () => {
  const URL = "https://localhost:7139/GetAll";

  return fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json", charset: "utf-8" },
  });
};
