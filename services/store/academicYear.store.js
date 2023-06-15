import cookie from "js-cookie";
import useCrypto from "../cryptoJs";
import AcademicYearService from "../api/academicYear.api";

const academicYearService = new AcademicYearService();
const crypto = new useCrypto();

export default class AcademicYearStore {
  get = async () => {
    return await academicYearService
      .get()
      .then((result) => {
        if (result) {
          cookie.set("G-ACYVD", crypto.encrypt(JSON.stringify(result)), {
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
    return await academicYearService
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
    return await academicYearService
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
    return await academicYearService
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
  setCurrentAcademicYear = async (data) => {
    return await academicYearService
      .setCurrentAcademicYear(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  getCurrentAcademicYear = async () => {
    return await academicYearService
      .getCurrentAcademicYear()
      .then((result) => {
        if (result) {
          cookie.set("G-ACYVD", crypto.encrypt(JSON.stringify(result)), {
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


  releaseExaminations = async (data) => {
    return await academicYearService
      .releaseExaminations(data)
      .then((result) => {
        if (result) {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  examRelease = async (id) => {
    return await academicYearService
      .examRelease(id)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  };
}
