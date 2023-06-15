import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { TeacherSchema } from "../../../../../services/schema/teacherSchema";
import ReadStudentsSubject from "./readStudentsSubject";

export default class GradesEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      academicYear: "",
      form: 0,
      subjectId: "",
      open: false,
    };
  }
  componentDidMount() {}

  setAcademicYear = (e) => {
    if (e.target.value == "" || e.target.value == undefined) {
    } else {
      this.setState({
        academicYear: e.target.value,
      });
    }
  };
  setSubject = (e) => {
    if (e.target.value == "" || e.target.value == undefined) {
    } else {
      this.setState({
        subjectId: e.target.value,
      });
    }
  };
  setForm = (e) => {
    if (e.target.value == "" || e.target.value == undefined) {
    } else {
      this.setState({
        form: e.target.value,
      });
    }
  };
  loadData = () => {
    if (this.state.form == "" || this.state.form == undefined) {
    } else {
      if (
        this.state.academicYear == "" ||
        this.state.academicYear == undefined
      ) {
      } else {
        if (this.state.subjectId == "" || this.state.subjectId == undefined) {
        } else {
          let data = {
            subjectId: this.state.subjectId,
            form: parseInt(this.state.form),
            academicYear: this.state.academicYear,
          };
          this.props.getTheStudentsPerSubject(data);
        }
      }
    }
  };

  render() {
    return (
      <>
        <div className="bg-white/70 p-1 shadow sm:rounded-lg sm:p-2">
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div className="mt-3 flex lg:flex-col flex-col sm:ml-4 sm:mt-0 gap-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Grades Entry Point
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  <strong>Please note</strong>, if the grade is already given to
                  the student, it will be updated to the current value if new
                  grade is assigned!
                </p>
              </div>

              <div className="mt-3 flex lg:flex-col flex-col sm:ml-4 sm:mt-0 gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-1">
                  <div className="">
                    <select
                      onChange={this.setSubject}
                      id="location"
                      name="location"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue="Canada"
                    >
                      <option>--subject--</option>
                      {this.props &&
                        this.props.subjects.map((teacher, i) => {
                          return (
                            <option value={teacher.uuid} key={i}>
                              {teacher.name}
                            </option>
                          );
                        })}
                    </select>
                    <select
                      onChange={this.setAcademicYear}
                      id="location"
                      name="location"
                      className="inline-flex items-center mt-2 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue="Canada"
                    >
                      <option>--academic year--</option>
                      {this.props &&
                        this.props.academicYears.map((academicYear, i) => {
                          return (
                            <option value={academicYear.uuid} key={i}>
                              {academicYear.academicYear}
                              {" - "}term {academicYear.term}
                            </option>
                          );
                        })}
                    </select>
                    <select
                      onChange={this.setForm}
                      id="location"
                      name="location"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue="Canada"
                    >
                      <option>--form--</option>
                      {[
                        {
                          form: 1,
                        },
                        {
                          form: 2,
                        },
                        {
                          form: 3,
                        },
                        {
                          form: 4,
                        },
                      ].map((form, i) => {
                        return (
                          <option value={form.form} key={i}>
                            Form {form.form}
                          </option>
                        );
                      })}
                    </select>
                    <button
                      onClick={this.loadData}
                      type="button"
                      className="mt-2 inline-flex items-center rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Load
                    </button>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </>
    );
  }
}
