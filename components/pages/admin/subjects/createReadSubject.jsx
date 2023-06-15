import React from "react";
import CreateSubject from "./forms/create.forms";
import ViewSubjects from "./forms/read.forms";

export default function ListSubjectsAndCreate(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 space-x-4">
      <ViewSubjects subjects={props && props.subjects} delete={props && props.delete}/>
      <CreateSubject create={props && props.create} />
    </div>
  );
}
