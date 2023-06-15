import React from 'react';

import { Formik, Form, Field, ErrorMessage } from "formik";
import { StudentSchema } from '../../../../services/schema/studentSchema';

export default class CreateStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

    }

    handleOkay = (data) => {
        this.props.create(data)
    }

    render() {

        return (
            <>

                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Student Information</h3>
                            <p className="mt-1 text-sm text-gray-500">Please provide valid information that represent the student</p>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <Formik
                                initialValues={{
                                    name: "",
                                    dob: "",
                                    sex: "",
                                    phone: "",
                                    form: "",
                                    code: "",
                                    year: ""
                                }}
                                validationSchema={StudentSchema()}
                                onSubmit={(formData, { resetForm }) => {
                                    var data = Object.assign({}, formData)

                                    let dataLayout = {
                                        name: data.name,
                                        dob: data.dob,
                                        code: data.code,
                                        sex: data.sex,
                                        formEnrolled: data.form,
                                        phone: data.phone,
                                        currentYear: data.year
                                    }
                                    this.handleOkay(dataLayout)
                                    resetForm({ values: '' });
                                }}
                            >
                                {({ touched, errors, isSubmitting, values }) => {
                                    return <>
                                        <Form>
                                            <div >

                                                <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 capitalize">
                                                            Full name
                                                            <span className="text-red-600 p-1">*</span>
                                                        </label>
                                                        <div className="mt-1">
                                                            <Field
                                                                type="text"
                                                                name="name"
                                                                placeholder="full name"
                                                                className={`  bg-gray-100
                                                                w-full rounded-md border-gray-600 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                                ${touched.name && errors.name ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                                            />
                                                            <ErrorMessage
                                                                component="span"
                                                                name="name"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="location">
                                                            Code
                                                            <span className="text-red-600 p-1">*</span>
                                                        </label>
                                                        <div className="mt-1">
                                                            <Field
                                                                type="text"
                                                                placeholder="code"
                                                                name="code"
                                                                className={` bg-gray-100
                                                                w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
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

                                                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="Milking_start">
                                                            Dob
                                                            <span className="text-red-600 p-1">*</span>
                                                        </label>
                                                        <div className="mt-1">
                                                            <Field
                                                                type="date"
                                                                name="dob"

                                                                className={`  bg-gray-100
                                                                w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                    ${touched.dob && errors.dob ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                                            />
                                                            <ErrorMessage
                                                                component="span"
                                                                name="dob"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="Milking_end">
                                                            phone
                                                        </label>
                                                        <div className="mt-1">
                                                            <Field
                                                                type="text"
                                                                name="phone"
                                                                placeholder="phone"
                                                                className={` bg-gray-100
                                                                w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                            ${touched.Milking_end && errors.Milking_end ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}
                                                            />
                                                            <ErrorMessage
                                                                component="span"
                                                                name="phone"
                                                                className="invalid-feedback"
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div >

                                                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                                                    <div className="sm:col-span-6">
                                                        <label
                                                            className="block text-sm font-medium text-gray-700 capitalize" htmlFor="status">
                                                            Gender
                                                            <span className="text-red-600 p-1">*</span>
                                                        </label>
                                                        <div className="mt-1">
                                                            <Field as="select" type="text" name="sex" className={`
                                                                                        w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                        ${touched.sex && errors.sex ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}>
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
                                                    <div className="sm:col-span-6">

                                                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">

                                                            <div className="sm:col-span-6">

                                                                <label
                                                                    className="block text-sm font-medium text-gray-700 capitalize" htmlFor="user">
                                                                    Form enrolled
                                                                    <span className="text-red-600 p-1">*</span>
                                                                </label>
                                                                <div className="mt-1">
                                                                    <Field as="select" name="form" type="text" className={`  
                                                                                            w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                                                                            ${touched.form && errors.form ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}>
                                                                        <option value={0}>--Form--</option>
                                                                        <option value={1} > Form 1</option>
                                                                        <option value={2}> Form 2</option>
                                                                        <option value={3}> Form 3</option>
                                                                        <option value={4}> Form 4</option>

                                                                    </Field>
                                                                    <ErrorMessage
                                                                        component="span"
                                                                        name="form"
                                                                        className="invalid-feedback"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="sm:col-span-6">

                                                                <label
                                                                    className="block text-sm font-medium text-gray-700 capitalize" htmlFor="year">
                                                                    Current form
                                                                    <span className="text-red-600 p-1">*</span>
                                                                </label>
                                                                <div className="mt-1">
                                                                    <Field as="select" name="year" type="text" className={`  
                                    w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs
                                    ${touched.form && errors.form ? "is-invalid  focus:ring-red-500 focus:border-red-500 " : "focus:ring-orange-500 focus:border-orange-500"}`}>
                                                                        <option value={0}>--Form--</option>
                                                                        <option value={1} > Form 1</option>
                                                                        <option value={2}> Form 2</option>
                                                                        <option value={3}> Form 3</option>
                                                                        <option value={4}> Form 4</option>

                                                                    </Field>
                                                                    <ErrorMessage
                                                                        component="span"
                                                                        name="year"
                                                                        className="invalid-feedback"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm capitalize"
                                                >
                                                    submit
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
            </>
        )
    }
}
