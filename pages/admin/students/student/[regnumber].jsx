import React from "react";
import Router, { useRouter, withRouter } from "next/router";
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
import AdminLayout from "../../../../components/layouts/admin.layout";
import StudentStore from "../../../../services/store/student.store";
import useCrypto from "../../../../services/cryptoJs";
import StudentProfile from "../../../../components/pages/admin/students/general/profile";
import ResetStudentPassword from "../../../../components/pages/admin/students/general/resetPassword";
import DeleteStudent from "../../../../components/pages/admin/students/general/delete";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import DeleteStudentSubject from "../../../../components/pages/admin/students/general/confirmDeleteStudentSubject";
// instances
//PAGE
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const studentStore = new StudentStore();
const crypto = new useCrypto();

const GetStudentUrlData = () => {
  const data = useRouter()?.query?.data;
  return (
    <div className="">
      <StudentProfile student={crypto.decrypt(data)} />
    </div>
  );
};
const ResetPassword = () => {
  const data = useRouter()?.query?.data;
  const resetPassword = (id) => {
    studentStore
      .resetStudentPassword(id)
      .then((resp) => {
        console.log(resp);

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
      });
  };
  const deleteStudent = (id) => {
    studentStore
      .delete(id)
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
          setTimeout(() => {
            Router.push("/admin/students");
          }, 3000);
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
      });
  };

  return (
    <div className="flex flex-row justify-start space-x-4">
      <ResetStudentPassword
        studentId={crypto.decrypt(data)?.uuid}
        resetPassword={resetPassword}
      />
      <DeleteStudent
        deleteStudent={deleteStudent}
        studentId={crypto.decrypt(data)?.uuid}
      />
    </div>
  );
};
const StudentSubjectDetails = () => {
  const router = useRouter();
  const [studentSubjects, setStudentSubjects] = useState([]);
  const currentAY = () => {
    if (
      Cookies.get("CAY") == null ||
      Cookies.get("CAY") == undefined ||
      Cookies.get("CAY") == ""
    ) {
      return undefined;
    } else {
      return JSON.parse(Cookies.get("CAY"));
    }
  };
  const allStudentSubjects = () => {
    let student = crypto.decrypt(router?.query?.data);
    let acy = currentAY();
    let data = {
      academicYear: acy[0]?.uuid,
      studentId: student?.uuid,
    };
    if (data?.studentId == undefined) {
    } else {
      studentStore
        .allStudentSubjects(data)
        .then((result) => {
          if (result?.data?.length > 0) {
            setStudentSubjects(result?.data);
          }
        })
        .catch((e) => {})
        .finally(() => {});
    }
  };
  useEffect(() => {
    allStudentSubjects();
  });
  const deleteStudentSubject = (id) => {
    studentStore
      .deleteStudentSubject(id)
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
          allStudentSubjects();
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
      });
  };
  return (
    <div className="flex flex-row justify-start space-x-4">
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="mb-4 text-gray-600">
              <span>Student subject(s) this term</span>
            </div>
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
                      Subject
                    </th>

                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {studentSubjects &&
                    studentSubjects?.map((subjects, key) => {
                      return (
                        <tr key={key}>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                            {subjects?.Subject?.name}
                          </td>

                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            <DeleteStudentSubject
                              studentSubjectId={subjects?.uuid}
                              deleteStudentSubject={deleteStudentSubject}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      students: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      tabs: [{ name: "General" }, { name: "Security" }],
    };
  }

  componentDidMount() {}

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
                Student Profile
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
                      <GetStudentUrlData />
                      <StudentSubjectDetails />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2">
                      <div className="">
                        <div className="p-2 mt-8 mb-4">
                          Warning. This operation cannot be undone.
                        </div>
                        <div className="">
                          <ResetPassword />
                        </div>
                      </div>
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
