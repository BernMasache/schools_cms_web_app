import AssignTeacherSubject from "./newTeacherSubjectAssign";
import printToPDF from "../../../../../services/downloadPdf";

export default function TeacherSubjectsAssignmentDelete(props) {
  const getAllTeacherSubjectsByAcademicYear = (event) => {
    event.target.value == undefined || event.target.value == null
      ? props.getAllTeacherSubjectsByAcademicYear(props.academicYears[0].uuid)
      : props.getAllTeacherSubjectsByAcademicYear(event.target.value);
  };

  const printPDF = () => {
    printToPDF("downloadPdf", "Teacher's assigned subjects");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            Subjects assigned to teachers
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-2">
          <div className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
            <div>
              <select
                onChange={getAllTeacherSubjectsByAcademicYear}
                id="location"
                name="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="Canada"
              >
                {props &&
                  props.academicYears.map((academicYear, key) => (
                    <option key={key} value={academicYear.uuid}>
                      {academicYear.academicYear} - term {academicYear.term}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"></div>
          <button
            onClick={printPDF}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div
              id="downloadPdf"
              className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
            >
              <table className="min-w-full divide-y divide-gray-300 overflow-x-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Teacher
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Form 1
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Form 2
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Form 3
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Form 4
                    </th>

                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">academic year</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {props &&
                    Object.values(props.teachersSubjects).map((data, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {data[0].Teacher.name}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                          {data.map((res, kk) => {
                            return (
                              <span key={kk}>
                                {res.Subject.name} <br />
                              </span>
                            );
                          })}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
