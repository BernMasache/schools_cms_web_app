import axios from "axios";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const url = process.env.NEXT_PUBLIC_URL_API;

const crypto = new useCrypto();
export default class StudentService {
  get = () => {
    return axios
      .get(url + "/students", {
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
      .post(url + "/student", data, {
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
      .delete(url + "/student/"+id, {
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

  getStudentPresentForm = (form) => {
    return axios
      .get(url + `/students/per-status/form/${form}`, {
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

  assignStudentSubjects = (data) => {
    return axios
      .post(url + "/assigned/student/subjects", data, {
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

  getStudentSubjects = (data) => {
    return axios
      .get(url + "/student/assigned-subjects/list", data, {
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

  getTheStudentsPerSubject = (data) => {
    return axios
      .post(url + "/students/subject/form/term/academicYear", data, {
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
  getStudentsDefaultPasswords = (form) => {
    return axios
      .get(url + "/default-passwords/student/" + form, {
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
  allPresentStudents = () => {
    return axios
      .get(url + "/present/students", {
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
  resetStudentPassword =  (id) => {
    return axios
      .patch(
        url + "/reset/student/password/" + id,
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
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };
  
  allStudentSubjects = (data) => {
    return axios
      .get(
        url +
          "/list/student/subjects/" +
          data.studentId +
          "&" +
          data.academicYear,
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
  deleteStudentSubject = (id) => {
    return axios
      .delete(
        url +
          "/delete/student/subject/" +
          id,
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
}
