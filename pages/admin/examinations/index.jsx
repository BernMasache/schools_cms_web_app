import React from "react";
import Router, { withRouter } from "next/router";
import { Tab } from "@headlessui/react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../../../components/layouts/admin.layout";

import cookie from "js-cookie";
import SubjectStore from "../../../services/store/subjects.store";
import AcademicYearStore from "../../../services/store/academicYear.store";
import StudentStore from "../../../services/store/student.store";
import GradesEntry from "../../../components/pages/admin/examinations/general/gradesEntry";
import GradeStore from "../../../services/store/grade.store";
import GradeEntryStatistics from "../../../components/pages/admin/configurations/examinations/statistics/gradesEntryStatistics";
import StudentSubjectsStore from "../../../services/store/studentSubjects.store";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// inctances
const subjectStore = new SubjectStore();
const academicYearStore = new AcademicYearStore();
const studentStore = new StudentStore();
const gradeStore = new GradeStore();
const studentSubjectsStore = new StudentSubjectsStore();

//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      teachers: [],
      subjects: [],
      studentsPresent: [],
      studentsSubjectsAssigned: [],
      academicYears: [],
      teachersSubjects: [],

      teacherSubjects: [],
      allGradesPerAcademicYear: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      tabs: [
        { name: "Grade Entry" },
        { name: "Grade Management" },
        { name: "Examination Management" },
      ],
    };
  }

  componentDidMount() {
    this.getAcademicYears();
    this.getSubjects();
    this.getAllGradesPerAcademicYear(
      cookie.get("CAY") && JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.uuid
    );
    this.getAllStudentsSubjectsPerAcademicYear(
      cookie.get("CAY") && JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.uuid
    );
  }

  getTheStudentsPerSubject = (data) => {
    studentStore
      .getTheStudentsPerSubject(data)
      .then((resp) => {
        this.setState({
          studentsPresent: resp,
        });
      })
      .catch((e) => {})
      .finally(() => {});
  };

  getSubjects = () => {
    subjectStore.get().then((data) => {
      this.setState({
        subjects: data.subjects,
      });
    });
  };

  getAcademicYears = () => {
    academicYearStore.get().then((data) => {
      this.setState({
        academicYears: data,
      });
    });
  };

  createGrade = (grade) => {
    gradeStore
      .create(grade)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        // console.log("end");
      });
  };
  getAllGradesPerAcademicYear = (academicYear) => {
    if (academicYear == undefined || academicYear == null) {
    } else {
      gradeStore
        .getGradesPerAcademicYearForStatistics(
          // "b9a46225-7af8-4cba-b6ed-e4ccd91b5fe3"
          cookie.get("CAY") &&
            JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.uuid
        )
        .then((resp) => {
          this.setState({
            allGradesPerAcademicYear: resp.gradesStatistics,
          });
        })
        .catch((e) => {})
        .finally(() => {});
    }
  };

  getAllStudentsSubjectsPerAcademicYear = (academicYear) => {
    if (academicYear == undefined || academicYear == null) {
    } else {
      studentSubjectsStore
        .getAllStudentsAssignedSubjectsPerAcademicYear(
          cookie.get("CAY") &&
            JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.uuid
        )
        .then((resp) => {
          this.setState({
            studentsSubjectsAssigned: resp.subjectsAssigned,
          });
        })
        .catch((e) => {})
        .finally(() => {});
    }
  };

  releaseExam = (id) => {
    academicYearStore
      .examRelease(id)
      .then((resp) => {
        if (resp.data.error == true) {
          toast.error(resp?.data?.message, {
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
          toast.success(resp?.data?.message, {
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
      })
      .catch((e) => {
        toast.error(e.message, {
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
      })
      .finally(() => {});
  };

  render() {
    return (
      <>
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div>
            {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
          </div>
          <div className=" py-2  md:flex md:items-center md:justify-between">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-2xl font-extrabold text-gray-900 capitalize">
                Examinations
              </h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"></div>
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-5">
            <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white sm:p-5">
              <Tab.Group>
                <div className="border-b border-gray-200 bg-white">
                  <Tab.List>
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {this.state.tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-primary-500 text-primary-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "group inline-flex items-center py-4 px-1 border-b-2 focus:outline-none"
                            )
                          }
                        >
                          <span className="capitalize  font-medium text-sm">
                            {tab.name}
                          </span>
                        </Tab>
                      ))}
                    </nav>
                  </Tab.List>
                </div>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2">
                      <GradesEntry
                        getTheStudentsPerSubject={this.getTheStudentsPerSubject}
                        academicYears={this.state.academicYears}
                        subjects={this.state.subjects}
                        studentsPresent={this.state.studentsPresent}
                        createGrade={this.createGrade}
                      />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 space-x-4 p-2">
                        <div className=""></div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="">
                      <GradeEntryStatistics
                        allGradesPerAcademicYear={
                          this.state.allGradesPerAcademicYear
                        }
                        releaseExam={this.releaseExam}
                        studentsSubjectsAssigned={
                          this.state.studentsSubjectsAssigned
                        }
                        academicYearId={
                          cookie.get("CAY") &&
                          JSON.parse(cookie.get("CAY"))[0]?.AcademicYear?.uuid
                        }
                        subjects={this.state.subjects}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2"></div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        <ToastContainer transition={Flip} />

        </div>
      </>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default PageWithRouter;
