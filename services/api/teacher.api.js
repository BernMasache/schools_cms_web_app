import axios from "axios";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const url = process.env.NEXT_PUBLIC_URL_API;

const crypto = new useCrypto();
export default class TeacherService {
  get = () => {
    return axios
      .get(url + "/teachers", {
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
      .post(url + "/teacher", data, {
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
      .patch(url + "/teacher/" + data.id, data, {
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
      .delete(url + "/teacher/" + id, {
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

  assignTeacherSubject = (data) => {
    return axios
      .post(url + "/teacher/subject", data, {
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

  getTeachersSubjects = () => {
    return axios
      .get(url + "/teachers/subjects/list", {
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
  getTeacherSubjects = (data) => {
    return axios
      .post(url + "/teacher/subjects-assigned", data, {
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
  teacherSubjects = (data) => {
    return axios
      .get(url + "/teacher/current-assigned/subjects/"+data.teacher+"&"+data.academicYear, {
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

  getAllTeachersSubjectsByAcademicYear = (id) => {
    return axios
      .get(url + "/teachers/subjects-by-academic-year/" + id, {
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

  deleteTeacherSubject = (id) => {
    return axios
      .delete(url + "/teacher/subject/" + id, {
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

  updateTeacherSubjects = (data) => {
    return axios
      .patch(url + "/teacher/" + data.id, data, {
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
}
