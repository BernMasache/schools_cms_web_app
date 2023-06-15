import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard(props) {
  const formStudentCount = (list, form) => {
    let count = 0;
    if (typeof list == "object") {
      list &&
        list?.map((students) => {
          if (students?.current_year == form) {
            count = count + 1;
          }
        });
    } else {
    }
    return count;
  };

  return (
    <div className="p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Enrollment
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: "Form 1" },
          { name: "Form 2" },
          { name: "Form 3" },
          { name: "Form 4" },
        ]?.map((form, key) => (
          <div
            key={key}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="sr-only absolute rounded-md bg-indigo-500 p-3">
                {/* <item.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
              </div>
              <p className="ml-0 truncate text-sm font-medium text-gray-500">
                {form?.name}
              </p>
            </dt>
            <dd className="ml-0 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {formStudentCount(props?.studentsPresent, key + 1)}{" "}
                <span className="text-gray-500 text-sm">Students</span>
              </p>

              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Enrollment
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
