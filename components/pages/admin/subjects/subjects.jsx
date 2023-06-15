import { useState } from "react";
import ListSubjectsAndCreate from "./createReadSubject";
import CreateSubject from "./forms/create.forms";
import UpdateSubject from "./forms/update.forms";
import SubjectsUpdateAndDelete from "./updateDeleteSubjects";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SubjectsComponent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const setActiveTab = (index) => setActiveIndex(index);

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const tabs = [
    {
      name: "Subjects List",
      href: "#",
      current: false,
      component: (
        <ListSubjectsAndCreate
          delete={props && props.delete}
          subjects={props && props.subjects}
          create={props && props.create}
        />
      ),
    },
    {
      name: "Manage",
      href: "#",
      current: false,
      component: (
        <SubjectsUpdateAndDelete
          subjects={props && props.subjects}
          update={props && props.update}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="">
        <div className="flex flex-col space-y-4 border-b border-gray-200 bg-gray-100 p-2">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab, key) => (
              <span
                key={key}
                onClick={() => setActiveTab(key)}
                className={`${checkActive(
                  key,
                  "border-indigo-500 text-indigo-600"
                )} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </span>
            ))}
          </nav>

          <div className="">
            {tabs.map((data, key) => {
              return (
                <div
                  key={key}
                  className={`active-tab ${checkActive(
                    key,
                    "active"
                  )} flex flex-col w-full space-y-4`}
                >
                  {data.component}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
