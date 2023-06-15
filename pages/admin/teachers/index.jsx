import React from "react";
import Router, { withRouter } from "next/router";
import { Tab } from "@headlessui/react";

import AdminLayout from "../../../components/layouts/admin.layout";

import cookie from "js-cookie";
import CreateTeacher from "../../../components/pages/admin/teachers/create.form";
import TeacherStore from "../../../services/store/teacher.store";
import ViewTeachers from "../../../components/pages/admin/teachers/view.teachers";
import AssignTeacherSubjects from "../../../components/pages/admin/teachers/general/assignSubjects";
import AssignFormTeacher from "../../../components/pages/admin/teachers/general/assignFormTeacher";
import Assignteachersubjects from "../../../components/pages/admin/teachers/general/assignSubjects";
import TeacherSubjectsAssignmentList from "../../../components/pages/admin/teachers/general/teacherSubjectsAssigned";
import SubjectStore from "../../../services/store/subjects.store";
import AcademicYearStore from "../../../services/store/academicYear.store";
import Cookies from "js-cookie";
import ManageTeacherSubjectsAssignmentList from "../../../components/pages/admin/teachers/general/manageTeacherSubjects";
import TeacherSubjects from "../../../components/pages/admin/teachers/general/teacherSubjects";
import TeacherSubjectsAssignmentDelete from "../../../components/pages/admin/teachers/general/deleteTeacherSubjet";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// inctances
const teacherStore = new TeacherStore();
const subjectStore = new SubjectStore();
const academicYearStore = new AcademicYearStore();

//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      teachers: [],
      subjects: [],
      academicYears: [],
      teachersSubjects: [],
      teacherSubjects: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      tabs: [
        { name: "All" },
        { name: "Teacher subjects" },
        { name: "Form teachers" },
      ],
    };
  }

  componentDidMount() {
    // let stu = JSON.parse(crypto.decrypt(cookie.get("USER")))
    // stu==null?Router.push("/signin"):""
    // cookie.remove("TOKEN")
    // cookie.remove("USER")
    this.getTeachers();
    this.getAcademicYears();
    this.getSubjects();
    this.getAllTeacherSubjectsByAcademicYear();
    this.getTeacherSubjects();
  }

  getTeachers = () => {
    teacherStore.get().then((data) => {
      this.setState({
        teachers: data,
      });
    });
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

  create = (data) => {
    teacherStore.create(data).then((result) => {
      this.getTeachers();
    });
  };

  assignSubject = (data) => {
    teacherStore.assignTeacherSubject(data).then((result) => {
      this.getAllTeacherSubjectsByAcademicYear();
    });
  };

  getAllTeacherSubjectsByAcademicYear = (id) => {
    if (id == undefined) {
      academicYearStore.get().then((data) => {
        if (data.length > 0) {
          teacherStore
            .getAllTeachersSubjectsByAcademicYear(data[0].uuid)
            .then((result) => {
              this.setState({
                teachersSubjects: result.teachersSubjects.reduce(
                  (group, product) => {
                    group[product.Teacher.name] =
                      group[product.Teacher.name] ?? [];
                    group[product.Teacher.name].push(product);
                    return group;
                  },
                  {}
                ),
              });
            });
        }
      });
    } else {
      teacherStore.getAllTeachersSubjectsByAcademicYear(id).then((result) => {
        this.setState({
          teachersSubjects: result.teachersSubjects.reduce((group, product) => {
            group[product.Teacher.name] = group[product.Teacher.name] ?? [];
            group[product.Teacher.name].push(product);
            return group;
          }, {}),
        });
      });
    }
  };

  getTeacherSubjects = (data) => {
    if (data == undefined) {
    } else {
      teacherStore.getTeacherSubjects(data).then((result) => {
        // console.log(result.teacherSubjects);
        this.setTeacherData(result.teacherSubjects);
        this.setState({
          teacherSubjects: result.teacherSubjects,
        });
      });
    }
  };

  setTeacherData = (data) => {
    return Cookies.set("TSA", JSON.stringify(data));
  };

  deleteTeacherSubject = (id) => {
    if (id == undefined) {
    } else {
      teacherStore
        .deleteTeacherSubject(id)
        .then((result) => {})
        .catch((e) => {})
        .finally((res) => {});
    }
  };
  updateTeacher = (data) => {
    if (data.teacherId == undefined) {
    } else {
      teacherStore
        .updateTeacherSubjects(data)
        .then((result) => {})
        .catch((e) => {})
        .finally((res) => {});
    }
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
                Teachers
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
                      <CreateTeacher create={this.create} />
                    </div>
                    {typeof this.state.teachers == "object" ? (
                      <ViewTeachers teachers={this.state.teachers} />
                    ) : (
                      Router.push("/signin")
                    )}
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 space-x-4 p-2">
                        <div className="">
                          {typeof this.state.teachers == "object" ? (
                            <TeacherSubjectsAssignmentList
                              teacherSubjects={this.teacherSubjects}
                              assignSubject={this.assignSubject}
                              academicYears={this.state.academicYears}
                              subjects={this.state.subjects}
                              teachers={this.state.teachers}
                              teachersSubjects={this.state.teachersSubjects}
                              getTeacherSubjects={this.getTeacherSubjects}
                              getAllTeacherSubjectsByAcademicYear={
                                this.getAllTeacherSubjectsByAcademicYear
                              }
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                 
                  <Tab.Panel>
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2"></div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
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
