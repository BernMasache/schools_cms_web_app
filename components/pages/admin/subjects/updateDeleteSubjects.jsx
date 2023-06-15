import React from "react";
import UpdateSubject from "./forms/update.forms";

export default function SubjectsUpdateAndDelete(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-0 lg:space-x-4 md:space-x-4 space-y-4 md:space-y-4 lg:space-y-0">
      <UpdateSubject
        subjects={props && props.subjects}
        update={props && props.update}
      />
    </div>
  );
}
