import printToPDF from "../../../../../../services/downloadPdf";
import ReleaseExamination from "../../../examinations/manage/releaseExam";
import cookie from "js-cookie";
export default function GradeEntryStatistics(props) {
  const gradesStats = (subj, grades) => {
    let formOne = [];
    let formTwo = [];
    let formThree = [];
    let formFour = [];

    if (grades == undefined || grades == null) {
    } else {
      if (grades.length > 0) {
        grades.map((grade) => {
          if (grade.Subject.uuid == subj.uuid) {
            if (grade.form == 1) {
              formOne.push({
                grade: grade.value,
              });
            } else if (grade.form == 2) {
              formTwo.push({
                grade: grade.value,
              });
            } else if (grade.form == 3) {
              formThree.push({
                grade: grade.value,
              });
            } else if (grade.form == 4) {
              formFour.push({
                grade: grade.value,
              });
            } else {
            }
          }
        });
      }
    }

    return {
      formOne: formOne.length,
      formTwo: formTwo.length,
      formThree: formThree.length,
      formFour: formFour.length,
    };
  };
  const subjectsAssignedPerAcademicYear = (subj, subjects) => {
    let formOne = [];
    let formTwo = [];
    let formThree = [];
    let formFour = [];

    if (subjects == undefined || subjects == null) {
    } else {
      if (subjects.length > 0) {
        subjects.map((subject) => {
          if (subject?.Subject?.uuid == subj.uuid) {
            if (subject.form == 1) {
              formOne.push({
                subject: subject?.value,
              });
            } else if (subject?.form == 2) {
              formTwo.push({
                subject: subject?.value,
              });
            } else if (subject?.form == 3) {
              formThree.push({
                subject: subject?.value,
              });
            } else if (subject?.form == 4) {
              formFour.push({
                subject: subject?.value,
              });
            } else {
            }
          }
        });
      }
    }

    return {
      formOne: formOne.length,
      formTwo: formTwo.length,
      formThree: formThree.length,
      formFour: formFour.length,
    };
  };

  const percentage = (gradesEntered, numberOfStudents) => {
    // let percent = (gradesEntered / numberOfStudents);
    if (gradesEntered == 0 && numberOfStudents == 0) {
      return "NS";
    } else {
      return Math.round((gradesEntered / numberOfStudents) * 100) + "%";
    }
  };
  const printPDF = () => {
    printToPDF("downloadPdf", "Report on grades entered");
  };

  return (
    <div>
      <div className="sm:flex sm:items-center mt-2 p-2">
        <div className="sm:flex-auto">
          <p className="mt-2 text-md text-gray-700">
            Grades entered in percentage for{" "}
            {cookie.get("CAY") &&
              JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.academicYear}{" "}
            Term -{" "}
            {cookie.get("CAY") &&
              JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.term}{" "}
            academic year
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-2">
          <ReleaseExamination
            academicYearId={props?.academicYearId}
            releaseExam={props?.releaseExam}
          />

          <button
            onClick={printPDF}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
          >
            Print
          </button>
        </div>
      </div>
      <dl
        id="downloadPdf"
        className="mt-2 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-4 p-2"
      >
        {typeof props?.subjects=="function"?"":
          props?.subjects?.map((subject, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-base font-medium text-gray-600">
                {subject.name}
              </dt>
              <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-500 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="">
                  Form 1 :{" "}
                  {gradesStats(subject, props?.allGradesPerAcademicYear)?.formOne}{" "}
                  /
                  {
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formOne
                  }{" "}
                  &rarr;
                  {percentage(
                    gradesStats(subject, props?.allGradesPerAcademicYear)
                      .formOne,
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formOne
                  )}
                </div>
                <div className="">
                  Form 2 :{" "}
                  {gradesStats(subject, props?.allGradesPerAcademicYear)?.formTwo}{" "}
                  /
                  {
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formTwo
                  }
                  &rarr;
                  {percentage(
                    gradesStats(subject, props?.allGradesPerAcademicYear)
                      .formTwo,
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formTwo
                  )}
                </div>
                <div className="">
                  Form 3 :{" "}
                  {
                    gradesStats(subject, props?.allGradesPerAcademicYear)
                      .formThree
                  }{" "}
                  /
                  {
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formThree
                  }
                  &rarr;
                  {percentage(
                    gradesStats(subject, props?.allGradesPerAcademicYear)
                      .formThree,
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formThree
                  )}
                </div>
                <div className="">
                  Form 4 :{" "}
                  {
                    gradesStats(subject, props?.allGradesPerAcademicYear)
                      .formFour
                  }{" "}
                  /
                  {
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formFour
                  }
                  &rarr;
                  {percentage(
                    gradesStats(subject, props?.allGradesPerAcademicYear)
                      .formFour,
                    subjectsAssignedPerAcademicYear(
                      subject,
                      props?.studentsSubjectsAssigned
                    ).formFour
                  )}
                </div>
              </dd>
            </div>
          ))}
      </dl>
    </div>
  );
}
