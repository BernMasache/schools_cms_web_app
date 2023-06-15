import React from "react";
import Router, { withRouter } from "next/router";
import { Disclosure, Tab } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import AdminLayout from "../../../components/layouts/admin.layout";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateStudent from "../../../components/pages/admin/students/create.form";
import ViewStudents from "../../../components/pages/admin/students/view.students";
import StudentStore from "../../../services/store/student.store";
import AssignAllStudentSubjects from "../../../components/pages/admin/students/general/assignStudentSubjects";
import SubjectStore from "../../../services/store/subjects.store";
import AcademicYearService from "../../../services/api/academicYear.api";
import Cookies from "js-cookie";
import ManageStudentSubjectsAssignedList from "../../../components/pages/admin/students/general/manageStudentSubjects";
import StudentsDefaultPasswords from "../../../components/pages/admin/students/general/studentsDefaultPasswords";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// instances
const studentStore = new StudentStore();
const subjectStore = new SubjectStore();
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      students: [],
      studentInForm: [],
      studentsDefaultPasswords: [],
      subjects: [],
      subjectsByFormPresent: [],
      academicYears: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      tabs: [
        { name: "All" },
        { name: "Students subjects" },
        { name: "Default Passwords" },
      ],
    };
  }

  componentDidMount() {
    this.getStudents();
    this.getSubjects();
    this.getAcademicYears();
  }

  getStudents = () => {
    studentStore
      .get()
      .then((students) => {
        this.setState({
          students: students,
        });
      })
      .catch((e) => {
        toast.success(e?.message, {
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
      });
  };

  getStudentPresentForm = (form) => {
    if (form == 0 || form) {
    }
    studentStore.getStudentPresentForm(form).then((subjectsByFormPresent) => {
      this.setState({
        subjectsByFormPresent: subjectsByFormPresent,
      });
    });
  };

  getSubjects = () => {
    subjectStore.get().then((subjects) => {
      this.setState({
        subjects: subjects.subjects,
      });
    });
  };

  getStudentSubjects = (data) => {
    studentStore
      .getStudentSubjects(data)
      .then((result) => {})
      .catch((e) => {})
      .finally(() => {});
  };

  getAcademicYears = () => {
    if (Cookies.get("ACYL") == undefined || Cookies.get("ACYL") == null) {
    } else {

      let academicYearsList = JSON.parse(Cookies.get("ACYL"));
     
      this.setState({
        academicYears: academicYearsList,
      });
    }
  };

  create = (data) => {
    studentStore.create(data).then((result) => {
      this.getStudents();
    });
  };
  getStudentsDefaultPasswords = (form) => {
    studentStore.getStudentsDefaultPasswords(form).then((result) => {
      this.setState({
        studentsDefaultPasswords: result,
      });
    });
  };

  assignStudentSubjects = (data) => {
   
    studentStore.assignStudentSubjects(data).then((resp) => {
    
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
    }).catch(e=>{
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
    }).finally(()=>{

    });
  };

  resetPassword = (data) => {
    if (data == null || data == undefined || data == "") {
      toast.error("Error ocurred", {
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
      studentStore
        .resetStudentPassword(data)
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
    }
  };
  render() {
    return (
      <>
        {/* <LoadingWidget loading={this.state.loading} /> */}
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div>
            {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
          </div>
          <div className=" py-2  md:flex md:items-center md:justify-between">
            <div className="px-4 sm:px-6 md:px-0"></div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Students Management
              </button>
            </div>
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
                    <div className="align-middle inline-block min-w-full min-h-full">
                      <div className="mx-auto max-w-7xl px-2 py-2 sm:py-2 lg:px-4 lg:py-2">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                          <dl className="mt-2 space-y-2 divide-y divide-gray-900/10">
                            <Disclosure as="div" className="pt-2">
                              {({ open }) => (
                                <>
                                  <dt>
                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                      <span className="text-base font-semibold leading-7">
                                        New student
                                      </span>
                                      <span className="ml-6 flex h-7 items-center">
                                        {open ? (
                                          <MinusSmallIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <PlusSmallIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                          />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </dt>
                                  <Disclosure.Panel
                                    as="dd"
                                    className="mt-2 pr-12"
                                  >
                                    {typeof this.state.students == "object" ? (
                                      <CreateStudent create={this.create} />
                                    ) : (
                                      Router.push("/signin")
                                    )}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </dl>
                        </div>
                      </div>
                      <div className="m-2" />
                      {typeof this.state.students == "object" ? (
                        <ViewStudents students={this.state.students} />
                      ) : (
                        ""
                      )}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols21 lg:grid-cols-2 space-x-4 p-2">
                        {typeof this.state.students == "object" ? (
                          <AssignAllStudentSubjects
                            subjectsByFormPresent={
                              this.state.subjectsByFormPresent
                            }
                            assignStudentSubjects={this.assignStudentSubjects}
                            subjects={this.state.subjects}
                            academicYears={this.state.academicYears}
                            getStudentPresentForm={this.getStudentPresentForm}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </Tab.Panel>
                  {/* <Tab.Panel>
                    <div className="">
                      {typeof this.state.students == "object" ? (
                        <ManageStudentSubjectsAssignedList
                          academicYears={this.state.academicYears}
                          getStudentSubjects={this.getStudentSubjects}
                          students={this.state.studentInForm}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </Tab.Panel> */}
                  <Tab.Panel>
                    {typeof this.state.students == "object" ? (
                      <StudentsDefaultPasswords
                        resetPassword={this.resetPassword}
                        getStudentsDefaultPasswords={
                          this.getStudentsDefaultPasswords
                        }
                        studentsDefaultPasswords={
                          this.state.studentsDefaultPasswords
                        }
                      />
                    ) : (
                      ""
                    )}
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
