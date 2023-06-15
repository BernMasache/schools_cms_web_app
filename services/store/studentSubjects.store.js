import StudentSubjectsService from "../api/studentSubjects.api";

const studentSubject = new StudentSubjectsService();

export default class StudentSubjectsStore {
  get = async (data) => {
    return await studentSubject
      .get(data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };
  getAllStudentsAssignedSubjectsPerAcademicYear = async (data) => {
    return await studentSubject
      .getAllStudentsSubjectsPerAcademicYear(data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };


}
