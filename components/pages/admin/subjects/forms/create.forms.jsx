import { Formik, Form, Field, ErrorMessage } from "formik";
import { CreateSubjectSchema } from "../../../../../services/schema/subjectChema";

export default function CreateSubject(props) {


  const handleOkay = (data) => {
    
    props.create(data)
    // console.log(data);
  }
  return (
    <div className="p-4 sm:px-6 lg:px-8 bg-white">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">New Subject</h1>
          <p className="mt-2 text-sm text-gray-700">
            Add new subject
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="sr-only inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <Formik
                initialValues={{
                  name: "",
                  code: "",
                }}
                validationSchema={CreateSubjectSchema()}
                onSubmit={(formData, { resetForm }) => {
                  var data = Object.assign({}, formData)

                  handleOkay(data)
                  resetForm({ values: '' });

                }}
              >
                {({ touched, errors, isSubmitting, values }) => {
                  return <>
                    <Form>
                      <div className="">

                        <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">

                          <div className="sm:col-span-12 pr-4 pl-4 mt-3">
                            <label
                              className="block text-sm font-medium text-gray-700 capitalize" htmlFor="code">  code<span className="text-red-600">*</span>
                            </label>
                            <div className="">
                              <Field
                                placeholder="subject code e.g 'mat' for mathematics"
                                type="text"
                                name="code"
                                className={` 
                                                                                        block
                                                                                        w-full
                                                                                        shadow-sm
                                                                                        sm:text-sm
                                                                                        border-gray-300
                                                                                        rounded-md
                                                                                        p-2
                                                                                        bg-gray-100
                                                                                        ${touched.code && errors.code ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                              />
                              <ErrorMessage
                                component="span"
                                name="code"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                      <div>

                        <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">


                          <div className="col-span-6 sm:col-span-12 pr-4 pl-4">
                            <label
                              className="p-2 block text-sm font-medium text-gray-700 capitalize" htmlFor="name">  name<span className="text-red-600">*</span>
                            </label>
                            <div className="">
                              <Field
                                placeholder="subject name"
                                type="text"
                                name="name"
                                className={` 
                                                                        block
                                                                        shadow-sm
                                                                        w-full
                                                                        sm:text-sm
                                                                        border-gray-300
                                                                        rounded-md
                                                                        p-2
                                                                        bg-gray-100
                                                                        ${touched.name && errors.name ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                              />
                              <ErrorMessage
                                component="span"
                                name="name"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="p-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"

                        >
                          Submit
                        </button>

                      </div>
                    </Form>
                  </>;
                }
                }
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
