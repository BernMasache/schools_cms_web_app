import { useState } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentStore from "../../../../../services/store/student.store";

const studentStore = new StudentStore();

export default function AssignAllStudentSubjects(props) {
  const [form, setTheForm] = useState(0);
  const [studentIdData, setTheStudent] = useState("");
  const [academicYear, setTheAcademicYear] = useState({
    id: "",
    term: 0,
  });

  const setForm = (e) => {
    if (e.target.value == 0 || e.target.value == undefined) {
    } else {
      props.getStudentPresentForm(e.target.value);
      setTheForm(e.target.value);
    }
  };
  const setStudent = (e) => {
    if (e.target.value == 0 || e.target.value == undefined) {
    } else {
      setTheStudent(e.target.value);
    }
  };

  const setAcademicYear = (e) => {
    if (e.target.value == 0 || e.target.value == undefined) {
    } else {
      let splittedData = e.target.value.split("TERM");
      setTheAcademicYear({
        id: splittedData[0],
        term: splittedData[1],
      });
    }
  };
  const checkSubjects = (studentId, yearId) => {
    let data = {
      studentId: studentId,
      academicYear: yearId,
    };
    studentStore.allStudentSubjects(data).then((res) => {
      console.log(res);
      // if (res.data.length>0) {

      // }
    });
    return true;
  };
  const setStudentData = () => {
    let subjectsHolder = [];
    let table = document.getElementById("selectedSubjectsId");
    let body = table.children;
    if (
      academicYear.term == 0 ||
      studentIdData == "" ||
      form == 0 ||
      form == undefined ||
      form == null ||
      form == ""
    ) {
      toast.error("Either academic year, form or student is not selected", {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      for (let x = 0; x < body.length; x++) {
        const textInputs = body[x].getElementsByTagName("INPUT");
        if (textInputs[0].checked == true) {
          subjectsHolder.push({
            studentId: studentIdData,
            subjectId: parseInt(textInputs[0].name),
            term: parseInt(academicYear.term),
            academicYear: academicYear.id,
            form: parseInt(form),
          });
        }
      }
      let payload = {
        studentId: studentIdData,
        academicYear: academicYear.id,
        term: parseInt(academicYear.term),
        data: subjectsHolder,
      };
      if (subjectsHolder.length > 0) {

        studentStore
          .allStudentSubjects(payload)
          .then((res) => {
            console.log(res);
            // if (res.data.length>0) {
              
            // }
          });
        // props && props?.assignStudentSubjects(payload);
      } else {
        toast.error("No subject checked", {
          position: "top-right",
          transition: Flip,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="">
      <div className="border-b border-gray-200 pb-2 mb-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          NOTE
        </h3>
        <p className="max-w-4xl text-sm text-gray-500">
          Select the form, the student, and the academic year to assign the
          subject(s) to the such student.
        </p>
      </div>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <div className="grid grid-col-1 lg:grid-cols-3 mg:grid-cols-3 gap-4">
          <select
            onChange={setForm}
            id="form"
            name="form"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>--form--</option>
            <option value={1}>Form 1</option>
            <option value={2}>Form 2</option>
            <option value={3}>Form 3</option>
            <option value={4}>Form 4</option>
          </select>

          <select
            onChange={setStudent}
            id="students"
            name="students"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>--students--</option>
            {props &&
              props.subjectsByFormPresent.map((student, key) => {
                return (
                  <option key={key} value={student.code}>
                    {student.name}
                  </option>
                );
              })}
          </select>

          <select
            onChange={setAcademicYear}
            id="academicYear"
            name="academicYear"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>--academic year--</option>
            {props &&
              props?.academicYears?.map((academicYear, key) => {
                return (
                  <option
                    key={key}
                    value={
                      academicYear?.academicYear + "TERM" + academicYear?.term
                    }
                  >
                    {academicYear?.academicYear} - term {academicYear?.term}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <button
            onClick={setStudentData}
            type="button"
            className="inline-flex items-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Assign
          </button>
        </div>
      </div>
      <fieldset className="mt-2">
        <legend className="text-base font-semibold leading-6 text-gray-500">
          Check subject(s) to be assigned
        </legend>
        <div
          id="selectedSubjectsId"
          className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200 grid grid-cols-1 lg:grid-cols-3 mg:grid-cols-3 gap-4"
        >
          {props &&
            props?.subjects?.map((subject, key) => (
              <div key={key} className="relative flex items-start py-4">
                <div className="min-w-0 flex-1 text-sm leading-6">
                  <label
                    htmlFor={subject?.uuid}
                    className="select-none font-medium text-gray-900"
                  >
                    {subject?.name}
                  </label>
                </div>
                <div className="ml-3 flex h-6 items-center">
                  <input
                    id={subject?.uuid}
                    name={subject?.id}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-sky-700 focus:ring-green-900"
                  />
                </div>
              </div>
            ))}
        </div>
      </fieldset>
      <ToastContainer transition={Flip} />
    </div>
  );
}
