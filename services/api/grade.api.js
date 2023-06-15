import axios from "axios";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const url = process.env.NEXT_PUBLIC_URL_API;

const crypto = new useCrypto();
export default class GradeService {
  get = () => {
    return axios
      .get(url + "/grade", {
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
      .post(url + "/grade", data, {
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

  update = (data) => {
    return axios
      .patch(url + "/grade/" + data.id, data, {
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

  delete = (id) => {
    return axios
      .delete(url + "/grade/" + id, {
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

  getGradesPerAcademicYearForStatistics = (academicYear) => {
    return axios
      .get(
        url + "/grades/academicYear/"+academicYear,
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
        return response.data;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
}
