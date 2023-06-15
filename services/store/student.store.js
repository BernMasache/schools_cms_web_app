import cookie from "js-cookie";
import useCrypto from "../cryptoJs";
import StudentService from "../api/student.api";

const studentService = new StudentService();
const crypto = new useCrypto();
export default class StudentStore {
  get = async () => {
    return await studentService
      .get()
      .then((result) => {
        if (result) {
          // cookie.set('G-ASYVD', crypto.encrypt(JSON.stringify(result)), { expires: 2 / 24, sameSite: 'lax' });

          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  getStudentPresentForm = async (form) => {
    return await studentService
      .getStudentPresentForm(form)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  create = async (data) => {
    return await studentService
      .create(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  delete = async (id) => {
    return await studentService
      .delete(id)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  assignStudentSubjects = async (data) => {
    return await studentService
      .assignStudentSubjects(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  
  getStudentSubjects = async (data) => {
    return await studentService
      .getStudentSubjects(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  
  getTheStudentsPerSubject = async (data) => {
    return await studentService
      .getTheStudentsPerSubject(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  getStudentsDefaultPasswords = async (form) => {
    return await studentService
      .getStudentsDefaultPasswords(form)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  allPresentStudents = async () => {
    return await studentService
      .allPresentStudents()
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  resetStudentPassword = async (id) => {
    return await studentService
      .resetStudentPassword(id)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  allStudentSubjects = async (data) => {
    return await studentService
      .allStudentSubjects(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  deleteStudentSubject = async (id) => {
    return await studentService
      .deleteStudentSubject(id)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  
}
