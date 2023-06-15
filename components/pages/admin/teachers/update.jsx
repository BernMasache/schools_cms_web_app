/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//STORES , COMPONETS AND FROMS
import { TeacherSchema } from "../../../../services/schema/teacherSchema";
import useCrypto from "../../../../services/cryptoJs";

const crypto = new useCrypto();

export default class UpdateTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [true, false],
      teacher: {
        name: "",
        sex: "",
        phone: "",
        uuid: "",
        roleId: "",
      },
    };
  }
  componentDidMount() {
  }

 
  handleUpdate = (data) => {
    this.props.update(data);
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-1 md:gap-6">
                        <div className="md:col-span-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Teacher Information</h3>
                            <p className="mt-1 text-sm text-gray-500">Please provide valid information that represent the teacher</p>
                        </div>
                        <div className="mt-5 md:col-span-6 md:mt-0">
                        <Formik
          initialValues={{
            name:
              this.props.teacher && this.props.teacher.data == undefined
                ? ""
                : crypto.decrypt(this.props.teacher.data).name,
            phone:
              this.props.teacher && this.props.teacher.data == undefined
                ? ""
                : crypto.decrypt(this.props.teacher.data).phone,
            sex:
              this.props.teacher && this.props.teacher.data == undefined
                ? ""
                : crypto.decrypt(this.props.teacher.data).sex,
          }}
          validationSchema={TeacherSchema()}
          onSubmit={(formData, { resetForm }) => {
            var data = Object.assign({}, formData);
            //
            data.id = this.props.teacher && this.props.teacher.data == undefined
            ? ""
            : crypto.decrypt(this.props.teacher.data).uuid;
            //
            this.handleUpdate(data);
            //resetForm({ values: '' });
          }}
        >
          {({ touched, errors, isSubmitting, values }) => (
            <Form>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 capitalize"
                    htmlFor="name"
                  >
                    name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className={`mt-2  p-2 bg-gray-100
                                                        block
                                                        w-full
                                                        shadow-sm
                                                        sm:text-sm
                                                        border-gray-300
                                                        rounded-md
                                                        
                                                        ${
                                                          touched.name &&
                                                          errors.name
                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                        }`}
                  />
                  <ErrorMessage
                    component="span"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 capitalize"
                    htmlFor="email"
                  >
                    Sex
                  </label>
                  <Field
                    as="select"
                    type="text"
                    name="sex"
                    // defaultValue={values.sex}
                    className={`mt-2  p-2 bg-gray-100
                                                        block
                                                        w-full
                                                        shadow-sm
                                                        sm:text-sm
                                                        border-gray-300
                                                        rounded-md
                                                        ${
                                                          touched.email &&
                                                          errors.email
                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                        }`}
                  >
                    {[
                      { id: "m", name: "male" },
                      { id: "f", name: "female" },
                    ].map((sex, key) => {
                      return (
                        <option value={sex.name} key={key}>
                          {sex.name}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 capitalize"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    className={`mt-2 p-2 bg-gray-100
                                                        block
                                                        w-full
                                                        shadow-sm
                                                        sm:text-sm
                                                        border-gray-300
                                                        rounded-md
                                                        ${
                                                          touched.phone &&
                                                          errors.phone
                                                            ? "is-invalid  focus:ring-red-500 focus:border-red-500 "
                                                            : "focus:ring-primary-500 focus:border-primary-500"
                                                        }`}
                  />
                  <ErrorMessage
                    component="span"
                    name="phone"
                    className="invalid-feedback"
                  />
                </div>

                <div className="flex justify-end ">
                  <button
                    type="submit"
                    className="capitalize ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Update
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
                        </div>
                    </div>
                </div>
       
      </React.Fragment>
    );
  }
}
