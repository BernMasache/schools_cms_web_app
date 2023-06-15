import { useEffect, useRef, useState } from "react";
import AssignTeacherSubject from "./newTeacherSubjectAssign";
import { useReactToPrint } from "react-to-print";
import UpdateAssignedTeacherSubject from "./updateTeacherSubjectAssigned";
import Cookies from "js-cookie";
import DeleteTeacherSubject from "./teacherSubjects";
import Swal from "sweetalert2";

export default function ManageTeacherSubjectsAssignmentList(props) {
  const pdfRef = useRef();
  const [open, setOpen] = useState(false);
  const [teacherSubjects, setTeacherSubjects] = useState([]);

  const printPDF = useReactToPrint({
    content: () => pdfRef.current,
  });

  const setTeacher = (e) => {
    if (e.target.value == undefined) {
    } else {
      Cookies.set("TID", JSON.stringify(e.target.value));
      setDataLoader();
    }
  };

  const setAcademicYear = (e) => {
    if (e.target.value == undefined) {
    } else {
      Cookies.set("ACY", JSON.stringify(e.target.value));
      setDataLoader();
    }
  };

  const loadData = () => {
    if (
      Cookies.get("TID") == undefined ||
      Cookies.get("TID") == null ||
      Cookies.get("ACY") == undefined ||
      Cookies.get("ACY") == null
    ) {
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: "No data available",
      });
    } else {
      let data = JSON.parse(Cookies.get("TSA"));
      if (data.length > 0) {
        setTeacherSubjects(data);
        setOpen(true);
      }
    }
  };

  const setDataLoader = () => {
    if (
      Cookies.get("TID") == undefined ||
      Cookies.get("TID") == null ||
      Cookies.get("ACY") == undefined ||
      Cookies.get("ACY") == null
    ) {
    } else {
      let body = {
        teacherId: JSON.parse(Cookies.get("TID")),
        academicYear: JSON.parse(Cookies.get("ACY")),
      };
      props.getTeacherSubjects(body);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="pb-2 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Manage teacher subjects
        </h3>
        <div className="mt-3 flex lg:flex-row flex-col sm:ml-4 sm:mt-0 gap-4">
          <select
            onChange={setTeacher}
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>--teacher--</option>
            {props &&
              props.teachers.map((teacher, i) => {
                return (
                  <option value={teacher.uuid} key={i}>
                    {teacher.name}
                  </option>
                );
              })}
          </select>

          <select
            onChange={setAcademicYear}
            id="location"
            name="location"
            className="inline-flex items-center mt-2 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>--academic year--</option>
            {props &&
              props.academicYears.map((academicYear, i) => {
                return (
                  <option value={academicYear.uuid} key={i}>
                    {academicYear.academicYear}
                    {" - "}term {academicYear.term}
                  </option>
                );
              })}
          </select>

          <button
            onClick={loadData}
            type="button"
            className="inline-flex items-center rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Load
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            ref={pdfRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-w-full py-2 align-middle md:px-6 lg:px-8 gap-5"
          >
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {open == true ? (
                <table className="min-w-full divide-y divide-gray-300 overflow-x-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Form
                      </th>

                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Subject
                      </th>

                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <span className="sr-only">manage</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {teacherSubjects.map((data, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                          Form {data.form}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          {data.Subject.name}
                        </td>
                        <td className="whitespace-nowrap flex flex-row w-full justify-end px-2 py-2 text-sm space-x-2">
                          <UpdateAssignedTeacherSubject
                            updateTeacher={props.updateTeacher}
                            data={data}
                            teachers={props.teachers}
                            academicYears={props.academicYears}
                            subjects={props.subjects}
                          />
                          <DeleteTeacherSubject
                            teacherSubjectId={data.uuid}
                            deleteTeacherSubject={props.deleteTeacherSubject}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
