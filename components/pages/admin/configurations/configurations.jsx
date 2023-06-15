import { useState } from "react";
import AllAcademicYears from "./academicYears/read.academicYear";
import UpdateAcademicYear from "./academicYears/update.academicYear";
import ReleaseExam from "./examinations/releaseExam";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ConfigurationsComponent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const setActiveTab = (index) => setActiveIndex(index);

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const tabs = [
    {
      name: "Academic Years",
      href: "#",
      current: false,
      component: (
        <AllAcademicYears
          academicYears={props.academicYears}
          createAcademicYear={props.createAcademicYear}
        />
      ),
    },
    {
      name: "Update Academic Year",
      href: "#",
      current: false,
      component: (
        <UpdateAcademicYear
          academicYears={props.academicYears}
          update={props.update}
        />
      ),
    },
    {
      name: "Release Examination",
      href: "#",
      current: false,
      component: (
        <ReleaseExam
          academicYears={props.academicYears}
          releaseExam={props.releaseExam}
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
