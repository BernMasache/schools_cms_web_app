/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//STORES , COMPONETS AND FROMS
// import { RemoveHerdSchema } from "../../../../services/schema/herd.schema";
import { RemoveTeacherSchema } from "../../../../../services/schema/teacherSchema";

class DeleteAcademicYear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      academicYearId: undefined,
    };
  }
  componentDidMount() {}

  handleOpen = () => {
    if (this.props.academicYearId !== undefined) {
      this.setState({
        academicYearId: this.props.academicYearId,
        open: true,
      });
    } else {
      toast.error("Error occurred", {
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
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOkay = (id) => {
    this.setState({ open: false });
    this.props.delete(id);
  };
  render() {
    return (
      <React.Fragment>
        <div className="">
          <button
            onClick={this.handleOpen}
            className="capitalize inline-flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
        <Transition.Root show={this.state.open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {}}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <Formik
                      initialValues={{
                        code: Math.floor(
                          1000 + Math.random() * 9999
                        ).toString(),
                        confirmCode: "",
                      }}
                      validationSchema={RemoveTeacherSchema()}
                      onSubmit={(formData, { resetForm }) => {
                        //var data = Object.assign({}, formData)
                        this.handleOkay(this.props.academicYearId);
                        resetForm({ values: "" });
                      }}
                    >
                      {({ touched, errors, isSubmitting, values }) => {
                        return (
                          <>
                            <Form>
                              <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                  <ExclamationTriangleIcon
                                    className="h-6 w-6 text-red-600"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 capitalize"
                                  >
                                    Delete the academic year
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <h1 className="text-gray-900 mb-2">
                                      Warning
                                    </h1>
                                    <p className="text-gray-600">
                                      This operation will remove associated
                                      records for student, teacher and grades
                                      which were assigned to this academic year.
                                    </p>
                                    <h1 className="text-gray-700 mt-2">
                                      Enter the code below to confirm
                                    </h1>

                                    <p className="text-gray-800 text-bold">
                                      {" "}
                                      &ldquo;{values.code}&rdquo;
                                    </p>
                                  </div>
                                  <div className="mt-5">
                                    <Field
                                      type="text"
                                      name="confirmCode"
                                      className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm
                                                                        ${
                                                                          touched.confirmCode &&
                                                                          touched.confirmCode
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                                        }`}
                                    />
                                    <ErrorMessage
                                      component="span"
                                      name="confirmCode"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className=" sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"
                                  type="submit"
                                >
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  onClick={this.handleClose}
                                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm capitalize"
                                >
                                  Cancel
                                </button>
                              </div>
                            </Form>
                          </>
                        );
                      }}
                    </Formik>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
              <ToastContainer transition={Flip} />
            </div>
          </Dialog>
        </Transition.Root>
      </React.Fragment>
    );
  }
}
export default DeleteAcademicYear;
