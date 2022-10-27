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
const callApi = ({
  endpoint,
  rootUrl,
  method,
  payload,
  headers,
  noAuth,
  isRecipient,
}) => {
  const root = rootUrl ? rootUrl : ``;
  const url = root + endpoint;
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
  if (!noAuth && !isRecipient) {
    query.headers = {
      ...query.headers,
      ...{ Authorization: `${localStorage.getItem("TOKEN")}` },
    };
  }

  if (!noAuth && isRecipient) {
    query.headers = {
      ...query.headers,
      ...{ Authorization: `${localStorage.getItem("RECIPIENT_TOKEN")}` },
    };
  }

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
