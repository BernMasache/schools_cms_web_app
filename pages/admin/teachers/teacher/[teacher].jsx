import { useRouter } from "next/router";
import Router, { withRouter } from "next/router";
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
import useCrypto from "../../../../services/cryptoJs";
import UpdateTeacher from "../../../../components/pages/admin/teachers/update";
import { TeacherSchema } from "../../../../services/schema/teacherSchema";
import DeleteTeacher from "../../../../components/pages/admin/teachers/delete";
import TeacherStore from "../../../../services/store/teacher.store";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import DeleteTeacherSubject from "../../../../components/pages/admin/teachers/general/deleteSubjectTeacherAssigned";
const crypto = new useCrypto();
const teacherStore = new TeacherStore();
function TeacherComponent() {
  const router = useRouter();
  const [subjectsTeacher, setTeacherSubjects] = useState([]);

  const updateTeacher = (data) => {
    teacherStore
      .update(data)
      .then((res) => {
        if (res?.data?.error == false) {
          toast.success(res?.data?.message, {
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
          toast.error(res?.data?.message, {
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
      .catch((error) => {
        toast.error(error.message, {
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

  const deleteTeacher = (id) => {
    teacherStore
      .delete(id)
      .then((res) => {
        if (res?.data?.error == false) {
          toast.success(res?.data?.message, {
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
          Router.push("/admin/teachers");
        } else {
          toast.error(res?.data?.message, {
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
      .catch((error) => {
        toast.error(error.message, {
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

  const subjectsAssigned = () => {
    let teacher = crypto.decrypt(router?.query?.data);
    let acy = currentAY();
    let data = {
      academicYear: acy[0]?.uuid,
      teacher: teacher?.uuid,
    };
    if (data.teacher == undefined) {
    } else {
      teacherStore
        .teacherSubjects(data)
        .then((res) => {
          if (res.length > 0) {
            setTeacherSubjects(res);
          }
        })
        .catch((e) => {})
        .finally(() => {});
    }
  };
  useEffect(() => {
    subjectsAssigned();
    currentAY();
  });

  const deleteTeacherSubject = (id) => {
    teacherStore
      .deleteTeacherSubject(id)
      .then((res) => {
        if (res?.data?.error == false) {
          toast.success(res?.data?.message, {
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
          subjectsAssigned();
        } else {
          toast.error(res?.data?.message, {
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
      .catch((error) => {
        toast.error(error.message, {
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
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="">
          <UpdateTeacher
            teacher={router.query && router.query}
            update={updateTeacher}
          />
        </div>
        <div className="">
          <DeleteTeacher
            teacherId={
              router.query && router.query.data == undefined
                ? ""
                : crypto.decrypt(router.query.data).uuid
            }
            delete={deleteTeacher}
          />
          <div className="">
          <div className="mt-4 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="mb-4 text-gray-600">
                    <span>Your subject(s) in this term</span>
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
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Form
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
                        {subjectsTeacher &&
                          subjectsTeacher?.map((subjects, key) => {
                            return (
                              <tr key={key}>
                                <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                  {subjects?.Subject?.name}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                  Form {subjects?.form}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                  <DeleteTeacherSubject
                                    teacherSubjectId={subjects?.uuid}
                                    deleteTeacherSubject={deleteTeacherSubject}
                                  />
                                  Delete
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
        </div>
      </div>
      <ToastContainer transition={Flip} />
    </div>
  );
}

const PageWithRouter = withRouter(TeacherComponent);
PageWithRouter.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default PageWithRouter;
