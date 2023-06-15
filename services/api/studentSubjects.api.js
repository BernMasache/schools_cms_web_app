import axios from "axios";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const url = process.env.NEXT_PUBLIC_URL_API;
const crypto = new useCrypto()
export default class StudentSubjectsService {
  get = (data) => {
    return axios
      .post(url + "/stud/sub",data, {
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
  getAllStudentsSubjectsPerAcademicYear = (academicYear) => {
    return axios
      .get(url + "/students-list/subjects/assigned/"+academicYear, {
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
}
