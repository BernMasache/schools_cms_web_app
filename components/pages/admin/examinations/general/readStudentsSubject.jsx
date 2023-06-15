import { useState } from "react";
import printToPDF from "../../../../../services/downloadPdf";

export default function ReadStudentsSubjectList(props) {
  const [formClass, setTheForm] = useState(0);
  const [subject, setTheSubject] = useState("");
  const [academic, setTheAcademicYear] = useState("");

  const setAcademicYear = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value == ""
    ) {
    } else {
      setTheAcademicYear(e.target.value);
      getRecords(formClass, subject, e.target.value);
    }
  };
  const setSubject = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value == ""
    ) {
    } else {
      setTheSubject(e.target.value);
      getRecords(formClass, e.target.value, academic);
    }
  };
  const setForm = (e) => {
    if (
      e.target.value == null ||
      e.target.value == undefined ||
      e.target.value == ""
    ) {
    } else {
      setTheForm(e.target.value);
      getRecords(e.target.value, subject, academic);
    }
  };

  const getRecords = (f, s, a) => {
    if (
      f == null ||
      f == undefined ||
      f == 0 ||
      f == "" ||
      s == null ||
      s == undefined ||
      s == "" ||
      a == null ||
      a == undefined ||
      a == ""
    ) {
    } else {
      props.getTheStudentsPerSubject({
        form: f,
        subjectId: s,
        academicYear: a,
      });
    }
  };
  const createGrade = (e) => {
    let body = {
      studentId: JSON.parse(e.target.name)?.studentId,
      subjectId: subject,
      form: JSON.parse(e.target.name)?.form,
      term: JSON.parse(e.target.name)?.term,
      academicYear: JSON.parse(e.target.name)?.academicYear,
      value: e.target.value,
    };
    setTimeout(() => {
      props.createGrade(body);
    }, 500);
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-4 sm:mt-0 sm:flex-none space-x-2">
          <div className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
            <div>
              <select
                onChange={setAcademicYear}
                id="location"
                name="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="Canada"
              >
                <option value="">--academic year--</option>
                {typeof props?.academicYears=="object"?
                  props?.academicYears?.map((academicYear, key) => (
                    <option key={key} value={academicYear?.uuid}>
                      {academicYear?.academicYear} - term {academicYear?.term}
                    </option>
                  )):""}
              </select>
            </div>
          </div>
          <div className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
            <select
              onChange={setSubject}
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Canada"
            >
              <option value="">--subject--</option>
              {typeof props?.subjects=="object"?
                props?.subjects.map((subject, key) => (
                  <option key={key} value={subject?.uuid}>
                    {subject?.name}
                  </option>
                )):""}
            </select>
          </div>
          <div className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
            <div>
              <select
                onChange={setForm}
                id="location"
                name="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="Canada"
              >
                <option value={0}>--form--</option>
                {[{ form: 1 }, { form: 2 }, { form: 3 }, { form: 4 }].map(
                  (form, key) => (
                    <option key={key} value={form?.form}>
                      Form {form?.form}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
                      Code
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {typeof props?.studentsPresent == "function"
                    ? ""
                    : props?.studentsPresent?.map((data, key) => (
                        <tr key={key}>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                            {data?.Student?.code}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {data?.Student?.name}
                          </td>

                          <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <input
                            min={0}
                            max={100}
                              name={JSON.stringify({
                                studentId: data?.Student?.code,
                                term: data?.term,
                                form: data?.form,
                                academicYear: data?.academicYear,
                              })}
                              onChange={createGrade}
                              type="number"
                              className="p-1 bg-gray-200 rounded-md"
                            />
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
