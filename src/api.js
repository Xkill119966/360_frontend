import axios from "axios";

const parseMultipartPayload = (payload, headers) => {
  if (headers["Content-Type"] === "multipart/form-data") {
    const formData = new FormData();

    Object.keys(payload).forEach((item) => {
      formData.append(item, payload[item]);
    });
    return formData;
  } else {
    return payload;
  }
};
export const callApi = ({ endpoint, method, payload, headers }) => {
  const rootUrl = "http://localhost:8000/api/v1/";
  const url = rootUrl + endpoint;

  const query = {
    method,
    url,
  };

  query.headers = headers
    ? {
        ...{ "Content-Type": "application/json", "X-Requested-With": "" },
        ...headers,
      }
    : { "Content-Type": "application/json", "X-Requested-With": "" };

  const methods = ["put", "post", "patch", "delete"];
  query.method = method ? method : null;

  if (payload) {
    if (!methods.includes(query.method.toLowerCase())) {
      query.params = payload;
    } else {
      query.data = parseMultipartPayload(payload, query.headers);
    }
  }

  return axios(query)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
