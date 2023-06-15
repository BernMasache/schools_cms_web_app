import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { TeacherSchema } from "../../../../../services/schema/teacherSchema";
import GradesEntryForm from "./gradesEntryForm";
import ReadStudentsSubjectList from "./readStudentsSubject";

export default class GradesEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="mt-5 md:col-span-6 md:mt-0">
          {/* <GradesEntryForm
                academicYears={this.props.academicYears}
                subjects={this.props.subjects}
                getTheStudentsPerSubject={this.props.getTheStudentsPerSubject}
              /> */}

          <ReadStudentsSubjectList
            getTheStudentsPerSubject={this.props.getTheStudentsPerSubject}
            academicYears={this.props.academicYears}
            subjects={this.props.subjects}
            studentsPresent={this.props.studentsPresent}
            createGrade={this.props.createGrade}
          />
        </div>
      </>
    );
  }
}
