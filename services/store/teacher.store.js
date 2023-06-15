import cookie from "js-cookie";
import useCrypto from "../cryptoJs";
import TeacherService from "../api/teacher.api";

const teacherService = new TeacherService();
const crypto = new useCrypto();
export default class TeacherStore {
  get = async () => {
    return await teacherService
      .get()
      .then((result) => {
        if (result) {
          cookie.set("G-TSVD", crypto.encrypt(JSON.stringify(result)), {
            expires: 2 / 24,
            sameSite: "lax",
          });
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  create = async (data) => {
    return await teacherService
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

  update = async (data) => {
    return await teacherService
      .update(data)
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
    return await teacherService
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

  assignTeacherSubject = async (data) => {
    return await teacherService
      .assignTeacherSubject(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  getTeachersSubjects = async () => {
    return await teacherService
      .getTeachersSubjects()
      .then((result) => {
        if (result) {
          cookie.set("G-TSVD", crypto.encrypt(JSON.stringify(result)), {
            expires: 2 / 24,
            sameSite: "lax",
          });
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  getTeacherSubjects = async (data) => {
    return await teacherService
      .getTeacherSubjects(data)
      .then((result) => {
        if (result) {
          cookie.set("G-TSVD", crypto.encrypt(JSON.stringify(result)), {
            expires: 2 / 24,
            sameSite: "lax",
          });
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  getAllTeachersSubjectsByAcademicYear = async (id) => {
    return await teacherService
      .getAllTeachersSubjectsByAcademicYear(id)
      .then((result) => {
        if (result) {
          cookie.set("G-TSVD", crypto.encrypt(JSON.stringify(result)), {
            expires: 2 / 24,
            sameSite: "lax",
          });
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  deleteTeacherSubject = async (id) => {
    return await teacherService
      .deleteTeacherSubject(id)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  updateTeacherSubjects = async (data) => {
    return await teacherService
      .updateTeacherSubjects(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  teacherSubjects = async (data) => {
    return await teacherService
      .teacherSubjects(data)
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
