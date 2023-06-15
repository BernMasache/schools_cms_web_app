import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { TeacherSchema } from "../../../../../services/schema/teacherSchema";

export default class AssignFormTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  handleOkay = (data) => {
    this.props.assignSubject(data);
  };

  render() {
    return (
      <>
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Assign Form Teacher
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please provide valid information that represent the teacher
              </p>
            </div>
            <div className="mt-5 md:col-span-6 md:mt-0">
              <Formik
                initialValues={{
                  name: "",
                  sex: "",
                  phone: "",
                }}
                validationSchema={TeacherSchema()}
                onSubmit={(formData, { resetForm }) => {
                  var data = Object.assign({}, formData);

                  let dataLayout = {
                    name: data.name,
                    sex: data.sex,
                    phone: data.phone,
                  };
                  this.handleOkay(dataLayout);
                  resetForm({ values: "" });
                }}
              >
                {({ touched, errors, isSubmitting, values }) => {
                  return (
                    <>
                      <Form>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-12">
                          <div className="sm:col-span-6">
                            <label
                              className="block text-sm font-medium text-gray-700 capitalize"
                              htmlFor="status"
                            >
                              Teacher
                              <span className="text-red-600 p-1">*</span>
                            </label>
                            <div className="mt-1">
                              <Field
                                as="select"
                                type="text"
                                name="sex"
                                className={`
                                                                                        w-full rounded-md border-gray-300 px-2 py-2 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                        ${
                                                                                          touched.sex &&
                                                                                          errors.sex
                                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                                            : "focus:ring-orange-500 focus:border-orange-500"
                                                                                        }`}
                              >
                                <option value={0}>--sex--</option>
                                <option value={"m"}>Male</option>
                                <option value={"f"}>Female</option>

                                {/* {this.state.herdStatus.map((herdState, i) => {
                                                                                                return <option value={herdState.value} key={i} >{herdState.name}</option>;
                                                                                            })} */}
                              </Field>
                              <ErrorMessage
                                component="span"
                                name="sex"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="col-span-6 sm:col-span-6">
                            <label
                              className="block text-sm font-medium text-gray-700 capitalize"
                              htmlFor="Milking_end"
                            >
                              Form
                            </label>
                            <div className="mt-1">
                              <Field
                                as="select"
                                type="text"
                                name="sex"
                                className={`
                                                                                        w-full rounded-md border-gray-300 px-2 py-2 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                        ${
                                                                                          touched.sex &&
                                                                                          errors.sex
                                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                                            : "focus:ring-orange-500 focus:border-orange-500"
                                                                                        }`}
                              >
                                <option value={0}>--sex--</option>
                                <option value={"m"}>Male</option>
                                <option value={"f"}>Female</option>

                                {/* {this.state.herdStatus.map((herdState, i) => {
                                                                                                return <option value={herdState.value} key={i} >{herdState.name}</option>;
                                                                                            })} */}
                              </Field>
                              <ErrorMessage
                                component="span"
                                name="phone"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-12">
                          <div className="sm:col-span-6">
                            <label
                              className="block text-sm font-medium text-gray-700 capitalize"
                              htmlFor="status"
                            >
                              Academic year
                              <span className="text-red-600 p-1">*</span>
                            </label>
                            <div className="mt-1">
                              <Field
                                as="select"
                                type="text"
                                name="sex"
                                className={`
                                                                                        w-full rounded-md border-gray-300 px-2 py-2 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                        ${
                                                                                          touched.sex &&
                                                                                          errors.sex
                                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                                            : "focus:ring-orange-500 focus:border-orange-500"
                                                                                        }`}
                              >
                                <option value={0}>--sex--</option>
                                <option value={"m"}>Male</option>
                                <option value={"f"}>Female</option>

                                {/* {this.state.herdStatus.map((herdState, i) => {
                                                                                                return <option value={herdState.value} key={i} >{herdState.name}</option>;
                                                                                            })} */}
                              </Field>
                              <ErrorMessage
                                component="span"
                                name="sex"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="col-span-6 sm:col-span-6">
                            <label
                              className="block text-sm font-medium text-gray-700 capitalize"
                              htmlFor="Milking_end"
                            >
                              Term
                            </label>
                            <div className="mt-1">
                              <Field
                                as="select"
                                type="text"
                                name="sex"
                                className={`
                                                                                        w-full rounded-md border-gray-300 px-2 py-2 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                        ${
                                                                                          touched.sex &&
                                                                                          errors.sex
                                                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                                                            : "focus:ring-orange-500 focus:border-orange-500"
                                                                                        }`}
                              >
                                <option value={0}>--sex--</option>
                                <option value={"m"}>Male</option>
                                <option value={"f"}>Female</option>

                                {/* {this.state.herdStatus.map((herdState, i) => {
                                                                                                return <option value={herdState.value} key={i} >{herdState.name}</option>;
                                                                                            })} */}
                              </Field>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"
                          >
                            Assign
                          </button>
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
  }
}
