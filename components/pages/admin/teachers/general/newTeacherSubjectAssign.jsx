/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { withRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TeacherSubjectAssignSchema } from "../../../../../services/schema/teacherSchema";
//STORES , COMPONETS AND FROMS
// import { UserRegistrationSchema } from "../../../../services/schema/user.schema";
//INITIALISE
export default class AssignTeacherSubject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOkay = (data) => {
    this.props.create(data);
    this.setState({ open: false });
  };
  //Render
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            type="button"
            onClick={this.handleOpen}
            className="inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 capitalize"
          >
            New
          </button>
          <Transition.Root show={this.state.open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
                      <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                          onClick={this.handleClose}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ShieldCheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                                </div> */}
                        <div className="mt-3 text-center sm:mt-0  sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 capitalize"
                          >
                            New Subject Assign
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              {/* help text  */}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Formik
                          initialValues={{
                            teacherId: "",
                            subjectId: "",
                            term: "",
                            academicYear: "",
                            form: "",
                          }}
                          validationSchema={TeacherSubjectAssignSchema()}
                          onSubmit={(formData, { resetForm }) => {
                            var data = Object.assign({}, formData);

                            this.handleOkay(data);
                            resetForm({ values: "" });
                            this.setState({ open: false });
                          }}
                        >
                          {({ touched, errors, isSubmitting, values }) => {
                            return (
                              <>
                                <Form>
                                  <div className="space-y-4 ">
                                    <div>
                                      <div className="grid grid-cols-6 gap-2">
                                        <div className="col-span-6 sm:col-span-3">
                                          <label
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                            htmlFor="email"
                                          >
                                            teacher
                                          </label>
                                          <Field
                                            as="select"
                                            name="teacherId"
                                            className={`mt-2  
                                                                        block
                                                                        shadow-sm
                                                                        w-full
                                                                        sm:text-sm
                                                                        bg-gray-100
                                                                        p-2
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.teacherId &&
                                                                          errors.teacherId
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                                        }`}
                                          >
                                            <option></option>
                                            { this.props && this.props.teachers.map((teacher, i) => {
                                              return (
                                                <option value={teacher.uuid} key={i}>
                                                  {teacher.name}
                                                </option>
                                              );
                                            })}
                                          </Field>
                                          <ErrorMessage
                                            component="span"
                                            name="teacherId"
                                            className="invalid-feedback"
                                          />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                          <label
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                            htmlFor="term"
                                          >
                                            subject
                                          </label>
                                          <Field
                                            as="select"
                                            name="subjectId"
                                            className={`mt-2  
                                                                        block
                                                                        shadow-sm
                                                                        w-full
                                                                        sm:text-sm
                                                                        bg-gray-100
                                                                        p-2
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.subjectId &&
                                                                          errors.subjectId
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                                        }`}
                                          >
                                            <option></option>
                                            { this.props && this.props.subjects.map((subject, i) => {
                                              return (
                                                <option value={subject.uuid} key={i}>
                                                  {subject.name}
                                                </option> 
                                              );
                                            })}
                                          </Field>
                                          <ErrorMessage
                                            component="span"
                                            name="subjectId"
                                            className="invalid-feedback"
                                          />
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-6 gap-2">
                                        <div className="col-span-6 sm:col-span-3">
                                          <label
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                            htmlFor="form"
                                          >
                                            {" "}
                                            Form
                                          </label>
                                          <Field
                                            as="select"
                                            name="form"
                                            className={`mt-2  
                                                                        block
                                                                        shadow-sm
                                                                        w-full
                                                                        sm:text-sm
                                                                        bg-gray-100
                                                                        p-2
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.form &&
                                                                          errors.form
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                                        }`}
                                          >
                                            <option></option>
                                            {[
                                              {
                                                form: "form 1",
                                                id: 1,
                                              },
                                              {
                                                form: "form 2",
                                                id: 2,
                                              },
                                              {
                                                form: "form 3",
                                                id: 3,
                                              },
                                              {
                                                form: "form 4",
                                                id: 4,
                                              },
                                            ].map((form, i) => {
                                              return (
                                                <option value={form.id} key={i}>
                                                  {form.form}
                                                </option>
                                              );
                                            })}
                                          </Field>
                                          <ErrorMessage
                                            component="span"
                                            name="form"
                                            className="invalid-feedback"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                          <label
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                            htmlFor="email"
                                          >
                                            academic year
                                          </label>
                                          <Field
                                            as="select"
                                            name="academicYear"
                                            className={`mt-2  
                                                                        block
                                                                        shadow-sm
                                                                        w-full
                                                                        sm:text-sm
                                                                         bg-gray-100
                                                                         p-2
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.academicYear &&
                                                                          errors.academicYear
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                                        }`}
                                          >
                                            <option></option>
                                            {this.props && this.props.academicYears.map((academicYear, i) => {
                                              return (
                                                <option value={academicYear.uuid} key={i}>
                                                  {academicYear.academicYear}{" - "}term{" "}{academicYear.term}
                                                </option>
                                              );
                                            })}
                                          </Field>
                                          <ErrorMessage
                                            component="span"
                                            name="academicYear"
                                            className="invalid-feedback"
                                          />
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-6 gap-2">
                                        <div className="col-span-6 sm:col-span-3">
                                          <label
                                            className="block text-sm font-medium text-gray-700 capitalize"
                                            htmlFor="term"
                                          >
                                            {" "}
                                            term
                                          </label>
                                          <Field
                                            as="select"
                                            name="term"
                                            className={`mt-2  
                                                                        block
                                                                        shadow-sm
                                                                        w-full
                                                                        sm:text-sm
                                                                         bg-gray-100
                                                                         p-2
                                                                        border-gray-300
                                                                        rounded-md
                                                                        ${
                                                                          touched.term &&
                                                                          errors.term
                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                                        }`}
                                          >
                                            <option></option>
                                            {[
                                              {
                                                term: "Term 1",
                                                id: 1,
                                              },
                                              {
                                                term: "term 2",
                                                id: 2,
                                              },
                                              {
                                                term: "term 3",
                                                id: 3,
                                              },
                                            ].map((term, i) => {
                                              return (
                                                <option value={term.id} key={i}>
                                                  {term.term}
                                                </option>
                                              );
                                            })}
                                          </Field>
                                          <ErrorMessage
                                            component="span"
                                            name="term"
                                            className="invalid-feedback"
                                          />
                                        </div>
                                      </div>
                                     
                                    </div>
                                  </div>
                                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                      type="submit"
                                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"
                                    >
                                      Assign
                                    </button>
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm capitalize"
                                      onClick={this.handleClose}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Form>
                              </>
                            );
                          }}
                        </Formik>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </React.Fragment>
    );
  }
}
