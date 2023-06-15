import axios from "axios";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const url = process.env.NEXT_PUBLIC_URL_API;

const crypto = new useCrypto();
export default class AcademicYearService {
  get = () => {
    return axios
      .get(url + "/academic-years", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            cookie.get("G-APTVU") &&
            JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
          }`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };

  create = (data) => {
    return axios
      .post(url + "/academic-year", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            cookie.get("G-APTVU") &&
            JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
          }`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
  setCurrentAcademicYear = (data) => {
    return axios
      .post(
        url + "/current/academic-year",
        { academicYear: data },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              cookie.get("G-APTVU") &&
              JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
            }`,
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
  getCurrentAcademicYear = () => {
    return axios
      .get(url + "/current/academic-year", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            cookie.get("G-APTVU") &&
            JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
          }`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
  update = (data) => {
    return axios
      .patch(
        url + "/academic-year/" + data.academicYear,
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              cookie.get("G-APTVU") &&
              JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
            }`,
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
  delete = (id) => {
    return axios
      .delete(
        url + "/academic-year/" + id,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              cookie.get("G-APTVU") &&
              JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
            }`,
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };

  examRelease = (id) => {
    return axios
      .patch(
        url + "/release/exam/" + id,
        { id: id },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              cookie.get("G-APTVU") &&
              JSON.parse(crypto.decrypt(cookie.get("G-APTVU"))).token
            }`,
          },
        }
      )
      .then((result) => {
        return result;
      })
      .catch((e) => {
        if (e) {
          throw e;
        }
      });
  };
  releaseExaminations = (data) => {
    return axios
      .patch(
        url + "/release-exam/" + data,
        { id: data },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJ1dWlkIjoiYWIzODc1ZGYtOTE3Yy00OTI3LWFjZWItNzI5ODA2MGIwNzA5Iiwicm9sZSI6InVzZXIxIn0sImlhdCI6MTY4Mjg3NzkwOCwiZXhwIjoxNjgyODkyMzA4fQ.A-_hD6UEURP0a5GtkxDu00vJ1MNLYOOHEknZMXy3Qps`,
          },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
}
